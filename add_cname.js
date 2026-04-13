(async () => {
  function findElement(selector, text) {
    const elements = Array.from(document.querySelectorAll(selector));
    return elements.find(el => el.textContent.trim().includes(text));
  }

  // Find the Type selector (usually a div with react-select)
  const typeControl = document.querySelector('[data-testid="dns-record-editor-type-field"]') || 
                      document.querySelector('.react-select__control');
  
  if (typeControl) {
    typeControl.click();
    await new Promise(r => setTimeout(r, 1000));
    const options = Array.from(document.querySelectorAll('[id^="react-select-"][id*="-option-"]'));
    const cnameOption = options.find(o => o.textContent.trim() === 'CNAME');
    if (cnameOption) {
      cnameOption.click();
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  // Fill Name
  const nameInput = document.querySelector('input[name="name"]') || 
                    document.querySelector('[aria-label="Name (required)"]') ||
                    document.querySelector('input[placeholder="e.g. example.com"]');
  if (nameInput) {
    nameInput.value = '@';
    nameInput.dispatchEvent(new Event('input', { bubbles: true }));
  }

  // Fill Target
  const targetInput = document.querySelector('input[name="content"]') || 
                      document.querySelector('[aria-label="Target (required)"]') ||
                      document.querySelector('input[placeholder="e.g. example.pages.dev"]');
  if (targetInput) {
    targetInput.value = 'brealu-outdoor.pages.dev';
    targetInput.dispatchEvent(new Event('input', { bubbles: true }));
  }

  // Click Save
  const saveBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Save');
  if (saveBtn) {
    saveBtn.click();
    return "Record root CNAME added";
  }
  return "Could not find Save button";
})()
