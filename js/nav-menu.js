// Author: Anton Jardine
// Mat#: 40690620
// Purpose: Adds content to the Navigation Bar

//const navBar = document.getElementById("top-menu")
const navBar = document.querySelector(".top-nav");

// insert logo image
const imgLogo = document.createElement("img");
imgLogo.src = "images/euphoria-logo.png";
imgLogo.className = "logo";
navBar.appendChild(imgLogo);

// Create Menu Items in array
const menuLinks = getMenuItems();

const ul = document.createElement("ul");
ul.className ="menu-items";
navBar.appendChild(ul);

// Extract Menu items from array and place them in the Nav Menu
menuLinks.forEach(item => {
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.textContent = item.text;
    a.href=item.link;

    li.appendChild(a);
    ul.appendChild(li);
  
});

// BURGER MENU
// create a div for the burger icon
const burgerIcon = document.createElement("div");
burgerIcon.className = "mobile-icon";

// parameters for the Burger Menu Icon
burgerIcon.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="#00000">
  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
</svg>
`;

navBar.appendChild(burgerIcon);

// Load Menu Items into Side Menu for Smaller Screens
const sideBar = document.querySelector(".side-nav");
const ulSide= document.createElement("ul");
ulSide.className = "side-menu-items";
sideBar.appendChild(ulSide);

menuLinks.forEach(item => {
    let liSide = document.createElement("li");
    let aSide = document.createElement("a");

    aSide.textContent = item.text;
    aSide.href=item.link;

    liSide.appendChild(aSide);
    ulSide.appendChild(liSide);
  
});

// Menu Items that are loaded to the Nav bars
function getMenuItems() {
    return [
        {text: "Home", link: "home.html"},
        {text: "Events", link: "events.html"},
        {text: "Classes", link: "classes.html"},
        {text: "Learn", link: "learn.html"},
        {text: "Fees", link: "fees.html"},
        {text: "Contact", link: "contact.html"}
    ]
}
