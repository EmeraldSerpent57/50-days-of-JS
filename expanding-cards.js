//want to be able to switch the "active" panel status between cards as we flip through them so the active panel will expand and show the text
//with querySelectorAll it will select all of the panels and put them in to a node list (similar to an array) 
const panels = document.querySelectorAll('.panel');

//loop through each panel
panels.forEach((panel) => {
    //console.log(panel)    *this will print and loop through each panel
    //have an event listener on each panel, so something will happen on each click
    panel.addEventListener('click', () => {
        //console.log(123)    *123 will be logged for each panel that is clicked on
        
        //remove the "active" class on all other panels right before
        removeActiveClasses()

        //when a panel is clicked, add the "active" class to it
        panel.classList.add('active');
    })
})

//function to remove all active classes
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}

//console.log(panels);   *this will print a list with each panels div and the specs associated with it. We can then target each panel by number if we need to