export default function buildAbout(div) {
  div.replaceChildren();
  let heading = document.createElement('h1');
  heading.textContent = 'Welcome to our about page';
  
  div.appendChild(heading);
}