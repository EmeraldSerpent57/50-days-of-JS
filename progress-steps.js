/*progress bar that is useful for websites that utilize steps, 
ordering of goods, etc.
Buttons will will control the step transitions*/

//bring in the id's that we need from the HTML
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

//this will represent whichever button is active
let currentActive = 1;

//event listeners for the buttons 
next.addEventListener('click', () => {
    //take whatever number is active and increment by 1
    currentActive++;
    //console.log(currentActive);      *every time you click 'next' it will log a number incremented by 1
    
    //make sure it cant increment past 4 since there are only 4 bubbles
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    //console.log(currentActive);      *make sure it doesnt iterate past 4

    update();
})
prev.addEventListener('click', () => {
    //take whatever number is active and decrease by 1
    currentActive--;
    //console.log(currentActive);      *every time you click 'next' it will log a number incremented by 1
    
    //make sure it cant decrement past 1 since there are only 4 bubbles
    if(currentActive < 1) {
        currentActive = 1;
    }
    //console.log(currentActive);      *make sure it doesnt iterate prior to 1

    update();
})

//this function will update the circles to have the active class
function update() {
    //loop through the circles
    circles.forEach((circle, index) => {
        if(index < currentActive) {
            //if the index is less than the current active number, apply the active class to it
            circle.classList.add('active');
        } else {
            //remove the active class
            circle.classList.remove('active');
        }

        //get all of the active circles 
        const actives = document.querySelectorAll('.active');

        //handle the progress bar through a percentage
        //console.log((actives.length / circles.length) * 100);   to find percentages

        progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'; 
        //using '-1' to get a more accurate percentage to fill the line

        //make previous/next buttons enabled and disabled
        if(currentActive === 1) {
            prev.disabled = true;
        } else if(currentActive === circles.length) {
            next.disabled = true;
        } else {
            prev.disabled = false;
            next.disabled = false;
        }
    })
}