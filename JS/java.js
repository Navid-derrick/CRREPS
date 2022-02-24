const toggleBtn = document.getElementById("toggle-button");
const closeBtn = document.getElementById("close-button");
const menu = document.getElementById("menu");
toggleBtn.addEventListener("click", () => {
  menu.classList.add("slide-menu-on");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("slide-menu-on");
});


// open-close the submenus

const subMenuToggle = Array.from(document.querySelectorAll(".expandable"));
const subMenuMenu = Array.from(document.querySelectorAll(".sub-menu"));
const rotation = Array.from(document.querySelectorAll(".nav-list__arrow"));

document.onclick = function (e) { // when you click on anywhere
                    

  let clickedElement = e.target;
  let clickedElementClass = e.target.classList; //gets the class of the clicked element

  if (clickedElementClass.contains("expandable") ||clickedElementClass.contains("fa-caret-down")) { //if the click was on (toggle-menu or arrow)

    if (clickedElementClass.contains("expandable")) { //if toggle-menu was clicked

      let subMenu = clickedElement.nextElementSibling; //select next sibiling (submenu)
      let arrowChild = clickedElement.childNodes[1]; // select child element (arrow)

      addRemove(subMenu, arrowChild);
    }

    if (clickedElementClass.contains("fa-caret-down")) { // or if arrow was clicked

      let arrowChild = clickedElement;// the clicked element is arrow itself
      let subMenu = clickedElement.parentNode.nextElementSibling; //selecting parrent of the arrow

      addRemove(subMenu, arrowChild);
    }

  } else {   // if the click was anywhere else in the window
   
    RemoveAll(); //close all the submenus
  }
};




function addRemove(subMenu, arrowChild) {   //function for checking if the menu is already open or not then open or close it
  if (subMenu.classList.contains("sub-menu--display-on")) {
    subMenu.classList.remove("sub-menu--display-on");
    arrowChild.classList.remove("arrow__rotation");
  } else {
   RemoveAll();
    subMenu.classList.add("sub-menu--display-on"); //show menu
    arrowChild.classList.add("arrow__rotation"); //rotate arrow
  }
}


function RemoveAll(){  // function to close all the menus
  for (let j = 0; j < subMenuToggle.length; j++) {
    subMenuMenu[j].classList.remove("sub-menu--display-on");
    rotation[j].classList.remove("arrow__rotation");
  }
}


// ..................----------------slideshow,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}