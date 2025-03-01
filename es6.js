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

let filteredMenu = [...menu];
let menus = document.querySelector('.section-center')

const displayMenu = ()=>{
    menus.innerHTML = filteredMenu.map(({img, food, price, info})=>{
        return `<div class="menu">
                 <img src="${img}" alt="" class="img">
                <div class="item-info">
                    <div class="heading-container">
                        <h4 class="food">${food}</h4>
                        <h4 class="price">$${price}</h4>
                    </div>
                    <p class="info">${info}</p>
                </div>
                </div>`;
    }).join('')
}
displayMenu()

let btnContainer = document.querySelector('.btn-container');
const displayBtn = ()=>{
    let buttons = ['all', ...new Set(menu.map((menus)=> menus.category))];
    btnContainer.innerHTML = buttons.map((item)=>{
        return `<button type="button" class="btn" data-id="${item}">${item}</button>`;
    }).join('')  
}
displayBtn()

btnContainer.addEventListener('click', (e)=>{
    let element = e.target;
    if(element.classList.contains('btn')){
        if(element.dataset.id === 'all'){
            filteredMenu = [...menu]
        }
        else{
            filteredMenu = menu.filter((item)=>{
                return item.category === element.dataset.id
            })
        }
        displayMenu()
    }
})