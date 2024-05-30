export default function buildAbout() {
  const frag = document.createDocumentFragment();
  let heading = document.createElement('h1');
  heading.textContent = 'About Us';
  let para = document.createElement('p');
  para.textContent = 'a';

  frag.append(heading, para);

  return frag;
}