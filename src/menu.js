export default function buildMenu(div) {
  div.replaceChildren();
  let heading = document.createElement('h1');
  heading.textContent = 'Welcome to our menu';
  
  div.appendChild(heading);
}