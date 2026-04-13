
(async () => {
  const styles = {
    fontFamily: getComputedStyle(document.body).fontFamily,
    fontSize: getComputedStyle(document.querySelector('h1') || document.querySelector('h2')).fontSize,
    headerColor: getComputedStyle(document.querySelector('header') || document.body).backgroundColor,
    buttonStyle: getComputedStyle(document.querySelector('.btn, button, a[href*="contact"]')).backgroundColor,
    textColor: getComputedStyle(document.body).color
  };
  return styles;
})()
