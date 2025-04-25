
    document.getElementById('contact-form').addEventListener('submit', function(event) {
    
    // store variables from contact form
    const userName = document.getElementById('name').value.trim();
    const email = document.getElementById('email1').value.trim();
    const confirmEmail = document.getElementById('verify').value.trim();

    // check if emails match
    if(email !== confirmEmail) {
        alert('Hello ' + userName + '\n The emails you entered do not match.');
        event.preventDefault();
    } else {

        // get confirmation from user to submit form info
        const isConfirmed = confirm(userName + ', select Ok if you are sure all the data is correct?');
        
        if (!isConfirmed) {
            event.preventDefault();
        }
        }

});
