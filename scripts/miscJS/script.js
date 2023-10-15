
const dropdownLinks = document.querySelectorAll('.top-bar-dropdown > .link');
dropdownLinks.forEach((link) => {
  link.addEventListener('focus', showDropdownMenu);
});


function showDropdownMenu(event) {
  const dropdownMenu = event.target.nextElementSibling;
  dropdownMenu.style.opacity = '1';
  dropdownMenu.style.transform = 'translateY(0)';
  dropdownMenu.style.pointerEvents = 'auto';
}

document.addEventListener('click', (event) => {
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');
  dropdownMenus.forEach((menu) => {
    const link = menu.previousElementSibling;
    if (!menu.contains(event.target) && !link.contains(event.target)) {
      menu.style.opacity = '0';
      menu.style.transform = 'translateY(-10px)';
      menu.style.pointerEvents = 'none';
    }
  });
});