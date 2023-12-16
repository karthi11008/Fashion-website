let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})


let products = [
    {
        id: 1,
        name: "Amanda Uprichard Women's Ellison Mini Dress ",
        image: '1..jpg',
        price: 160
    },
    {
        id: 2,
        name: 'ANRABESS A-Line Swing Bodycon Short Dress',
        image: '2.jpg',
        price:  47.99
    },
    {
        id: 3,
        name: "ANRABESS Women's Crewneck Long Sleeve",
        image: '3.jpg',
        price: 33.99
    },
    {
        id: 4,
        name: "COOFANDY Mens Cotton Linen Cuban Guayabera Shirt ",
        image: '4.jpg',
        price: 23.79
    },
    {
        id: 5,
        name: "COOFANDY Men's Crew Neck Sweater Slim Fit ",
        image: '5.jpg',
        price: 25.32
    },
    {
        id: 6,
        name: " Men's Classic-Fit 9 Short ",
        image: '6.jpg',
        price: 17.50
    }
];
let listCards  = [];

function redirectToPage(image) {
    // Redirect logic goes here
    console.log('Redirecting to page:', imageUrl);
}

function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}