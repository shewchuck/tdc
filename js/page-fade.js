(() => {
  const content = document.getElementById("page-content");
  if (!content) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const DURATION = reduced ? 0 : 220;

  // Fade IN on load/pageshow (covers back/forward cache)
  function fadeIn() {
    content.classList.remove("is-fading-out");
    content.style.opacity = "0";
    requestAnimationFrame(() => {
      content.style.opacity = "1";
    });
  }

  window.addEventListener("pageshow", fadeIn);
  document.addEventListener("DOMContentLoaded", fadeIn);

  // Intercept navigation clicks
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;

    // ignore new tab, downloads, modifier keys
    if (a.target === "_blank" || a.hasAttribute("download")) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    // Resolve URLs safely (works with GitHub Pages)
    const current = new URL(window.location.href);
    const target = new URL(a.href, window.location.origin);

    // External? Let it behave normally.
    if (target.origin !== current.origin) return;

    // Same page? (e.g., clicking “About” while already there)
    // This matches the behavior you liked: do nothing.
    if (target.pathname === current.pathname) return;

    // Optional: if you use same-page anchors, don’t fade
    if (target.pathname === current.pathname && target.hash) return;

    e.preventDefault();

    content.classList.add("is-fading-out");
    setTimeout(() => {
      window.location.href = target.href;
    }, DURATION);
  });
})();
