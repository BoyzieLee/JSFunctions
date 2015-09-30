
// Grab My Elements
var text_one = document.querySelector('#num_one');
var text_two = document.querySelector('#num_two');
var answer = document.querySelector('#answer');
var calculate = document.querySelector('#calculateBtn');

// Function to Preform the calculation
var sum = function () {
  var num_one = Number(text_one.value);
  var num_two = Number(text_two.value);
  var response = num_one + num_two;
  answer.textContent = response;
};

// Button Click
calculate.addEventListener('click', sum);