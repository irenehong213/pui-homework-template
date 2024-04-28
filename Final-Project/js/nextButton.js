//get the next button 
var nextbtn = document.querySelector(".nextfunc");
nextbtn.disabled = true; //user cannot move ahead without choosing an option 
const decision = document.querySelector(".option");
const option = document.querySelectorAll(".optionitem")


function disableBtn() {
    nextbtn.disabled = false; 
    nextbtn.classList.remove("inactivebtn")
    nextbtn.classList.add("button")
};

decision.addEventListener("click", disableBtn);
option.addEventListener("click",disableBtn);




