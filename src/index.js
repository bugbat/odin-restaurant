import buildHome from './home.js'
import buildMenu from './menu.js'
import buildAbout from './about.js'

let contentDiv = document.querySelector('#content');

// buttons
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

buildHome(contentDiv);

homeButton.addEventListener('click', function() {
  buildHome(contentDiv);
})
menuButton.addEventListener('click', function() {
  buildMenu(contentDiv);
})
aboutButton.addEventListener('click', function() {
  buildAbout(contentDiv);
})