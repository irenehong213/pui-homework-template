
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


function addNewRoll(rollType, rollGlazing, packSize, basePrice){
    const roll= new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.add(roll);
    return roll;
}



function deleteRoll(roll) {
    roll.element.remove();

    let index = cart.indexOf(roll);
    cart.splice(index, 1);

    cartTotal();
    updateLocalStorage();
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


function render() {
    retrieveFromLocalStorage();
    console.log(retrieveFromLocalStorage)
    let cartSection = document.querySelector(".cartproducts");
    for (const roll of cart) {
        createElement(roll);
        updateElement(roll);
        cartSection.append(roll.element);
    }

    cartTotal();
    console.log(cartTotal)
}

console.log(cart)
render();
