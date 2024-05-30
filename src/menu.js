export default function buildMenu() {
  const frag = document.createDocumentFragment();
  let heading = document.createElement('h1');
  heading.textContent = 'JabberWok Menu';
  let para = document.createElement('p');
  para.textContent = 'At JabberWok, our menu is a tapestry of flavors, each dish crafted to take you on a journey through the mystical and the familiar.';

  const menu = document.createElement('div');
  menu.id = 'menu';

  // appetizers
  const appsHeader = document.createElement('h2');
  appsHeader.textContent = 'Appetizers';
  const apps = document.createElement('div');
  apps.classList.add('menu-row');
  const app1 = document.createElement('p');
  app1.textContent = 'Bandersnatch Dumplings: Steamed to perfection, these dumplings are filled with a mix of seasoned pork and chives, served with a side of soy-ginger dipping sauce.';
  const app2 = document.createElement('p');
  app2.textContent = 'Cheshire Spring Rolls: Crispy rolls filled with tender shrimp, glass noodles, and a medley of fresh vegetables, paired with a sweet and sour sauce.';
  apps.append(app1, app2);

    // entrees
    const entreesHeader = document.createElement('h2');
    entreesHeader.textContent = 'Entrees';
    const entrees = document.createElement('div');
    entrees.classList.add('menu-row');
    const entree1 = document.createElement('p');
    entree1.textContent = 'Vorpal Chicken: A sizzling platter of stir-fried chicken, coated in a spicy Szechuan sauce with a hint of orange zest.';
    const entree2 = document.createElement('p');
    entree2.textContent = 'Jubjub Beef: Tender slices of beef wok-tossed with broccoli, bell peppers, and a rich oyster sauce.';
    const entree3 = document.createElement('p');
    entree3.textContent = 'Tulgey Wood Prawns: Large prawns glazed with a delicate honey-walnut sauce, accompanied by candied walnuts and steamed broccoli.';
    const entree4 = document.createElement('p');
    entree4.textContent = 'Mome Rath’s Delight: A seafood feast featuring scallops, squid, and mussels in a savory black bean sauce.';
    const entree5 = document.createElement('p');
    entree5.textContent = 'Tumtum Tree Stir-Fry: A vibrant array of seasonal vegetables, tofu, and shiitake mushrooms, sautéed in a light garlic sauce.';
    const entree6 = document.createElement('p');
    entree6.textContent = 'Slithy Toves Noodles: Hand-pulled noodles with mixed vegetables, tossed in a savory sesame-peanut sauce.';
    entrees.append(entree1, entree2, entree3, entree4, entree5, entree6);
    
    // entrees
    const dessertsHeader = document.createElement('h2');
    dessertsHeader.textContent = 'Desserts';
    const desserts = document.createElement('div');
    desserts.classList.add('menu-row');
    const dessert1 = document.createElement('p');
    dessert1.textContent = 'Jabberwock’s Dream: A delicate green tea cheesecake, topped with a dragon fruit glaze.';
    const dessert2 = document.createElement('p');
    dessert2.textContent = 'Frabjous Day Cake: A moist red bean cake, layered with matcha cream and adorned with edible flowers.';
    desserts.append(dessert1, dessert2);


  menu.append(appsHeader, apps, entreesHeader, entrees, dessertsHeader, desserts);


  frag.append(heading, para, menu);

  return frag;
}