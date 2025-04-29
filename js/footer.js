const footer = document.querySelector("footer");
const currentYear = new Date().getFullYear();

const copyright =document.createElement("p");
copyright.classList.add('footer-text');
copyright.innerHTML = '&copy' + currentYear + ' Euphoria Latin Dance Academy';
footer.appendChild(copyright);