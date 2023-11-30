let list = document.querySelectorAll('a');
let myList = Array.from(list);
console.log(myList);
// let unique = [...new set(myList)]
// console.log(unique)
// Iterate through each <a> element
// Check if there's information in local storage
const removedLinks = JSON.parse(localStorage.getItem('removedLinks')) || [];
// remove item contain 2.0
myList.forEach(link => {
    // Check if the text of the link contains "2.0"
    if (link.textContent.includes("2.0")) {
        // Remove the element if it contains "2.0"
        link.remove();
        // Add the link's text content to the removedLinks array
        removedLinks.push(link.textContent);
    }
});
localStorage.setItem('removedLinks', JSON.stringify(removedLinks));

// click button to refresh the page
document.addEventListener("DOMContentLoaded", function () {
    // Enable the input and button
    const input = document.querySelector('.main__form-input');
    const button = document.querySelector('.main__form-btn');
    input.removeAttribute('disabled');
    button.removeAttribute('disabled');

    // Set a value to the input
    input.value = 'iNeuron';

    // Submit the form
    document.getElementById('myForm').submit();

    // Disable the input and button again
    input.setAttribute('disabled', true);
    button.setAttribute('disabled', true);
});