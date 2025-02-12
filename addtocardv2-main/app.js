let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Chicken Jalfrezi Recipe',
        image: '1.PNG',
        price: 440
    },
    {
        id: 2,
        name: 'Butter Chicken Recipe',
        image: '2.PNG',
        price: 170
    },
    {
        id: 3,
        name: 'Salmon (grilled, blackened, or pan-seared)',
        image: '3.PNG',
        price: 220
    },
    {
        id: 4,
        name: 'Shea butter soap',
        image: '4.PNG',
        price: 320
    },
    {
        id: 5,
        name: 'Mozzarella Cocktails',
        image: '5.PNG',
        price: 500
    },
    {
        id: 6,
        name: 'Pizza',
        image: '6.PNG',
        price: 210
    }
];

let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    });
}

initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    } else {
        listCards[key].quantity++;
    }
