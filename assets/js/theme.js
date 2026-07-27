// Nav light/dark toggle. By default the theme follows the OS (matched pre-paint by
// the inline script in _includes/head.html, and tracked live below). Toggling the
// button stores an explicit choice that overrides the OS from then on. Loaded with
// `defer`, so the DOM is already parsed.
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  var root = document.documentElement;

  function stored() {
    try {
      var t = localStorage.getItem('theme');
      return t === 'dark' || t === 'light' ? t : null;
    } catch (e) {
      return null;
    }
  }

  // Show the icon for the theme you'd switch TO: moon in light mode, sun in dark.
  function icon(theme) { return theme === 'dark' ? '☀' : '☾'; }
  function label(theme) {
    return theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    btn.textContent = icon(theme);
    btn.setAttribute('aria-label', label(theme));
  }

  apply(root.getAttribute('data-theme') || 'light');

  // Toggle: flip the current theme and remember it as an explicit override.
  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', next); } catch (e) {}
    apply(next);
  });

  // Follow the OS live — but only while the user hasn't made an explicit choice.
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener('change', function (e) {
    if (stored()) return;
    apply(e.matches ? 'dark' : 'light');
  });
})();
