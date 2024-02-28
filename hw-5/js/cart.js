class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.rollPrice = rollPrice;
        
        this.element = null; 
        this.createElement();
        this.updateElement();
    }
}

/*function addNewRoll(rollType, rollGlazing, packSize, rollPrice){
    const roll= new Roll(rollType, rollGlazing, packSize, rollPrice);
    cart.add(roll);
    return roll;
} */

function removeRoll() {
    this.element.remove();
    cart.delete(this);
    cartTotal();
}

//new set for cart//
const cart = new Set();


//add 4 Roll products to cart//
let original = "Original";
let originalRoll = new Roll(original, "Sugar Milk", 1, rolls[original].rollPrice);
cart.add(originalRoll); 

let walnut = "Walnut";
let walnutRoll = new Roll(walnut, "Vanilla Milk", 12, rolls[walnut].rollPrice);
cart.add(walnutRoll);

let raisin = "Raisin";
let raisinRoll = new Roll(raisin, "Sugar Milk", 3, rolls[raisin].rollPrice);
cart.add(raisinRoll);

let apple = "Apple";
let appleRoll = new Roll(apple, "Keep original", 3, rolls[apple].rollPrice);
cart.add(appleRoll);

let cartSection = document.querySelector(".cartproducts");

for (const roll of cart){
    createElement(roll);
}



//template & remove button//
function createElement(){
    const template = document.querySelector("#rolltemplate");

    const clone = template.content.cloneNode(true);
    this.element = clone.querySelector(".cartroll");

    const rollListElement = document.querySelector(".cartproducts");
    rollListElement.append(roll.element);

    const buttonRemove = this.element.querySelector(".remove");
        buttonRemove.onclick = this.removeRoll.bind(this); 

    updateElement(roll);
}

//update DOM//
function updateElement() {
    //specific elements in DOM that are updating//
    const rollImage=this.element.querySelector("#productphoto");
    const productName = this.element.querySelector(".cartbun");
    const glazing = this.element.querySelector(".cartglazing");
    const packsize = this.element.querySelector(".cartpack");
    const price = this.element.querySelector(".cartprice");
    let totalPrice = this.totalPrice();

    //update HTML inner text//
    rollImage.src="../assets/products/"+rolls[this.type].imageFile;
    productName.innerText=this.type+" Cinnamon Roll";
    glazing.innerText="Glazing: "+this.glazing;
    packsize.innerText = "Pack size: "+ this.size;
    price.innerText="$ " + (totalPrice);
}

//remove roll from cart//
function removeRoll() {
    this.element.remove();
    cart.delete(this);
    cartTotal();
}

function cartTotal(){
    let sumPrice=0;
    let cartTotal=document.querySelector(".totalprice");
    for (const roll of cart){
        sumPrice=sumPrice+parseFloat(roll.totalPrice());

    }
    cartTotal.innerText="$ " + sumPrice.toFixed(2);

}


function totalPrice(){
    let packAdapt=0;
    for (const pack of packsize){
        if(pack.size==this.size){
            packAdapt = pack.priceFactor;
        }
    }
    let glazeAdapt = 0;
    for (const glaze of glazing){
        if (this.glazing == glaze.glazing){
            glazeAdapt = glaze.price;
        }
    }
    const calculatedPrice = ((this.basePrice+glazeAdapt)*packAdapt).toFixed(2);
    return calculatedPrice; 
}


