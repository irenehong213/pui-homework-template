const mbti = {
    0 : "istp",
    1 : "istj",
    2 : "isfp",
    3 : "isfj",
    4 : "intp",
    5 : "intj",
    6 : "infp",
    7 : "infj",
    8 : "estp",
    9 : "estj",
    10 : "esfp",
    11 : "esfj",
    12 : "entp",
    13 : "entj",
    14 : "enfp",
    15 : "enfj"
}


//get result from clicks//
/*let result = "";
function updateScore(result){
    const score = document.getElementByClass(".optionitem").value;
    result = result + score 
    return result
    console.log(result);
};*/ 

function createScore(){
    return Math.floor(Math.random()* 16);
}

//update HTML of result page

function updateResult() {
    const score = createScore();
    const mbtiid = mbti(score); 
    console.log(score);
    //specific elements in DOM that are updating//
    const resultImage= element.querySelector(".resultpic");
    const resultName = element.querySelector(".resultname");

    //update HTML inner text//
    resultImage.src="assets/ResultPic/"+result.png;
    productName.innerText=roll.type+" Cinnamon Roll";
    glazing.innerText="Glazing: "+roll.glazing;
    console.log(rolltotalPrice)
    packsize.innerText = "Pack size: "+ roll.size;
    price.innerText="$ " + (rolltotalPrice);
};

const finalButton = document.getElementById("finalbtn") 

finalButton.addEventListener("click",updateResult);

//get the next button 
var nextbtn = document.querySelector(".nextfunc");
nextbtn.disabled = true; //user cannot move ahead without choosing an option 
const decision = document.querySelector(".option");


function disableBtn() {
    nextbtn.disabled = false; 
    nextbtn.classList.remove("inactivebtn")
    nextbtn.classList.add("button")
};

decision.addEventListener("click", disableBtn);
