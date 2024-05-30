import styles from './style.css'
import buildHome from './home.js';
import buildMenu from './menu.js';
import buildAbout from './about.js';

let contentDiv = document.querySelector('#content');

// buttons
const homeButton = document.querySelector('#home-btn');
const menuButton = document.querySelector('#menu-btn');
const aboutButton = document.querySelector('#about-btn');

contentDiv.appendChild(buildHome());

homeButton.addEventListener('click', function() {
  contentDiv.replaceChildren();
  contentDiv.appendChild(buildHome());
})
menuButton.addEventListener('click', function() {
  contentDiv.replaceChildren();
  contentDiv.appendChild(buildMenu());
})
aboutButton.addEventListener('click', function() {
  contentDiv.replaceChildren();
  contentDiv.appendChild(buildAbout());
})