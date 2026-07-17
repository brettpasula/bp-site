// Theme toggle — mirrors the old Angular ThemeService behavior:
// saved preference wins, otherwise follow the OS.
const STORAGE_KEY = "bp-theme";
const root = document.documentElement;

document.getElementById("theme-toggle").addEventListener("click", () => {
  const dark = root.classList.toggle("dark");
  localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
});

// Follow OS theme changes live unless the user has chosen explicitly.
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    root.classList.toggle("dark", e.matches);
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
