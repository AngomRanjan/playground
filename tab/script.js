const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');
const tabsContainer = document.querySelector('.tabs__container');

function activateTab(tab) {
  // Deactivate all tabs
  tabs.forEach((t) => {
    t.setAttribute('aria-selected', 'false');
    t.setAttribute('tabindex', '-1'); // Remove from tab order
  });

  // Hide all panels
  panels.forEach((p) => p.setAttribute('aria-hidden', 'true'));

  // Activate selected tab
  tab.setAttribute('aria-selected', 'true');
  tab.setAttribute('tabindex', '0'); // Make it focusable
  document
    .getElementById(tab.getAttribute('aria-controls'))
    .setAttribute('aria-hidden', 'false');
  tab.focus();
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => activateTab(tab));

  tab.addEventListener('keydown', (e) => {
    let newIndex;
    const currentIndex = Array.from(tabs).indexOf(tab);

    if (e.key === 'ArrowRight') {
      newIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      newIndex = 0;
    } else if (e.key === 'End') {
      newIndex = tabs.length - 1;
    }

    if (newIndex !== undefined) {
      activateTab(tabs[newIndex]);
    }
  });
});
