/**
 * ==========================================================================
 * USB-PD Guide Common JavaScript Utility
 * - Table Cell Truncation & Hover Floating Card (WCAG 1.4.13 Compliant)
 * ==========================================================================
 */

(function () {
  'use strict';

  let tooltipEl = null;
  let hideTimer = null;
  let activeCell = null;

  function ensureTooltipElement() {
    if (tooltipEl) return tooltipEl;
    tooltipEl = document.getElementById('tableCellTooltip');
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.id = 'tableCellTooltip';
      tooltipEl.className = 'table-cell-tooltip';
      tooltipEl.setAttribute('role', 'tooltip');
      tooltipEl.setAttribute('aria-hidden', 'true');
      document.body.appendChild(tooltipEl);

      // Keep tooltip visible when pointer hovers over the tooltip itself (WCAG 1.4.13)
      tooltipEl.addEventListener('mouseenter', () => {
        clearTimeout(hideTimer);
      });

      tooltipEl.addEventListener('mouseleave', scheduleHide);
    }
    return tooltipEl;
  }

  function isOverflowing(el) {
    // Content is truncated if scrollHeight or scrollWidth exceeds client dimensions
    return el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth + 1;
  }

  function showTooltip(td, clampEl) {
    const tip = ensureTooltipElement();
    clearTimeout(hideTimer);
    activeCell = td;

    // Retrieve column title from corresponding table header
    const cellIndex = td.cellIndex;
    const table = td.closest('table');
    let colTitle = '详细内容';
    if (table) {
      const headerCells = table.querySelectorAll('thead th');
      if (headerCells && headerCells[cellIndex]) {
        colTitle = headerCells[cellIndex].textContent.trim();
      }
    }

    tip.innerHTML = `
      <div class="table-cell-tooltip-header">
        <span class="table-cell-tooltip-title">📋 ${colTitle}</span>
        <span class="table-cell-tooltip-hint">ESC 或移开鼠标关闭</span>
      </div>
      <div class="table-cell-tooltip-body">
        ${clampEl.innerHTML}
      </div>
    `;

    tip.classList.add('is-active');
    tip.setAttribute('aria-hidden', 'false');

    // Smart positioning calculation
    const rect = td.getBoundingClientRect();
    const tipRect = tip.getBoundingClientRect();
    const margin = 12;

    // Horizontal placement: align with cell left, clamped to viewport bounds
    let left = rect.left;
    if (left + tipRect.width > window.innerWidth - margin) {
      left = window.innerWidth - tipRect.width - margin;
    }
    if (left < margin) {
      left = margin;
    }

    // Vertical placement: place below cell by default; flip above if overflowing bottom
    let top = rect.bottom + 8;
    if (top + tipRect.height > window.innerHeight - margin) {
      top = rect.top - tipRect.height - 8;
    }
    if (top < margin) {
      top = margin;
    }

    tip.style.left = `${Math.round(left)}px`;
    tip.style.top = `${Math.round(top)}px`;
  }

  function scheduleHide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
      const tip = ensureTooltipElement();
      if (!tip.matches(':hover') && (!activeCell || !activeCell.matches(':hover'))) {
        tip.classList.remove('is-active');
        tip.setAttribute('aria-hidden', 'true');
        activeCell = null;
      }
    }, 120);
  }

  function dismissTooltip() {
    clearTimeout(hideTimer);
    if (tooltipEl && tooltipEl.classList.contains('is-active')) {
      tooltipEl.classList.remove('is-active');
      tooltipEl.setAttribute('aria-hidden', 'true');
      activeCell = null;
    }
  }

  function setupTableTruncation() {
    const tables = document.querySelectorAll('.table-wrapper table, table.device-table, table');
    if (!tables.length) return;

    ensureTooltipElement();

    tables.forEach((table) => {
      const rows = table.querySelectorAll('tbody tr');
      rows.forEach((tr) => {
        // Skip full-width section group headers
        if (tr.classList.contains('table-group-header')) return;

        const tds = tr.querySelectorAll('td');
        tds.forEach((td) => {
          if (td.hasAttribute('colspan')) return;
          if (td.classList.contains('no-clamp') || td.hasAttribute('data-no-clamp')) return;

          // Wrap contents with clamp container if not already wrapped
          let clamp = td.querySelector('.table-cell-clamp');
          if (!clamp) {
            clamp = document.createElement('div');
            clamp.className = 'table-cell-clamp';
            while (td.firstChild) {
              clamp.appendChild(td.firstChild);
            }
            td.appendChild(clamp);
          }

          // Desktop hover handlers
          td.addEventListener('mouseenter', () => {
            if (isOverflowing(clamp)) {
              td.classList.add('has-truncated-content');
              showTooltip(td, clamp);
            } else {
              td.classList.remove('has-truncated-content');
            }
          });

          td.addEventListener('mouseleave', scheduleHide);

          // Mobile / touch tap toggle
          td.addEventListener('click', (e) => {
            if (isOverflowing(clamp)) {
              if (tooltipEl && tooltipEl.classList.contains('is-active') && activeCell === td) {
                dismissTooltip();
              } else {
                showTooltip(td, clamp);
              }
            }
          });
        });
      });
    });

    // Refresh truncation state for all clamped cells
    refreshTruncationStates();
  }

  function refreshTruncationStates() {
    document.querySelectorAll('.table-cell-clamp').forEach((clamp) => {
      const td = clamp.closest('td');
      if (!td) return;
      if (isOverflowing(clamp)) {
        td.classList.add('has-truncated-content');
      } else {
        td.classList.remove('has-truncated-content');
      }
    });
  }

  // Global listeners for dismiss
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') dismissTooltip();
  });

  window.addEventListener('scroll', dismissTooltip, { passive: true });

  document.addEventListener('click', (e) => {
    if (
      !e.target.closest('td.has-truncated-content') &&
      !e.target.closest('#tableCellTooltip')
    ) {
      dismissTooltip();
    }
  });

  // Debounced resize handler
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refreshTruncationStates, 150);
  });

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupTableTruncation);
  } else {
    setupTableTruncation();
  }

  // Expose global helper for dynamic catalog filtering or runtime DOM changes
  window.refreshTableTruncation = function () {
    setupTableTruncation();
    setTimeout(refreshTruncationStates, 60);
  };
})();
