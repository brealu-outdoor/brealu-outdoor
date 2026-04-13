(async () => {
  const typeCombobox = document.querySelector('[aria-label="Type"]');
  if (typeCombobox) {
    typeCombobox.click();
    await new Promise(r => setTimeout(r, 500));
    const cnameOption = Array.from(document.querySelectorAll('[role="option"]')).find(el => el.textContent.includes('CNAME'));
    if (cnameOption) {
      cnameOption.click();
    }
  }

  const nameInput = document.querySelector('input[id^="dns-record-name-"]'); // Cloudflare uses dynamic IDs
  if (!nameInput) {
     // try another selector
     document.querySelectorAll('input').forEach(i => {
         if (i.placeholder && i.placeholder.includes('Use @ for root')) {
             // this is the name input
         }
     });
  }
  
  // Actually, Cloudflare dashboard is complex. Let's use a simpler approach.
  // I will just use the act tool with CSS selectors.
})();
