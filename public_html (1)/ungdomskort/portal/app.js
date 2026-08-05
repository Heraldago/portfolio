'use strict';

/* ─── PAGE ROUTING ──────────────────────────────────── */
const pages = {
  dashboard: document.getElementById('page-dashboard'),
  calendar:  document.getElementById('page-calendar'),
  messages:  document.getElementById('page-messages'),
  profile:   document.getElementById('page-profile'),
};

const navPills = {
  dashboard: document.getElementById('nav-dashboard'),
  messages:  document.getElementById('nav-messages'),
  profile:   document.getElementById('nav-profile'),
};

let currentPage = 'dashboard';

function showPage(pageKey) {
  // Hide all pages
  Object.entries(pages).forEach(([key, el]) => {
    if (!el) return;
    el.classList.remove('page--active');
    el.hidden = true;
  });

  // Show target page
  const target = pages[pageKey] || pages.dashboard;
  target.classList.add('page--active');
  target.hidden = false;

  // If going to calendar from dashboard's Add button, map to calendar tab
  const navKey = pageKey === 'calendar' ? 'dashboard' : pageKey;

  // Update nav pills
  Object.entries(navPills).forEach(([key, btn]) => {
    if (!btn) return;
    if (key === navKey) {
      btn.classList.add('nav-pill--active');
      btn.setAttribute('aria-current', 'page');
    } else {
      btn.classList.remove('nav-pill--active');
      btn.removeAttribute('aria-current');
    }
  });

  currentPage = pageKey;

  // Scroll to top of main
  document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Wire up nav buttons to pages
document.getElementById('nav-dashboard')?.addEventListener('click', () => showPage('dashboard'));
document.getElementById('nav-messages')?.addEventListener('click', () => showPage('messages'));
document.getElementById('nav-profile')?.addEventListener('click', () => showPage('profile'));

// ─── CALENDAR MONTH NAVIGATION ─────────────────────── */
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

let calYear = 2024;
let calMonth = 9; // October (0-indexed)

function changeMonth(delta) {
  calMonth += delta;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  if (calMonth < 0)  { calMonth = 11; calYear--; }

  const label = document.getElementById('cal-month-label');
  if (label) {
    label.textContent = `${months[calMonth]} ${calYear}`;
  }
}

// ─── ADD PERIOD MODAL (SIMPLE INLINE TOAST) ─────────── */
document.getElementById('add-new-period-cal-btn')?.addEventListener('click', () => {
  showToast('Period booking flow would open here ✓', 'success');
});

document.getElementById('add-period-btn')?.addEventListener('click', () => {
  // navigate to calendar page
  showPage('calendar');
});

// ─── TOAST NOTIFICATION ─────────────────────────────── */
function showToast(message, type = 'info') {
  // Remove existing toast
  document.getElementById('ung-toast')?.remove();

  const toast = document.createElement('div');
  toast.id = 'ung-toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');

  const colors = {
    success: { bg: '#E8F7E8', border: '#A8DDAA', color: '#1B9B1B' },
    info:    { bg: '#EBF3FC', border: '#9FC4ED', color: '#1B6FC8' },
    warning: { bg: '#FEF3C7', border: '#FBD38D', color: '#D97706' },
  };
  const c = colors[type] || colors.info;

  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: '9999',
    background: c.bg,
    border: `1px solid ${c.border}`,
    color: c.color,
    padding: '12px 20px',
    borderRadius: '12px',
    fontSize: '0.875rem',
    fontWeight: '600',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    boxShadow: '0 4px 16px rgba(17,30,37,0.12)',
    animation: 'slideInRight 200ms ease',
    maxWidth: '320px',
  });

  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'fadeOut 200ms ease forwards';
    setTimeout(() => toast.remove(), 200);
  }, 3000);
}

// ─── KEYBOARD NAV ─────────────────────────────────────── */
document.addEventListener('keydown', (e) => {
  // ESC closes any modals (future use)
  if (e.key === 'Escape') {
    document.getElementById('ung-toast')?.remove();
  }
});

// ─── INJECT ANIMATION KEYFRAMES ─────────────────────── */
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeOut {
    to { opacity: 0; transform: translateX(10px); }
  }
`;
document.head.appendChild(style);

// ─── INIT ─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Ensure dashboard is shown first
  showPage('dashboard');

  // Live region for screen readers
  const live = document.createElement('div');
  live.setAttribute('aria-live', 'polite');
  live.setAttribute('role', 'status');
  live.className = 'visually-hidden';
  live.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);';
  document.body.appendChild(live);
});
