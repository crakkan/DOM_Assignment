
// change navbar option name
let change = document.querySelectorAll('header nav ul li a')[2].innerHTML = '<a>Project</a>';

// Add navbar option
let element = document.createElement('li');
element.innerHTML = '<a>Hire Me</a>';
let parent = document.querySelector('header nav ul');
parent.appendChild(element);

// change placeholder name
let a = document.querySelector('.search-field input');
a.placeholder = 'Search my project';

// change hero title line
let elementa = document.querySelectorAll('.hero-left-section p span');
elementa[1].innerHTML = 'an Employee';
elementa[2].innerHTML = 'iNeurone intelligence PVT LTD.'

//  change profile pichure
let imagei = document.querySelector('.hero-right-section img');
imagei.src = 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

// add button
let button = document.querySelector('.hero-right-section-btns');
let newbtn = document.createElement('button');
newbtn.innerText = 'support me';
button.appendChild(newbtn);