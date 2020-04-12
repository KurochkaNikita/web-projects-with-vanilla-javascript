const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');


// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector('small');
  small.innerText = message
}

// Change border color if input is success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success"
}

// Get field name and convert first latter to upper case
function getFieldName({id}) {
  return id.charAt(0).toUpperCase() + id.slice(1)
}

// Checker functions

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSuccess(email)
  } else {
    showError(email, 'Email is not valid')
  }
}

function isRequired(inputArr = []) {
  inputArr.forEach(input => {
    if (input.value === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input)
    }
  })
}

function checkLength(inputArr = []) {
  inputArr.forEach(({input, min, max}) => {
    if (input.value.length < min) {
      showError(input, `${getFieldName(input)} must be least ${min} characters`)
    } else if (input.value.length > max) {
      showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
      showSuccess(input)
    }
  })
}

function isCheckMatch(input1, input2) {
  if (input1.value === input2.value) {
    showSuccess(input2)
  } else {
    showError(input2, `${getFieldName(input2)} do not match`)
  }
}

// Event Listener

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const requiredFields = [username, email, password, confirmPassword];
  const rangeLengthFields = [
    {
      input: username,
      min: 3,
      max: 15
    },
    {
      input: password,
      min: 5,
      max: 25
    }
  ];

  isRequired(requiredFields);
  checkLength(rangeLengthFields);
  checkEmail(email);
  isCheckMatch(password, confirmPassword);
});