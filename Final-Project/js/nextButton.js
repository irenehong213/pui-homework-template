//get the next button on quiz page
var nextbtn = document.querySelector(".nextfunc");
nextbtn.disabled = true; //user cannot move ahead without choosing an option 
const decision = document.querySelector(".option");

//allows user to click on 'next button' if they choose an option
function disableBtn() {
    nextbtn.disabled = false; 
    nextbtn.classList.remove("inactivebtn")
    nextbtn.classList.add("button")
};

decision.addEventListener("click", disableBtn);
