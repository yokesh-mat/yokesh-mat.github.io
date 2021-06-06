/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("pp-app-myDropdown").classList.toggle("pp-app-show");
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function hideAllMenus() {
  // Get all the dropdowns into an array.
  menus.forEach(function(dropdown) {
    // If the element currently is not hidden
    if(!dropdown.classList.contains("pp-app-hide")){
      openMenu = dropdown;
      dropdown.classList.add('pp-app-hide'); // Hide it
    }
  });
}

function myMenu() {
  // document.getElementById("pp-app-card-myDropdown").classList.toggle("pp-app-show");
   hideAllMenus();      // Hide all the menus
  
  // If the clicked item was a menu
  if (event.target.classList.contains('pp-app-dropbtn')) { 
    if(event.target.nextElementSibling === openMenu){
      event.target.nextElementSibling.classList.add("pp-app-hide");
      openMenu = null;
    } else {
      // Go to the next element that is a sibling of the one that got clicked (the menu)
      // and toggle the use of the `hide` CSS class
      event.target.nextElementSibling.classList.remove("pp-app-hide"); // Show the one that was clicked
      openMenu = event.target.nextElementSibling;
    }
  } 
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.pp-app-dropbtn')) {
    var dropdowns = document.getElementsByClassName("pp-app-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('pp-app-show')) {
        openDropdown.classList.remove('pp-app-show');
      }
    }
  }
}


