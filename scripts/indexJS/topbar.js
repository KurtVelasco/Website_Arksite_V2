function toggleDropdownMenu() {
    document.querySelector('.dropdown-menu').classList.toggle('show');
  }

function toggleDropdownMenuLogin() {
    document.querySelector('.dropdown-menu-login').classList.toggle('show');
  }
 
 
document.querySelector('.top-bar-dropdown-button').addEventListener('click', toggleDropdownMenu);
document.querySelector('.top-bar-login-button').addEventListener('click', toggleDropdownMenuLogin);