class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

//new array for cart//
const cart = [];

//roll type from url//
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

//extract current roll's information//
let selectedRoll = rolls[rollType];

//update DOM elements//

function render(){
    let heading = document.querySelector("#detailheader");
    let detailRollPic = document.querySelector("#productdetailphoto");
    let basePrice = document.querySelector(".productprice")

    //update heading to be <type> Cinnamon Roll//
    heading.innerText = rollType + " Cinnamon Roll";

    //update product page image//
    detailRollPic.src = "./assets/products/" + selectedRoll.imageFile;

    //update product detail base price//
    basePrice.innerText = "$" + selectedRoll.basePrice;
}



//add roll to array cart//
let cartButton=document.querySelector("#cartbutton");
cartButton.addEventListener("click",addToCart);

function addToCart(){
    let glazingChange = document.querySelector("#glazingdd");
    let glazingText = glazingChange.options[glazingChange.selectedIndex].text;
    let rollChoice = new Roll(rollType, glazingText, Number(packChange.value), selectedRoll.basePrice);
    cart.push(rollChoice);
    console.log(cart);
}

render();