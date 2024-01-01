/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('registerForm');
    form.addEventListener('click', function (event) {
        // Validation for First Name
        var firstName = document.getElementById('inputFirstName').value;
        if (firstName.trim() === '') {
            alert('Please enter your first name.');
            event.preventDefault();
            return false;
        }
        // Validation for Last Name
        var lastName = document.getElementById('inputLastName').value;
        if (lastName.trim() === '') {
            alert('Please enter your last name.');
            event.preventDefault();
            return false;
        }
        // Validation for Email
        var email = document.getElementById('inputEmail').value;
        if (email.trim() === '' || !isValidEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
            return false;
        }
        // Validation for Password
        var password = document.getElementById('inputPassword').value;
        var confirmPassword = document.getElementById('inputPasswordConfirm').value;
        if (password.trim() === '') {
            alert('Please enter a password.');
            event.preventDefault();
            return false;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            event.preventDefault();
            return false;
        }
    });
    function isValidEmail(email) {
        // Simple email validation regex
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('click', function (event) {
        // Validation for Email
        var email = document.getElementById('inputEmail').value;
        if (email.trim() === '' || !isValidEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
            return false;
        }
        // Validation for Password
        var password = document.getElementById('inputPassword').value;
        if (password.trim() === '') {
            alert('Please enter a password.');
            event.preventDefault();
            return false;
        }
    });
    function isValidEmail(email) {
        // Simple email validation regex
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
