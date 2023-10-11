/* As the % goes from 0-100, the background image will "load" by
decreasing in blurriness. 
0% = background image most blurred
100% = no blur on image */

//bring in classes
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

//initialize 'load' which will start at 0 and increment up to 100
let load = 0;

//need the function to run in an interval, every 30 seconds
let int = setInterval(blurring, 30);

function blurring() {
    //take the initial load value and increment by 1
    load++;

    if(load > 99) {
        //clear the interval
        clearInterval(int);
    }

    //console.log(load);    //make sure numbers are incrementing up to 100

    //change the loading text to reflect the % its at
    loadText.innerText = `${load}%`;

    //take the LOAD TEXT and use that to set the opacity, needs to go from 1 to 0. 
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    /*load=number currently on screen
    0= 0%
    100= 100%
    1= blurred opacity
    0= clear opacity*/

    //now take the IMAGE and set the blur opacity and the number loads
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    /*blur= what effect we want on the image
    scale= function below
    load= number currently on screen
    0= 0%
    100= 100%
    30= 30px blur (max blur)
    0= 0px blur (clear image)*/
}

//use this stack overflow post: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}