
// This code loops through each checkbox to see if it's
// checked, if it is, we'll add it to the total to display it
function displayTotal() {
  let total = 0;
  for (let i = 0; i < 5; i++) {
    if (document.forms["main-form"][i].checked)
      total += parseInt(document.forms["main-form"][0].value);
  }
  // Convert total to include decimals
  total = total.toFixed(2);
  // Display the total to DOM
  document.getElementById("total-output").innerHTML = total;
}

function validate() {
  // Element and value getters from DOM
  let firstName = document.getElementById('first-name');
  let firstNameValue = firstName.value;
  let lastName = document.getElementById('last-name');
  let lastNameValue = lastName.value;
  let address = document.getElementById('address');
  let addressValue = address.value;
  let phone = document.getElementById('phone');
  let phoneValue = phone.value;
  let creditCardNum = document.getElementById('creditcard-number');
  let creditCardNumVal = creditCardNum.value;
  let ccExpMonth = document.getElementById('creditcard-exp-month');
  let ccExpMonthVal = ccExpMonth.value;
  let ccExpYear = document.getElementById('creditcard-exp-year');
  let ccExpYearVal = ccExpYear.value;

  // Create array of elements
  let elementArray = new Array();
  elementArray.push(firstName, lastName, address, phone, creditCardNum, ccExpMonth, ccExpYear);
  // Create array of element values
  let elementValArray = new Array();
  elementValArray.push(firstNameValue, lastNameValue, addressValue, phoneValue, creditCardNumVal,
    ccExpMonthVal, ccExpYearVal);

  // Validation regex patterns
  let ccPattern = /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
  let phonePattern = /^\d{3}-?\d{3}-?\d{4}$/;

  // Loop through all the values to verify their values are not null
  // If any of these values are null, return false
  let invalidFields = 0;
  for (let i = 0; i < elementValArray.length; i++) {
    // if the field is blank
    if (elementValArray[i] == "") {
      // if the field is blank and the field is month
      if (elementArray[i].id == "creditcard-exp-month" || elementArray[i].id == "creditcard-exp-year") {
        elementArray[i].style = "border: 2px solid red; width: 70px;";
        elementArray[i].focus();
        invalidFields++;  
      } else {
        elementArray[i].style = "border: 2px solid red";
        elementArray[i].focus();
        invalidFields++;
      }
    } else if (elementArray[i].id == "creditcard-number") {
      // Validation for pattern matching
      let index = elementArray[i].value.search(ccPattern);
      // If it's not found add red border
      if (index < 0) {
        elementArray[i].style = "border: 2px solid red;";
        document.getElementById("cc-invalid-text").innerHTML = "Invalid credit card number";
        document.getElementById("cc-invalid-text").style = "color: red; position: relative; left: 140px;"
        elementArray[i].focus();
        invalidFields++;
      } else { // If the index is not less than zero, the cc is validated remove failed validation css
        document.getElementById("cc-invalid-text").style = "display: none;"
        elementArray[i].style = "border: solid 2px black";
      } // Validate phone number
    } else if (elementArray[i].id == "phone") {
      let index = elementArray[i].value.search(phonePattern);
      if (index < 0) {
        elementArray[i].style = "border: 2px solid red";
        document.getElementById("phone-invalid-text").innerHTML = "Invalid phone number";
        document.getElementById("phone-invalid-text").style = "color: red; position: relative; left: 206px;"
        elementArray[i].focus();
        invalidFields++;
      } else {
        document.getElementById("phone-invalid-text").style = "display: none;"
        elementArray[i].style = "border: solid 2px black";
      }
    } else if (elementArray[i].id == "creditcard-exp-month") {
      if (parseInt(elementValArray[i]) > 12 || parseInt(elementValArray[i]) < 0) {
          elementArray[i].style = "border: 2px solid red; width: 70px;";
          
          document.getElementsByClassName("invalid-month-year")[0].innerHTML = "Invalid month";
          document.getElementsByClassName("invalid-month-year")[0].style = "color: red;";
          elementArray[i].focus();
          invalidFields++;
      } else {
        document.getElementsByClassName("invalid-month-year")[0].style = "display: none";
        elementArray[i].style = "border: solid 2px black; width: 70px;";
      }
    } else if (elementArray[i].id == "creditcard-exp-year") {
      if (parseInt(elementValArray[i]) < 2019 || parseInt(elementValArray[i]) > 2031) {
        elementArray[i].style = "border: 2px solid red; width: 70px;"
        document.getElementsByClassName("invalid-month-year")[0].innerHTML = "Invalid year";
        document.getElementsByClassName("invalid-month-year")[0].style = "color: red; position: relative; left: 150px";
        elementArray[i].focus();
        invalidFields++;
      }
      else {
        document.getElementsByClassName("invalid-month-year")[0].style = "display: none;";
        elementArray[i].style = "border: solid 2px black; width: 70px;";
      }
    } else { // remove failed validation css
      if (elementArray[i].id == "creditcard-exp-month" || elementArray[i].id == "creditcard-exp-year") {
        elementArray[i].style = "border: solid 2px black; width: 50px;";
      } else
        elementArray[i].style = "border: solid 2px black";
    }
  }

  // If there are invalid fields return false
  if (invalidFields)
    return false;
  // else, return otherwise
  return true;
}
