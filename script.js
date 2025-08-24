Window.addeventlistener('error',e=> console.error('JS error:', e.message,'at',e.filename + e.lineno));
window.addEventListener('unhandledrejection', e=> console.error('unhandled promise:', e.reason))
let dark = false;
document.addEventListener("keydown", e => {
  if (e.key === "d") {
    dark = !dark;
    document.body.style.background = dark ? "#121212" : "";
    document.body.style.color = dark ? "#f1f1f1" : "";
  }
});

