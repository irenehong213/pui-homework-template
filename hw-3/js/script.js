
let glazing = [
    {
        glazing: 'Keep original',
        price: 0.0,
    },
    {
        glazing: 'Sugar milk',
        price: 0.0,
    },
    {
        glazing: 'Vanilla milk',
        price: 0.5,
    },
    {
        glazing: 'Double chocolate',
        price: 1.50,
    }
]

let packsize = [
    {
        size: 1,
        pricefactor: 1,
    },
    {
        size: 3,
        pricefactor: 3,
    },
    {
        size: 6,
        pricefactor: 5,
    },
    {
        size: 12,
        pricefactor: 10,
    }
]

let glazedrop = document.querySelector('#glazingdd');
let packdrop = document.querySelector('#packsizedd');

for (var i = 0; i < glazing.length; i++) {
    var option = glazing[i];
    var optionElement = document.createElement("option");
    optionElement.textContent = option.glazing;
    optionElement.value = option.price;
    glazedrop.appendChild(optionElement);    
}

for (var i = 0; i < packsize.length; i++) {
    var option = packsize[i];
    var optionElement = document.createElement("option");
    optionElement.textContent = option.size;
    optionElement.value = option.pricefactor;
    packdrop.appendChild(optionElement);    
}

let glazingChange = document.querySelector('#glazingdd');
glazingChange.addEventListener("change", dropdownChange);

let packChange = document.querySelector('#packsizedd');
packChange.addEventListener("change", dropdownChange);

function dropdownChange() {
    let glazeNew = Number(glazingChange.value);
    let packNew = Number(packChange.value);
    let price = document.querySelector('.productprice');
    const basePrice = 2.49;
    let calcPrice_rounded = ((basePrice + glazeNew) * packNew).toFixed(2);    
    let calcPrice= ("$" + calcPrice_rounded);
    price.innerText = calcPrice;
}