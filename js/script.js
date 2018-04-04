const themeCheckbox = document.querySelector('#themeCheckbox');
themeCheckbox.addEventListener('change', switchTheme);

function switchTheme () {
   const body = document.querySelector('body');
   body.classList.toggle('green');
}