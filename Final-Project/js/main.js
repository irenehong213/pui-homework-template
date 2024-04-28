//randomize number for results//
function createScore(){
    return Math.floor(Math.random()* 16);
}

function updateResult(score) {
    // Specific elements in the DOM that need to be updated
    const resultImage = document.querySelector("#character");
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

  //result data// 
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
        "notcompatible": "enfp.png"
      },
      "isfp": {
        "resultName": "Box Jellyfish",
        "imageFile": "isfp.png",
        "trait1": "Funny",
        "trait2": "Open-minded",
        "trait3": "Adaptable",
        "strenghts1": "Lives in a judgement-free world",
        "strengths2": "Very kind to others",
        "strenghts3": "Creative mind",
        "weakness1": "Insecure at times",
        "weakness2": "Easily stressed",
        "weakness3": "Sensitive",
        "compatible": "esfj.png",
        "notcompatible": "entj.png"
      },
      "isfj": {
        "resultName": "Clam",
        "imageFile": "isfj.png",
        "trait1": "Hardworking",
        "trait2": "Analytical",
        "trait3": "Detailed",
        "strenghts1": "Remembers small details",
        "strengths2": "Very observant",
        "strenghts3": "A strong support system",
        "weakness1": "Can be too kind/naive",
        "weakness2": "Change averse",
        "weakness3": "Overly humble",
        "compatible": "esfp.png",
        "notcompatible": "entp.png"
      },
      "intp": {
        "resultName": "British Acorn Barnacle",
        "imageFile": "intp.png",
        "trait1": "Thoughtful",
        "trait2": "Unique",
        "trait3": "Mysterious",
        "strenghts1": "Always curious & learning",
        "strengths2": "Amazing imagination",
        "strenghts3": "Lots of creative ideas!",
        "weakness1": "Can get too lost in thought",
        "weakness2": "Disconnected from others",
        "weakness3": "Can get very impatient",
        "compatible": "entj.png",
        "notcompatible": "esfj.png"
      },
      "intj": {
        "resultName": "Giant Isopod",
        "imageFile": "intj.png",
        "trait1": "Rational",
        "trait2": "Successful",
        "trait3": "Independent",
        "strenghts1": "Works efficiently towards a goal",
        "strengths2": "Ambitious",
        "strenghts3": "Well-informed",
        "weakness1": "Overly critical of others",
        "weakness2": "Socially awkward",
        "weakness3": "Defensive when wrong",
        "compatible": "entp.png",
        "notcompatible": "esfp.png"
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
      "infj": {
        "resultName": "Starfish",
        "imageFile": "infj.png",
        "trait1": "Dreamer",
        "trait2": "Wise",
        "trait3": "Caring",
        "strenghts1": "Very good at connecting with others",
        "strengths2": "Cares a lot about those around them",
        "strenghts3": "Strong beliefs and values",
        "weakness1": "Perfectionistic",
        "weakness2": "Sensitive to criticism",
        "weakness3": "Prone to burnout",
        "compatible": "enfp.png",
        "notcompatible": "estp.png"
      },
      "estp": {
        "resultName": "Sunfish",
        "imageFile": "estp.png",
        "trait1": "Vibrant",
        "trait2": "Action-oriented",
        "trait3": "Competitive",
        "strenghts1": "Practical approach to problems",
        "strengths2": "Natural leaders",
        "strenghts3": "Perceptive of changes",
        "weakness1": "Unstructured & impuslive",
        "weakness2": "Focuses too much on details",
        "weakness3": "Impatient at times",
        "compatible": "istj.png",
        "notcompatible": "infj.png"
      },
      "estj": {
        "resultName": "Great White Shark",
        "imageFile": "estj.png",
        "trait1": "Traditional",
        "trait2": "Leader",
        "trait3": "Diligent",
        "strenghts1": "Flexible & can adapt to any situation",
        "strengths2": "Cares a lot about those around them",
        "strenghts3": "Lots of creative ideas!",
        "weakness1": "Chaotic, all over the place",
        "weakness2": "Very self critical",
        "weakness3": "Tends to isolate when insecure",
        "compatible": "istp.png",
        "notcompatible": "infp.png"
      },
      "esfp": {
        "resultName": "Yellow Fish",
        "imageFile": "esfp.png",
        "trait1": "Idealistic",
        "trait2": "Emotional",
        "trait3": "Anxious",
        "strenghts1": "Loyal to their close friends",
        "strengths2": "Likes to organize and lead others",
        "strenghts3": "Direct and honest with feelings",
        "weakness1": "Stubborn & averse to change",
        "weakness2": "Difficult to express emotions",
        "weakness3": "Tends to judge others a lot",
        "compatible": "isfj.png",
        "notcompatible": "intj.png"
      },
      "esfj": {
        "resultName": "Stingray",
        "imageFile": "esfj.png",
        "trait1": "Super social",
        "trait2": "Good Manners",
        "trait3": "Stubborn",
        "strenghts1": "Strong sense of responsibility",
        "strengths2": "Creates communities",
        "strenghts3": "Lots of practical skills",
        "weakness1": "Sometimes too needy",
        "weakness2": "Cares a lot about social status",
        "weakness3": "Too conflict averse",
        "compatible": "enfj.png",
        "notcompatible": "estj.png"
      },
      "entp": {
        "resultName": "Swordfish",
        "imageFile": "entp.png",
        "trait1": "Competitive",
        "trait2": "Debator",
        "trait3": "Funny",
        "strenghts1": "Charismatic character",
        "strengths2": "Very energetic, loves to hang out",
        "strenghts3": "Loves learning",
        "weakness1": "Loves arguing too much",
        "weakness2": "Always distracted, hard to focus",
        "weakness3": "Can be insensitive when talking",
        "compatible": "enfj.png",
        "notcompatible": "estj.png"
      },
      "entj": {
        "resultName": "Tuna Can",
        "imageFile": "entj.png",
        "trait1": "Leader",
        "trait2": "Passionate",
        "trait3": "Prideful",
        "strenghts1": "Very strong-willed and energetic",
        "strengths2": "Wants to achieve something great",
        "strenghts3": "Inspires others",
        "weakness1": "Wants to be the dominant leader",
        "weakness2": "Can get mean and cold",
        "weakness3": "Scornful of others' emotions",
        "compatible": "enfj.png",
        "notcompatible": "estj.png"
      },
      "enfp": {
        "resultName": "Sea Turtle",
        "imageFile": "enfp.png",
        "trait1": "Free-Spritied",
        "trait2": "Full of Wonder",
        "trait3": "Energetic",
        "strenghts1": "Great at communicating with others",
        "strengths2": "Makes friends very easily",
        "strenghts3": "Good-natured and easy-going",
        "weakness1": "Unfocused, often gets distracted",
        "weakness2": "Overly optimistic - can make naive choices",
        "weakness3": "People-pleaser & gets hurt easily",
        "compatible": "infj.png",
        "notcompatible": "istj.png"
      },
      "enfj": {
        "resultName": "Mr.Crab",
        "imageFile": "enfj.png",
        "trait1": "Natural Leader",
        "trait2": "Deep Thinker",
        "trait3": "Hopeful",
        "strenghts1": "Receptive to new ideas",
        "strengths2": "Charismatic & popular",
        "strenghts3": "Reliable, strong sense of responsibility",
        "weakness1": "Overly idealistic of society",
        "weakness2": "Can get too empathetic",
        "weakness3": "Overly energetic",
        "compatible": "infp.png",
        "notcompatible": "istp.png"
      },
    };
  
    //updating the page with correct elements based on random number//
    if (score >= 0 && score < Object.keys(results).length) {
      const result = results[Object.keys(results)[score]];
      resultImage.src = "assets/ResultPic/" + result.imageFile;
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

//actually shows the result on the page//
  function showResult() {
    const score = createScore();
    console.log(score);
    updateResult(score);
  }
  
  window.onload = showResult;