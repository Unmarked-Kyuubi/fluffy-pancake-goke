// const sum =   133.44 + 87.95 + 98.80 + 148.85 + 174.17 + 120.01 + 94.16 + 107.96 + 107.83 + 159.27 + 149.00 + 157.89  + 115.68 + 130.68 + 128.17

// console.log(sum)

const firstHeight = document.querySelector("#input-card__height--one")
const firstWeight = document.querySelector("#input-card__mass--one")
const firstName = document.querySelector(".input-card__name--one")

const secondHeight = document.querySelector("#input-card__height--two")
const secondWeight = document.querySelector("#input-card__mass--two")
const secondName = document.querySelector(".input-card__name--two")

const submitBtn = document.getElementById("bmi-calculate")
const bmiResultOne = document.querySelector(".bmi-result--one")
const bmiResultTwo = document.querySelector(".bmi-result--two")
const bmiCompare = document.querySelector(".bmi-comparison")
// console.log(firstHeight.innerHTML)

submitBtn.addEventListener("click", () => {
  let bmiOne, bmiTwo
  //  Get the height and weight of the first and second people
  const firstWeightValue = firstWeight.value
  const firstHeightValue = firstHeight.value
  const firstNameValue = firstName.value

  const secondWeightValue = secondWeight.value
  const secondHeightValue = secondHeight.value
  const secondNameValue = secondName.value

  bmiOne = firstWeightValue / firstHeightValue ** 2
  bmiTwo = secondWeightValue / secondHeightValue ** 2

  const bmiFinishedResultOne = bmiOne.toFixed(3)
  const bmiFinishedResultTwo = bmiTwo.toFixed(3)

  //   console.log("Bmi One for " + firstNameValue + " : " + bmiOne)
  //   console.log("Bmi One for " + firstNameValue + " : " + bmiFinishedResultOne)
  //   console.log("Bmi Two for " + secondNameValue + " : " + bmiTwo)

  bmiResultOne.classList.add("bmi-show")
  bmiResultTwo.classList.add("bmi-show")
  bmiCompare.classList.add("bmi-show")
  // CHecks if the second inputs are empty and calculates only for the first inputs

  if (
    (secondWeightValue.length &&
      secondHeightValue.length &&
      secondNameValue.length == 0,
    firstWeightValue.length &&
      firstHeightValue.length &&
      firstNameValue.length != 0)
  ) {
     
         bmiResultOne.classList.add("bmi-result--single")
         bmiResultTwo.classList.remove("bmi-show")
         bmiCompare.classList.remove("bmi-show")
    if (bmiOne <= 18.5) {
      bmiResultOne.innerHTML = `${firstNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultOne}</p> <p>Damn you underweight. 😭😭</p>`
    } else if ((bmiOne > 18.5, bmiOne < 25)) {
      bmiResultOne.innerHTML = `${firstNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultOne}</p> <p>Alright you normal weight. 😄😄</p>`
    } else if ((bmiOne > 25, bmiOne < 30)) {
      bmiResultOne.innerHTML = `${firstNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultOne}</p> <p>Ooops you're a bit overweight. 😥😥</p>`
    } else if (bmiOne >= 30) {
      bmiResultOne.innerHTML = `${firstNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultOne}</p> <p>Obese mf. 😓😓</p>`
    }
  }

  // CHecks if the first inputs are empty and calculates only for the secind inputs
  else if (
    (firstWeightValue.length &&
      firstHeightValue.length &&
      firstNameValue.length == 0,
    secondWeightValue.length &&
      secondHeightValue.length &&
      secondNameValue.length != 0)
      ) {
     bmiResultTwo.classList.add("bmi-result--single")
     bmiResultOne.classList.remove("bmi-show")
     bmiCompare.classList.remove("bmi-show")
    if (bmiTwo <= 18.5) {
      bmiResultTwo.innerHTML = `${secondNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultTwo}</p> <p>Damn you underweight. 😭😭</p>`
    } else if ((bmiTwo > 18.5, bmiTwo < 25)) {
      bmiResultTwo.innerHTML = `${secondNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultTwo}</p> <p>Alright you normal weight. 😄😄</p>`
    } else if ((bmiTwo > 25, bmiTwo < 30)) {
      bmiResultTwo.innerHTML = `${secondNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultTwo}</p> <p>Ooops you're a bit overweight. 😥😥</p>`
    } else if (bmiTwo >= 30) {
      bmiResultTwo.innerHTML = `${secondNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultTwo}</p> <p>Obese mf. 😓😓</p>`
    }
  } else if (
    firstWeightValue.length,
    firstHeightValue.length,
    firstNameValue.length,
    secondWeightValue.length,
    secondHeightValue.length,
    secondNameValue.length == 0
  ) {
    alert(
      "Fill  all the inputs for either one to calculate your BMI or fill in both to calculate & compare two",
    )
  }
  if (
    firstWeightValue.length &&
    firstHeightValue.length &&
    firstNameValue.length &&
    secondWeightValue.length &&
    secondHeightValue.length &&
    secondNameValue.length != 0
  ) {
   bmiResultOne.classList.add("bmi-show")
  bmiResultOne.classList.remove("bmi-result--single")
  bmiResultTwo.classList.add("bmi-show")
  bmiResultTwo.classList.remove("bmi-result--single")
  bmiCompare.classList.add("bmi-show")
    // Check BMI's with standaerd Bmi numbers and display results to see if user is underweight overweight or whatever.

    if (bmiOne <= 18.5) {
      bmiResultOne.innerHTML = `${firstNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultOne}</p> <p>Damn you underweight. 😭😭</p>`
    } else if ((bmiOne > 18.5, bmiOne < 25)) {
      bmiResultOne.innerHTML = `${firstNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultOne}</p> <p>Alright you normal weight. 😄😄</p>`
    } else if ((bmiOne > 25, bmiOne < 30)) {
      bmiResultOne.innerHTML = `${firstNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultOne}</p> <p>Ooops you're a bit overweight. 😥😥</p>`
    } else if (bmiOne >= 30) {
      bmiResultOne.innerHTML = `${firstNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultOne}</p> <p>Obese mf. 😓😓</p>`
    }

    if (bmiTwo <= 18.5) {
      bmiResultTwo.innerHTML = `${secondNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultTwo}</p> <p>Damn you underweight. 😭😭</p>`
    } else if ((bmiTwo > 18.5, bmiTwo < 25)) {
      bmiResultTwo.innerHTML = `${secondNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultTwo}</p> <p>Alright you normal weight. 😄😄</p>`
    } else if ((bmiTwo > 25, bmiTwo < 30)) {
      bmiResultTwo.innerHTML = `${secondNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultTwo}</p> <p>Ooops you're a bit overweight. 😥😥</p>`
    } else if (bmiTwo >= 30) {
      bmiResultTwo.innerHTML = `${secondNameValue} your BMI is: <p class="bmi-reading">${bmiFinishedResultTwo}</p> <p>Obese mf. 😓😓</p>`
    }
    //  COmpare both BMis to see which is bigger or if they are equal and tells the user who has a bigger Bmi or if they have the same BMI

    if (bmiOne > bmiTwo) {
      bmiCompare.innerHTML = `${firstNameValue} has a greater BMI than ${secondNameValue}`
    } else if (bmiOne < bmiTwo) {
      bmiCompare.innerHTML = `${secondNameValue} has a greater BMI than ${firstNameValue}`
    } else if ((bmiOne = bmiTwo)) {
      bmiCompare.innerHTML = `${secondNameValue} and ${firstNameValue} both have the same BMI `
    }
  }
  
})
// 2.6074436848847617
// challenge-1.js:31 Bmi Two: 0.00390625

// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater

// TODO: FInd out a way to implement that one is workin at a time thing tomorrow by checking how to know if an input is empty. WOrk on the styles tommorrow
// ** find a way to round up the BMI values to 2 decimal places

// const massRegex = /[0-9]+/gi
// const heightRegex = /[0-9]+/gi

// console.log()

// let str = "Here is your winner, brock lesnar";
// let stri = "Yes bro thats a super sprayer";
// let res = str.match(/bro/gi);
// let resu = stri.match(/bro/gi);

// console.log(res, resu);
// console.log(res, resu.input);
