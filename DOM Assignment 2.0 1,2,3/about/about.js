let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// change nav option name 
let contact = document.querySelectorAll('header nav ul li a')[2].innerHTML = '<a>Project</a>';
// console.log(contact);

// change achordian color
let heading = document.querySelectorAll('.accordian h3');
let paragraph = document.querySelectorAll('.accordian p');
heading.forEach((element) => { element.style.backgroundColor = '#23C4ED' });
paragraph.forEach((element) => { element.style.backgroundColor = '#CAD5E2' });

// add skills
// let parent = document.querySelector('.accordian-wrapper');
// let element = document.createElement('div');
// element.classList.add('accordian');
// let headingg = document.createElement('h3');
// heading.innerText = 'Skills'
// let paragraphh = document.createElement('p');
// paragraphh.innerText = 'I posses a very good command over the full stack Development like MERn which can be seen in my work over github';
// paragraphh.style.display = 'none';
// parent.addEventListener("click", () => {
//   headingg.classList.toggle("active");
//   if (headingg.style.display === "block") {
//     headingg.style.display = "none";
//   } else {
//     headingg.style.display = "block";
//   }
// });
// headingg.appendChild(paragraph);

// function addAccordianItem(tilteText, descriptionText) {
//   let parent = document.querySelector('.accordian-wrapper');
//   let element = document.createElement('div');
//   element.classList.add('.accordian');

//   let tilte = document.createElement('div');
//   tilte.classList.add('.accordian');
//   tilte.textContent = tilteText

//   let discription = document.createElement('div');
//   discription.classList.add('accordion-description');
//   discription.textContent = descriptionText;

//   element.appendChild(tilte);
//   element.appendChild(discription);

//   let accordion = document.querySelector('.accordion');
//   accordion.appendChild(newItem);

//   // Add a click event listener to the new title for toggling
//   tilte.addEventListener('click', () => {
//     if (discription.style.display === 'none' || discription.style.display === '') {
//       discription.style.display = 'block';
//     } else {
//       discription.style.display = 'none';
//     }
//   });
// }
// addAccordianItem('Section 3', 'This is the content of section 3.');

// Function to add a new title and description to an existing accordion
function addTitleAndDescription(accordionIndex, titleText, descriptionText) {
  // Select the accordion element by index (0-based)
  const accordions = document.querySelectorAll('.accordion');
  const accordion = accordions[accordionIndex];

  // Create a new h3 element for the title
  const title = document.createElement('h3');
  title.textContent = titleText;

  // Create a new p element for the description
  const description = document.createElement('p');
  description.textContent = descriptionText;

  // Append the title and description to the accordion
  accordion.appendChild(title);
  accordion.appendChild(description);
}

// Example usage to add a new title and description to the first accordion
addTitleAndDescription(0, 'New Title', 'This is a new description.');

