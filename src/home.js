export default function buildHome() {
  const frag = document.createDocumentFragment();
  let heading = document.createElement('h1');
  heading.textContent = 'Home';
  let para1 = document.createElement('p');
  let para2 = document.createElement('p');
  let para3 = document.createElement('p');
  para1.textContent = "Welcome to JabberWok, where the whimsy of Lewis Carroll's imagination meets the rich tapestry of Chinese cuisine. Our name, a playful twist on the fantastical creature from “Jabberwocky,” reflects our commitment to creating an enchanting dining experience that transports you to a world of culinary wonder.";
  para2.textContent = "Step through our doors and find yourself in a realm where traditional flavors dance with modern flair, and every dish tells a story. From the sizzle of our woks to the aromatic spices that fill the air, we invite you to embark on an epicurean adventure that's as thrilling as the poem that inspired us.";
  para3.textContent = "Join us at JabberWok, and let your taste buds slay the vorpal hunger with a chortle of delight!";

  frag.append(heading, para1, para2, para3);

  return frag;
}