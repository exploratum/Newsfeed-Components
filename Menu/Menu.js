
const toggleMenu = (event) => {

  // Toggle the "menu--open" class on your menu refence. 

  if(menu.classList.contains("menu--open")) //Stretch: if previously was showing now hide it to left
    menu.style.left = "-350px";   
  else                                      //Stretch: if previously was hidden now show it by moving it inside the window
    menu.style.left = "0px";     

  menu.classList.toggle("menu--open"); 
  event.stopPropagation();
}

const toggleMenuFromBody = () => {
  if(menu.classList.contains("menu--open")) {
    menu.style.left = "-350px";
    menu.classList.toggle("menu--open");
  }
  
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");

// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu)

//create reference to body tag
body = document.querySelector('body');

//Hide menu if clicking on body - Do not hide when clicking on menu
menu.addEventListener('click', (event => event.stopPropagation())); //Bonus Stretch 1: prevents click event to bubble up to body-> no menu closing when clicking on menu
body.addEventListener('click', toggleMenuFromBody);
