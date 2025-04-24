// Controls FAQ Interaction in the Classes Page.

// Get the faq-Question class and adjust
var faq = document.getElementsByClassName("faq-question");

var i;
for(i=0; i < faq.length; i++){

    // add click event listener to question button
    faq[i].addEventListener("click", function () {
        this.classList.toggle("faq-active");        //toggle the class for the button to faq-active
        
        // show or hide the answer for the corresponding question.
        var answer = this.nextElementSibling;
        answer.classList.toggle("show");

    });
}
