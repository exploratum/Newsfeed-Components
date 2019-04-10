
const toggleMenu = () => {

  // Toggle the "menu--open" class on your menu refence. 

  if(menu.classList.contains("menu--open")) //Stretch: if previously was showing now hide it to left
    menu.style.left = "-350px";   
  else                                      //Stretch: if previously was hidden now show it by moving it inside the window
    menu.style.left = "0px";     

  menu.classList.toggle("menu--open"); 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu)

