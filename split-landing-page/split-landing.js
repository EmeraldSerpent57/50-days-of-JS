/* This project will feature two separate products on a landing page. 
When one side is hovered over, it will expand to 75% of the screen. If 
nothing is hovered over, they will share the screen 50% */

//bring in classes
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

//add the event listeners to the left
left.addEventListener('mouseenter', () => {
    //add the hover class
    container.classList.add('hover-left');
});
left.addEventListener('mouseleave', () => {
    //add the hover class
    container.classList.remove('hover-left');
});

//add the event listeners to the right
right.addEventListener('mouseenter', () => {
    //add the hover class
    container.classList.add('hover-right');
});
right.addEventListener('mouseleave', () => {
    //add the hover class
    container.classList.remove('hover-right');
});