// Author: Anton Jardine
// 

const navBar = document.getElementById("top-menu")
const imgLogo = document.createElement("img");
imgLogo.src = "images/euphoria-logo.png";
imgLogo.className = "logo";
navBar.appendChild(imgLogo);

// Create Menu Items in array
const menuLinks = [
    {text: "Home", link: "home.html"},
    {text: "Events", link: "events.html"},
    {text: "Classes", link: "classes.html"},
    {text: "Learn", link: "learn.html"},
    {text: "Fees", link: "fees.html"},
    {text: "About Us", link: "about-us.html"},
    {text: "Contact", link: "contact.html"}
]

// Extract Menu items from array and place them in the Nav Menu
menuLinks.forEach(item => {
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.textContent = item.text;
    a.href=item.link;

    li.appendChild(a);
    navBar.appendChild(li);

});
