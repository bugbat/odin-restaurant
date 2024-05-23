export default function buildHome(div) {
  div.replaceChildren();
  let heading = document.createElement('h1');
  heading.textContent = 'Welcome to our homepage';
  
  div.appendChild(heading);
}