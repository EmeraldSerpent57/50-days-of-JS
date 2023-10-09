/* This project will have a menu item on any type of website that needs a menu, 
and when the menu icon is clicked it will rotate the whole website and brings in 
in the nav items on the side of the website that rotated. The Menu button will 
also change depending on what state it is in */

const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'));