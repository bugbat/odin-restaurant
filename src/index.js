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
homeButton.classList.add("selected");


homeButton.addEventListener('click', function() {
  clearButtonClasses();
  homeButton.classList.add("selected");
  contentDiv.replaceChildren();
  contentDiv.appendChild(buildHome());
})
menuButton.addEventListener('click', function() {
  clearButtonClasses();
  menuButton.classList.add("selected");
  contentDiv.replaceChildren();
  contentDiv.appendChild(buildMenu());
})
aboutButton.addEventListener('click', function() {
  clearButtonClasses();
  aboutButton.classList.add("selected");
  contentDiv.replaceChildren();
  contentDiv.appendChild(buildAbout());
})

function clearButtonClasses() {
  btnsArray.forEach(button => {
    button.classList.remove("selected");
  });
}