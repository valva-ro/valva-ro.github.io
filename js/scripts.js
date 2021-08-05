/*!
* Start Bootstrap - Resume v7.0.2 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


const es = "[lang=\"es\"]";
const en = "[lang=\"en\"]";
changeVisibility(en, es);

document.querySelector("#es").addEventListener("click", ev => {
    ev.preventDefault();
    changeVisibility(es, en);
});

document.querySelector("#en").addEventListener("click", ev => {
    ev.preventDefault();
    changeVisibility(en, es);
});

document.querySelector("#toggleTheme").addEventListener("change", () => {
    document.body.classList.toggle("light");
});

function changeVisibility(show, hide) {
    document.querySelectorAll(show).forEach(sh => sh.classList.remove("hide"));
    document.querySelectorAll(hide).forEach(hi => hi.classList.add("hide"));
}
