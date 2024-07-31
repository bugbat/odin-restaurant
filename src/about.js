export default function buildAbout() {
  const frag = document.createDocumentFragment();
  let para = document.createElement('p');
  para.textContent = 'JabberWok was founded in 2012 Lorem ipsum odor amet, consectetuer adipiscing elit. Sodales pharetra mattis, tincidunt scelerisque adipiscing accumsan. Taciti parturient id egestas placerat pellentesque. Malesuada etiam iaculis lacus purus integer urna nisl id orci. Porta eros sapien ultricies erat suspendisse purus fames laoreet. Ornare semper imperdiet non amet dolor.';

  frag.append(para);

  return frag;
}