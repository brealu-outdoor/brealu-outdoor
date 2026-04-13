(async () => {
  // Function to edit a DNS record by name
  async function updateRecord(name, target) {
    // find the row by name
    const rows = Array.from(document.querySelectorAll('tr'));
    const row = rows.find(r => r.innerText.includes(name) && (r.innerText.includes(' A ') || r.innerText.includes(' CNAME ')));
    if (!row) {
        console.log(`Row for ${name} not found.`);
        return;
    }
    
    // Find edit button (caret-right button)
    const editBtn = row.querySelector('button[aria-label*="Edit"]');
    if (!editBtn) {
        console.log(`Edit button for ${name} not found.`);
        return;
    }
    editBtn.click();
    await new Promise(r => setTimeout(r, 1000));
    
    // find the type combobox (usually the first one in the edit form)
    // The edit form appears in a row below the current row, or as part of the row.
    // In Cloudflare it is typically another row added.
    const editForm = row.nextElementSibling;
    if (!editForm) {
        console.log(`Edit form for ${name} not found.`);
        return;
    }

    const typeCombobox = editForm.querySelector('[aria-label="Type"]');
    if (typeCombobox) {
        typeCombobox.click();
        await new Promise(r => setTimeout(r, 500));
        const cnameOption = Array.from(document.querySelectorAll('[role="option"]')).find(el => el.textContent.includes('CNAME'));
        if (cnameOption) {
            cnameOption.click();
            await new Promise(r => setTimeout(r, 500));
        }
    }

    // find the target input
    // The target input for CNAME is "Target (required)"
    const targetInput = editForm.querySelector('input[id^="dns-record-content-"]');
    if (targetInput) {
        targetInput.value = target;
        targetInput.dispatchEvent(new Event('input', { bubbles: true }));
        targetInput.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // find save button
    const saveBtn = editForm.querySelector('button[aria-label="Save"]');
    if (saveBtn) {
        saveBtn.click();
        await new Promise(r => setTimeout(r, 2000));
    }
  }

  // Cloudflare often doesn't like direct value setting. We might need more interaction.
  // Actually, I'll just use the dashboard's API if I can.
  // But updating through UI is better for visibility.
  
  // Update @
  await updateRecord('brealuoutdoor.com', 'brealu-outdoor.pages.dev');
  // Update www
  await updateRecord('www', 'brealu-outdoor.pages.dev');
})();
