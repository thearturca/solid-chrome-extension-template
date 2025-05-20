try {
  chrome.devtools.panels.create(
    "Template Dev Tools",
    "icon-34.png",
    "src/pages/devtools/panel/index.html"
  );
} catch (e) {
  console.error(e);
}
