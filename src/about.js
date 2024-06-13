export default function buildAbout() {
  const frag = document.createDocumentFragment();
  let para = document.createElement('p');
  para.textContent = 'JabberWok was founded in 2012 by two mixed up dreamers who wanted to make a restaurant that would fail so gloriously it would end up as a B plot on an IFC original.';

  frag.append(para);

  return frag;
}