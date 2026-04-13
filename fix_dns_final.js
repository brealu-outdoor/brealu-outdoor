(async () => {
  async function updateDNS(name, target) {
    console.log(`Updating ${name} to ${target}...`);
    const rows = Array.from(document.querySelectorAll('tr'));
    const row = rows.find(r => {
        const cells = Array.from(r.querySelectorAll('td'));
        return cells.some(c => c.textContent === name) && 
               (cells.some(c => c.textContent === 'A') || cells.some(c => c.textContent === 'CNAME'));
    });

    if (!row) {
      console.log(`Row for ${name} not found.`);
      return;
    }

    const editBtn = row.querySelector('button[aria-label*="Edit"]');
    if (!editBtn) {
      console.log(`Edit button for ${name} not found.`);
      return;
    }
    editBtn.click();
    await new Promise(r => setTimeout(r, 2000));

    // After clicking edit, the form is usually in the next row or the row itself changes
    // Cloudflare uses a nested table or a new row.
    // Let's look for the form in the document.
    const typeCombobox = document.querySelector('[aria-label="Type"]');
    if (typeCombobox) {
        typeCombobox.click();
        await new Promise(r => setTimeout(r, 1000));
        const cnameOption = Array.from(document.querySelectorAll('[role="option"]')).find(el => el.textContent.trim() === 'CNAME');
        if (cnameOption) {
            cnameOption.click();
            await new Promise(r => setTimeout(r, 1000));
        }
    }

    // Target input. For CNAME it is often different.
    // Let's find any input that has a value or is meant for the content.
    const targetInput = document.querySelector('input[id^="dns-record-content-"]') || 
                        document.querySelector('input[placeholder*="Target"]') ||
                        document.querySelector('input[placeholder*="IPv4"]');
    
    if (targetInput) {
        targetInput.focus();
        targetInput.value = target;
        targetInput.dispatchEvent(new Event('input', { bubbles: true }));
        targetInput.dispatchEvent(new Event('change', { bubbles: true }));
        await new Promise(r => setTimeout(r, 500));
    }

    const saveBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Save');
    if (saveBtn) {
        saveBtn.click();
        await new Promise(r => setTimeout(r, 3000));
        console.log(`Saved ${name}.`);
    } else {
        console.log(`Save button for ${name} not found.`);
    }
  }

  await updateDNS('brealuoutdoor.com', 'brealu-outdoor.pages.dev');
  await updateDNS('www', 'brealu-outdoor.pages.dev');
  
  return "Done";
})();
