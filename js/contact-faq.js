// Controls FAQ Interaction in the Classes Page.

// Get the faq-Question class and adjust
var faq = document.getElementsByClassName("faq-question");

var i;
for(i=0; i < faq.length; i++){

    // add click event listener to question button and toggle active class to button and parent
    faq[i].addEventListener("click", function () {
        this.classList.toggle("faq-active");
        this.parentElement.classList.toggle("faq-active");  // apply 

        var answer = this.nextElementSibling;
        if(answer.style.display === "block") {
            answer.style.display = "none";
        }else {
            answer.style.display = "block";
    }
    });
}
