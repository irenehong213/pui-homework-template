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

function addNewRoll(rollType, rollGlazing, packSize, rollPrice){
    const roll= new Roll(rollType, rollGlazing, packSize, rollPrice);
    cart.add(roll);
    return roll;
}

function removeRoll(roll) {
    this.element.remove();
    cart.delete(this);
    cartTotal();
}

//new set for cart//
const cart = new Set();


//add 4 Roll products to cart//
const original = "Original";
const originalRoll = addNewRoll(original, "Sugar Milk", 1, rolls[original].rollPrice);

const walnut = "Walnut";
const walnutRoll = addNewRoll(walnut, "Vanilla Milk", 12, rolls[walnut].rollPrice);

let raisin = "Raisin";
let raisinRoll = addNewRoll(raisin, "Sugar Milk", 3, rolls[raisin].rollPrice);

let apple = "Apple";
let appleRoll = addNewRoll(apple, "Keep original", 3, rolls[apple].rollPrice);

let cartSection = document.querySelector(".cartproducts");


//template & remove button//
function createElement(roll){

    let template = document.querySelector("#carttemplate");

    const clone = template.content.cloneNode(true);
    this.element = clone.querySelector(".cartroll");

    const rollListElement = document.querySelector(".cartproducts");
    rollListElement.append(roll.element);

    const buttonRemove = this.element.querySelector(".remove");
        buttonRemove.onclick = this.removeRoll.bind(this); 

    updateElement(Roll);
}

//update DOM//
function updateElement(roll) {
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
for (const roll of cart){
    createElement(roll);
    updateElement(roll);
}
cartTotal();