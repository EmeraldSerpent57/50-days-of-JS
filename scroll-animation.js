/*for this project, as you scroll down the page, the different content boxes 
(pieces of your website) will ease in from different sides of the screen
as you scroll up, they will ease back out off the screen */

//bring in classes 
const boxes = document.querySelectorAll('.box');

//add event listener and check positioning of each box
window.addEventListener('scroll', checkBoxes);

//run the function
checkBoxes();

//function to check position of boxes (pieces) on the screen
function checkBoxes() {
    //where is the trigger point for the boxes. When should they come in, should be slightly less than the inner height
   //console.log(window.innerHeight);   //to find inner height of the browser window
   const triggerBottom = window.innerHeight / 5 * 4;

   //loop through the boxes
   boxes.forEach(box => {
    //get top of box
    //getBoundingClientRect is method that returns DOMrect object and provides info about the size of an element and its position relative to the viwport
    const boxTop = box.getBoundingClientRect().top;

    //is top of box less than trigger bottom?
    if(boxTop < triggerBottom) {
        //add the show class to that box so it slides in
        box.classList.add('show');
    } else {
        //if its not, remove the class
        box.classList.remove('show');
    }
   })
}




//can do this, or if you want something different or fancier, can use the Animate on Scroll library (https://github.com/michalsnik/aos) (https://michalsnik.github.io/aos/)