/* Widget will be a small search icon that when you click it, it will expand to be a 
typeable search bar, and then re-collapse when you are done with the search */

//bring in classes
const search = document.querySelector('.search');
const button = document.querySelector('.btn');
const input = document.querySelector('.input');

//add a click event to the button
button.addEventListener('click', () => {
    //add and remove the active class to the search class with toggle
    search.classList.toggle('active');

    //set focus on the input
    input.focus();
})