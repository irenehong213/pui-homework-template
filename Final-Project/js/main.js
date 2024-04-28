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
/*
function updateResult(score) {

    //specific elements in DOM that are updating//
    const resultImage= element.querySelector(".resultpic");
    const resultName = element.querySelector(".resultname");

    const results = {
        "infp": {
            "resultName": "Flapjack Octopus",
            "imageFile": "infp.png",
            "trait1": "Idealistic",
            "trait2": "Emotional",
            "trait3": "Anxious",
            "strenghts1": "Flexible & can adapt to any situation",
            "strengths2": "Cares a lot about those around them",
            "strenghts3": "Lots of creative ideas!",
            "weakness1": "Chaotic, all over the place",
            "weakness 2": "Very self critical",
            "weakness 3": "Tends to isolate when insecure",
            "compatible": "enfj.png",
            "notcompatible": "estj.png"
        },
        "istp": {
            "resultName": "Blobfish",
            "imageFile": "istp.png",
            "trait1": "Individualistic",
            "trait2": "Direct",
            "trait3": "Rebel",
            "strenghts1": "Flexible & spontaneous",
            "strengths2": "Diligent & observant",
            "strenghts3": "Honest with their thoughts",
            "weakness1": "Easily viewed as rude",
            "weakness 2": "Doesn't apologize often",
            "weakness 3": "Sometimes a lone wolf",
            "compatible": "estj.png",
            "notcompatible": "enfj.png"
    
        }
    };

    if (score >=0 && score < results.length){
        //update HTML inner text//
        resultImage.src="assets/ResultPic/"+results[score].png;
    }


};

function showResult(){
    const score = createScore();
    console.log(score);
    updateResult(score);
}
window.onload = showResult(); */

function updateResult(score) {
    // Specific elements in the DOM that need to be updated
    const resultImage = document.querySelector(".resultpic");
    const resultName = document.querySelector(".resultname");
    const resultTrait1 = document.querySelector("#trait1");
    const resultTrait2 = document.querySelector("#trait2");
    const resultTrait3 = document.querySelector("#trait3");
    const resultStrength1 = document.querySelector("#strength1");
    const resultStrength2 = document.querySelector("#strength2");
    const resultStrength3 = document.querySelector("#strength3");
    const resultWeakness1 = document.querySelector("#weakness1");
    const resultWeakness2 = document.querySelector("#weakness2");
    const resultWeakness3 = document.querySelector("#weakness3");
    const resultCompatible = document.querySelector("#compatible");
    const resultNotCompatible = document.querySelector("#notcompatible");
  
    const results = {
      "istp": {
        "resultName": "Blobfish",
        "imageFile": "istp.png",
        "trait1": "Individualistic",
        "trait2": "Direct",
        "trait3": "Rebel",
        "strenghts1": "Flexible & spontaneous",
        "strengths2": "Diligent & observant",
        "strenghts3": "Honest with their thoughts",
        "weakness1": "Easily viewed as rude",
        "weakness2": "Doesn't apologize often",
        "weakness3": "Sometimes a lone wolf",
        "compatible": "estj.png",
        "notcompatible": "enfj.png"
      },
      "istj": {
        "resultName": "Sea Urchin",
        "imageFile": "istj.png",
        "trait1": "Brutally Honest",
        "trait2": "Reliable",
        "trait3": "Grounded",
        "strenghts1": "Calm & Practical",
        "strengths2": "Very organized/efficient",
        "strenghts3": "Great co-worker",
        "weakness1": "Can sound mean",
        "weakness2": "Likes to judge others",
        "weakness3": "Stubborn!",
        "compatible": "estp.png",
        "notcompatible": "enfj.png"
      },
      "infp": {
        "resultName": "Flapjack Octopus",
        "imageFile": "infp.png",
        "trait1": "Idealistic",
        "trait2": "Emotional",
        "trait3": "Anxious",
        "strenghts1": "Flexible & can adapt to any situation",
        "strengths2": "Cares a lot about those around them",
        "strenghts3": "Lots of creative ideas!",
        "weakness1": "Chaotic, all over the place",
        "weakness2": "Very self critical",
        "weakness3": "Tends to isolate when insecure",
        "compatible": "enfj.png",
        "notcompatible": "estj.png"
      },
    };
  
    if (score >= 0 && score < Object.keys(results).length) {
      const result = results[Object.keys(results)[score]];
      resultImage.src = "Final-Project/assets/ResultPic/" + result.imageFile;
      resultName.textContent = result.resultName;
      resultTrait1.textContent = result.trait1;
      resultTrait2.textContent = result.trait2;
      resultTrait3.textContent = result.trait3;
      console.log(result.imageFile);
      resultStrength1.textContent = result.strenghts1;
      resultStrength2.textContent = result.strengths2;
      resultStrength3.textContent = result.strenghts3;
      resultWeakness1.textContent = result.weakness1;
      resultWeakness2.textContent = result.weakness2;
      resultWeakness3.textContent = result.weakness3;
      resultCompatible.src = "assets/ResultPic/" + result.compatible;
      resultNotCompatible.src = "assets/ResultPic/" + result.notcompatible;
    } else {
      resultName.textContent = 'Invalid Result';
    }
  }
  
  function showResult() {
    const score = createScore(); // Assuming createScore() function exists
    console.log(score);
    updateResult(score);
  }
  
  window.onload = showResult;