let calculate = document.getElementById("cal");
let refresh = document.getElementById("ref");

calculate.addEventListener("click", bmiCalculate);
refresh.addEventListener("click", refreshPage);

function bmiCalculate() {
  let heightInput = document.getElementById("height");
  let weightInput = document.getElementById("weight");
  let ans = document.querySelector(".box4");

  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);

  try {
    if (isNaN(height) || height === '' || height < 0) {
      throw "Please enter correct height";
    }

    if (isNaN(weight) || weight === '' || weight < 0) {
      throw "Please enter correct weight";
    }

    let bmi = weight / Math.pow(height, 2);
    // bmi= Math.round(bmi,2);
    bmi = bmi.toFixed(2);
    ans.innerHTML = "Your BMI is " + bmi;

    if (bmi < 18.5) {
      ans.innerHTML += "<br>You are in the underweight range";
    } else if (bmi >= 18.5 && bmi < 25) {
      ans.innerHTML += "<br>You are in the healthy weight range";
    } else {
      ans.innerHTML += "<br>You are in the overweight range";
    }
    heightInput.classList.remove("error");
    weightInput.classList.remove("error");
  } catch (error) {
    // console.log(error);
    ans.innerHTML = error;
    heightInput.classList.add("error");
    weightInput.classList.add("error");
  }
}

function refreshPage() {
  location.reload();
}
