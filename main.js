let menu = [
  {
    id: 1,
    img: './images/item-1.jpeg',
    food: 'Buttermilk Pancakes',
    category: 'Breakfast',
    price: '15.99',
    info: `I'm baby woke mlkshk wolf bitters live-edge blue bottle,
     hammock freegan copper mug whatever cold-pressed`,
  },
  {
    id: 2,
    img: './images/item-2.jpeg',
    food: 'diner double',
    category: 'Lunch',
    price: '13.99',
    info: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings 
    gochujang helvetica man braid jianbing. Marfa thundercats`,
  },
  {
    id: 3,
    img: './images/item-3.jpeg',
    food: 'godzilla milkshake',
    category: 'Shakes',
    price: '6.99',
    info: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before
    they sold out organic viral.`,
  },
  {
    id: 4,
    img: './images/item-4.jpeg',
    food: 'country delight',
    category: 'Breakfast',
    price: '20.99',
    info: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism 
    austin mlkshk truffaut,`,
  },
  {
    id: 5,
    img: './images/item-5.jpeg',
    food: 'egg attack',
    category: 'Lunch',
    price: '22.99',
    info: `franzen vegan pabst bicycle rights kickstarter pinterest meditation
    farm-to-table 90's pop-up`,
  },
  {
    id: 6,
    img: './images/item-6.jpeg',
    food: 'oreo dream',
    category: 'Shakes',
    price: '18.99',
    info: `Portland chicharrones ethical edison bulb, palo santo craft beer chia 
    heirloom iPhone everyday`,
  },
  {
    id: 7,
    img: './images/item-7.jpeg',
    food: 'bacon overflow',
    category: 'Breakfast',
    price: '8.99',
    info: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, 
    pork belly cloud bread iceland put a bird`,
  },
  {
    id: 8,
    img: './images/item-8.jpeg',
    food: 'american classic',
    category: 'Lunch',
    price: '12.99',
    info: `on it tumblr kickstarter thundercats migas everyday carry squid palo
    santo leggings. Food truck truffaut`,
  },
  {
    id: 9,
    img: './images/item-9.jpeg',
    food: 'quarantine buddy',
    category: 'Shakes',
    price: '16.99',
    info: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison 
    bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    img: './images/item-10.jpeg',
    food: 'steak dinner',
    category: 'Dinner',
    price: '39.99',
    info: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison 
    bulb yuccie crucifix microdosing`,
  },
];

let sectionCenter = document.querySelector('.section-center');
let btnContainer = document.querySelector('.btn-container');

window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(displayMenu) {
  let menuItems = displayMenu.map(function (menuItem) {
    return `<div class="menu">
              <img src="${menuItem.img}" alt="" class="img">
              <div class="item-info">
            <div class="heading-container">
              <h4 class="food">${menuItem.food}</h4>
              <h4 class="price">$${menuItem.price}</h4>
            </div>
              <p class="info">
                ${menuItem.info}
              </p>
              </div>
          </div>`;
  });
  menuItems = menuItems.join('');
  sectionCenter.innerHTML = menuItems;
}

function displayMenuButtons() {
  let categories = menu.reduce(
    function (curr, acc) {
      if (!curr.includes(acc.category)) {
        curr.push(acc.category);
      }
      return curr;
    },
    ['all']
  );

  let buttons = categories
    .map(function (button) {
      return `<button type="button" class="btn" data-id="${button}">${button}</button>`;
    })
    .join('');
  btnContainer.innerHTML = buttons;

  let filterBtns = btnContainer.querySelectorAll('.btn');

  filterBtns.forEach(function (filterBtn) {
    filterBtn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (displayItem) {
        if (displayItem.category === category) {
          return displayItem;
        }
      });
      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
