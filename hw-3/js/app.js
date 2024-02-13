
/* list of glazing options with price */

let glazing = [
    {
        glazing: 'Keep original',
        price: 0.00,
    },
    {
        glazing: 'Sugar milk',
        price: 0.00,
    },
    {
        glazing: 'Vanilla milk',
        price: 0.50,
    },
    {
        glazing: 'Double chocolate',
        price: 1.50,
    }
]

/* list of pack size options with price */
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

let glazingdd = document.querySelector('#glazingdd');
let packsizedd = document.querySelector('#packsizedd');

for (var i = 0; i < glazing.length; i++) {
    var option = glazing[i];
    var optionElement = document.createElement("option");
    optionElement.textContent = option.glazing;
    optionElement.value = option.price;
    glazingdd.appendChild(optionElement);    
}

for (var i = 0; i < packsize.length; i++) {
    var option = packsize[i];
    var optionElement = document.createElement("option");
    optionElement.textContent = option.size;
    optionElement.value = option.priceFactor;
    packsizedd.appendChild(optionElement);    
}

let glazingChange = document.querySelector('#glazingdd');
glazingChange.addEventListener("change", onSelectChange);

let packsizeChange = document.querySelector('#packsizedd');
packChange.addEventListener("change", onSelectChange);

function onSelectChange() {
    let glazeAdapt = Number(glazingChange.value);
    let packAdapt = Number(packsizeChange.value);

    let price = document.querySelector('#calc-price');

    const basePrice = 2.49;
    let calculatedPrice_rounded = ((basePrice + glazeAdapt) * packAdapt).toFixed(2);    
    let calculatedPrice= ("$" + calculatedPrice_rounded);
    price.innerText = calculatedPrice;
}