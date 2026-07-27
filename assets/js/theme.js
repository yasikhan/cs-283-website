// Nav light/dark toggle. The initial data-theme attribute is set pre-paint by the
// inline script in _includes/head.html; this only wires the button and persists
// the user's choice. Loaded with `defer`, so the DOM is already parsed.
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  // Show the icon for the theme you'd switch TO: moon in light mode, sun in dark.
  function icon(theme) { return theme === 'dark' ? '☀' : '☾'; }
  function label(theme) {
    return theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  function render(theme) {
    btn.textContent = icon(theme);
    btn.setAttribute('aria-label', label(theme));
  }

  render(document.documentElement.getAttribute('data-theme') || 'light');

  btn.addEventListener('click', function () {
    var next =
      document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    render(next);
  });
})();
