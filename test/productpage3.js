let mi = document.getElementById('menuicon');
let navMenu = document.getElementById('navmenu');
let pageHeader = document.getElementById('pageheader');
let mainHeading = document.getElementById('mainheading');
let navLinks = document.getElementsByClassName('navlink');
let closeButton = document.getElementById('closebutton');
let i;

function openNav() {
    mi.style.display = "none";
    pageHeader.style.cssText = "height: 100vh; width: 100%";
    navMenu.style.display = "block";
    mainHeading.style.display = "none";
    closeButton.style.display = "block";
}

function closeNav() {
    mi.style.display = "initial";
    pageHeader.style.cssText = "height: auto; width: 90%";
    navMenu.style.display = "none";
    mainHeading.style.display = "initial";
    closeButton.style.display = "none";
}