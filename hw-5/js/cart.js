class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        
        this.element = null; 
        // this.createElement();
        // this.updateElement();
    }
}

//list of glazing options and their price factors//
let glazing = [
    {
        glazing: 'Keep original',
        price: 0.0
    },
    {
        glazing: 'Sugar milk',
        price: 0.0
    },
    {
        glazing: 'Vanilla milk',
        price: 0.5
    },
    {
        glazing: 'Double chocolate',
        price: 1.50
    }
]

//list of pack size options and price factors//
let packsize = [
    {
        size: 1,
        pricefactor: 1
    },
    {
        size: 3,
        pricefactor: 3
    },
    {
        size: 6,
        pricefactor: 5
    },
    {
        size: 12,
        pricefactor: 10
    }
]

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};


function addNewRoll(rollType, rollGlazing, packSize, basePrice){
    const roll= new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.add(roll);
    return roll;
}

function removeRoll(roll) {
    roll.element.remove();
    cart.delete(roll);
    cartTotal();
}

//new set for cart//
//const cart = new Set();


//add 4 Roll products to cart//
/*const original = "Original";
const originalRoll = addNewRoll(original, "Sugar Milk", 1, rolls[original].rollPrice);

const walnut = "Walnut";
const walnutRoll = addNewRoll(walnut, "Vanilla Milk", 12, rolls[walnut].rollPrice);

let raisin = "Raisin";
let raisinRoll = addNewRoll(raisin, "Sugar Milk", 3, rolls[raisin].rollPrice);

let apple = "Apple";
let appleRoll = addNewRoll(apple, "Keep original", 3, rolls[apple].rollPrice);

let cartSection = document.querySelector(".cartproducts"); */ 

let roll1 = new Roll('Original', 'Sugar milk', '1', 2.49);
let roll2 = new Roll('Walnut', 'Vanilla milk', '12', 3.49);
let roll3 = new Roll('Raisin', 'Sugar milk', '3', 2.99);
let roll4 = new Roll('Apple', 'Original', '3', 3.49)
const cart = [roll1, roll2, roll3, roll4];

function deleteRoll(roll) {
    roll.element.remove();
    cart.delete(roll);
  }


  function totalPrice(roll) {

    let packAdapt = 0;
    for (const pack of packsize) {
        if (pack.size == roll.size) {
            packAdapt = pack.pricefactor;
        }
    }
    let glazeAdapt = 0;
    for (const glaze of glazing) {
        if (roll.glazing == glaze.glazing) {
            glazeAdapt = glaze.price;
        }
    }

    const calculatedPrice_rounded = ((roll.basePrice + glazeAdapt) * packAdapt).toFixed(2);
    return calculatedPrice_rounded;
}

//template & remove button//
function createElement(roll){
    let template = document.querySelector("#carttemplate");

    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector(".cartroll");

    const rollListElement = document.querySelector(".cartproducts");
    rollListElement.append(roll.element);
    updateElement(roll);

    const btnDelete = roll.element.querySelector('.remove');
    console.log(btnDelete);
    btnDelete.addEventListener('click', () => {
        deleteRoll(roll);
    });
        

}

//update DOM//
function updateElement(roll) {
    //specific elements in DOM that are updating//
    const rollImage=roll.element.querySelector("#productphoto");
    const productName = roll.element.querySelector(".cartbun");
    const glazing = roll.element.querySelector(".cartglazing");
    const packsize = roll.element.querySelector(".cartpack");
    const price = roll.element.querySelector("#cartprice");
    console.log(totalPrice(roll))
    let rolltotalPrice = totalPrice(roll);
    //let rolltotalPrice = "2";

    //update HTML inner text//
    rollImage.src="assets/products/"+rolls[roll.type].imageFile;
    productName.innerText=roll.type+" Cinnamon Roll";
    glazing.innerText="Glazing: "+roll.glazing;
    console.log(rolltotalPrice)
    packsize.innerText = "Pack size: "+ roll.size;
    price.innerText="$ " + (rolltotalPrice);
}


function cartTotal(){
    let sumPrice=0;
    let cartTotal=document.querySelector(".productprice");
    for (const roll of cart){
        sumPrice=sumPrice+parseFloat(totalPrice(roll));

    }
    cartTotal.innerText="$ " + sumPrice.toFixed(2);

}



// for (const roll of cart){
//     createElement(roll);
//     updateElement(roll);
// }
// cartTotal();

function createCart() {
    for (i=0; i<cart.length; i++){
        createElement(cart[i]);
        updateElement(cart[i]);
    }
}

window.onload = createCart();
console.log(cartTotal)
cartTotal();