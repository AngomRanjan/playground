document.addEventListener('DOMContentLoaded', function () {
  // Check the user's preferred color scheme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode');
  } else {
      document.body.classList.add('light-mode');
  }

  // Toggle between dark and light mode
  function toggleMode() {
      document.body.classList.toggle('dark-mode');
      document.body.classList.toggle('light-mode');
  }

  // Add click event listener to the toggle button
  document.getElementById('toggle-btn').addEventListener('click', toggleMode);

  // Listen for changes in the user's color scheme preference
  window.matchMedia('(prefers-color-scheme: dark)').addListener((e) => {
      if (e.matches) {
          document.body.classList.remove('light-mode');
          document.body.classList.add('dark-mode');
      } else {
          document.body.classList.remove('dark-mode');
          document.body.classList.add('light-mode');
      }
  });
});
