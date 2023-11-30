//changing font size and area of hero section
let rSide = document.querySelector('.new');
let title = document.querySelectorAll('.new-p');
let heading = document.querySelector('.img-heading');
let disc = document.querySelector('.sec-row-p');
let btn = document.querySelector('.read-btn');
btn.style.fontSize = '15px'
disc.style.fontSize = '20px'
heading.style.fontSize = '60px';
heading.style.padding = '10px'
rSide.style.padding = '20px';
rSide.style.width = '400px';
rSide.style.height = '500px'
// title.style.fontSize = '20px'
title.forEach(element => {
    element.style.fontSize = '20px';
})
// disable the background image
document.body.style.backgroundImage = 'none';
// toggle menu list
document.addEventListener('DOMContentLoaded', function () {
    let toggleButton = document.querySelector('.navbar-toggler');
    let menu = document.getElementById('navbarTogglerDemo01');
    console.log(toggleButton);
    console.log(menu)
    toggleButton.addEventListener('click', function () {
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    })
})