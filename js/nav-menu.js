// Create Array of Menu Links
const menuLinks = [
    {text: "Home", link: "home.html"},
    {text: "Events", link: "events.html"},
    {text: "Classes", link: "classes.html"},
    {text: "Learn", link: "learn.html"},
    {text: "About Us", link: "about-us.html"},
    {text: "Fees", link: "fees.html"},
    {text: "Contact", link: "contact.html"}
]

// Select the Menu List
const menuItems = document.getElementByIdById("menu-items");

// Add Menu information to the selected Element
menuLinks.forEach(item => {

    let a = document.createElement("a");
    let li = document.createElement("li");

    a.href = item.link;
    li.textContent = item.text

    li.appendChild(a);
    menuLinks.appendChild(li);


})