(async () => {
  const typeCombobox = document.querySelector('div[data-testid="dns-record-editor-type-field"] input') || document.querySelector('input[id^="react-select-"]');
  // Cloudflare often uses react-select.
  // Let's try to find the select and change it.
  // Alternative: find by text "Type"
  const labels = Array.from(document.querySelectorAll('label'));
  const typeLabel = labels.find(l => l.textContent.includes('Type'));
  if (typeLabel) {
    const select = typeLabel.parentElement.querySelector('select') || typeLabel.parentElement.querySelector('input');
    // If it's a react-select, we might need to click it and then select.
  }

  // Let's try to just find the input and type "CNAME" then Enter.
  const inputs = Array.from(document.querySelectorAll('input'));
  const typeInput = inputs.find(i => i.getAttribute('aria-label') === 'Type' || i.id.includes('type'));
  if (typeInput) {
    typeInput.focus();
    // This might not work for react-select.
  }

  // Best way for react-select:
  // Click the container, then type, then enter.
})();
