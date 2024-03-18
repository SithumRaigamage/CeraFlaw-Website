
/*==================== toggle icon navbar ====================*/ 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*================ scroll section active link ================*/ 

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// contactForm.js

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var emailSubject = document.getElementById('emailSubject').value;
    var message = document.getElementById('message').value;
    
    // List of multiple email addresses separated by commas
    var emails = ['email1@example.com', 'email2@example.com', 'email3@example.com'];
    
    // Construct mailto URL with multiple email addresses
    var mailtoUrl = 'mailto:' + emails.join(',')  // Join email addresses with commas
                    + '?subject=' + encodeURIComponent(emailSubject)
                    + '&body=' + encodeURIComponent('Name: ' + fullName + '\n'
                                                    + 'Email: ' + email + '\n'
                                                    + 'Mobile Number: ' + mobileNumber + '\n'
                                                    + 'Message: ' + message);
    
    // Open the mail client
    window.location.href = mailtoUrl;
});
