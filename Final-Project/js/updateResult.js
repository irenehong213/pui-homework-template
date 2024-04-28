




//update HTML of result page

function updateResult(result) {
    //specific elements in DOM that are updating//
    const resultImage=element.querySelector(".resultpic");
    const resultName = element.querySelector(".resultname");
    const glazing = roll.element.querySelector(".cartglazing");
    const packsize = roll.element.querySelector(".cartpack");
    const price = roll.element.querySelector("#cartprice");
    console.log(totalPrice(roll))
    let rolltotalPrice = totalPrice(roll);
    //let rolltotalPrice = "2";

    //update HTML inner text//
    resultImage.src="assets/ResultPic/"+result.png;
    productName.innerText=roll.type+" Cinnamon Roll";
    glazing.innerText="Glazing: "+roll.glazing;
    console.log(rolltotalPrice)
    packsize.innerText = "Pack size: "+ roll.size;
    price.innerText="$ " + (rolltotalPrice);
}