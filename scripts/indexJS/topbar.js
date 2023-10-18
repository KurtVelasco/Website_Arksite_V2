document.querySelector('.topbar-dropdown-button').addEventListener('click', toggleDropdownMenu);
document.querySelector('.top-bar-login-button').addEventListener('click', toggleDropdownMenuLogin);
document.querySelector('.navbar-items.options').addEventListener('click', showOptionBar);

function toggleDropdownMenu() {
    document.querySelector('.dropdown-menu').classList.toggle('show');
  }

function toggleDropdownMenuLogin() {
    document.querySelector('.dropdown-menu-login').classList.toggle('show');
  }
 
function showCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    alert("Username: " + username + "\nPassword: " + password);
}

function showOptionBar() {
  document.querySelector('.option-bar').classList.toggle('show');

}