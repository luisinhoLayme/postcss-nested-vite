
export const onChangeTheme = (button: HTMLButtonElement):void => {
  const setAttr = () => {
    const body = document.body

      body.style.transition = 'all 1s ease'
    // NOTE: si tiene el attribute data-theme
    if (!body.getAttribute('data-theme')) {
      body.setAttribute('data-theme', 'light')
      button.textContent = 'dark'
    } else {
      body.removeAttribute('data-theme')
      button.textContent = 'light'
    } 
    setTimeout(() => {
      body.removeAttribute('style')
    }, 1000)
  }
  button.addEventListener('click', setAttr)
}
