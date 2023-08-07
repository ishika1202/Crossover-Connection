/*const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropDownMenu = document.querySelector('.dropdown_menu')

        toggleBtn.onclick = function(){
          dropDownMenu.classList.toggle('open')
          const isOpen = dropDownMenu.classList.contains('open')

          toggleBtnIcon.classList = isOpen
          ? 'fa-solid fa-xmark'
          : 'fa-solid fa-bars'
        }
*/
// Navbar.js
const toggleBtn = document.querySelector(".toggle_btn");
const links = document.querySelector(".navbar .links");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.addEventListener("click", () => {
  links.classList.toggle("active");
  dropdownMenu.classList.toggle("active");
});
