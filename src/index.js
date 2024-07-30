import styles from './style.css'
import buildHome from './home.js';
import buildMenu from './menu.js';
import buildAbout from './about.js';

let contentDiv = document.querySelector('#content');

// buttons
const homeButton = document.querySelector('#home-btn');
const menuButton = document.querySelector('#menu-btn');
const aboutButton = document.querySelector('#about-btn');
const btnsArray = [homeButton, menuButton, aboutButton]

contentDiv.appendChild(buildHome());
homeButton.disabled = true;


homeButton.addEventListener('click', function() {
  enableButtons();
  homeButton.disabled = true;
  contentDiv.replaceChildren();
  contentDiv.appendChild(buildHome());
})
menuButton.addEventListener('click', function() {
  enableButtons();
  menuButton.disabled = true;
  contentDiv.replaceChildren();
  contentDiv.appendChild(buildMenu());
})
aboutButton.addEventListener('click', function() {
  enableButtons();
  aboutButton.disabled = true;
  contentDiv.replaceChildren();
  contentDiv.appendChild(buildAbout());
})

function enableButtons() {
  btnsArray.forEach(button => {
    button.disabled = false;
  });
}