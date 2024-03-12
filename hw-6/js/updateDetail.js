const queryString = window.location.search;
const params = new URLSearchParams(queryString);
let rollType = params.get('roll');
if (rollType == null) {
    rollType = 'Original';
}

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

    retrieveFromLocalStorage();
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

    updateLocalStorage();
}

render();