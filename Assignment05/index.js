/*******************************************************
 * Window Online Focus
********************************************************/
function focusOnload() {
    document.getElementById("apr-rate").focus();
}
/*******************************************************
 * Calculate is executed 1000 ms after the user has
 * started to input information in the loan amount field
 *******************************************************/
function calculate() {
  setTimeout(function calcMonthlyPay() {
        let result;
        // Loan term user input variables
        let loanTerm = document.getElementById("loan-term").value;
        // Check if valid loan term
        let loanAmt = document.getElementById("loan-amount").value;
        let loanApr = document.getElementById("apr-rate").value;
        // Validate
        if (loanApr == "" || loanAmt == "" || loanTerm == "") {
          window.alert("Please fill out all required fields.");
          if (loanApr == "") {
            document.getElementById("apr-rate").focus();
            document.getElementById("apr-rate").style.borderBottom = "1px solid red";
          } else if (loanTerm == "") {
            document.getElementById("loan-term").focus();
            document.getElementById("loan-term").style.borderBottom = "1px solid red";
          } else if (loanAmt == "") {
            document.getElementById("loan-amount").focus();
            document.getElementById("loan-amount").style.borderBottom = "1px solid red";
          }
        } else {
          // Parsed values
          loanApr = parseUserInput(loanApr);
          loanAmt = parseUserInput(loanAmt);
          loanTerm = parseUserInput(loanTerm);

          // Validation
          if (loanTerm > 40.00 || loanTerm < 1.00) {
            window.alert("Invalid loan term.");
          }

          // Conversions
          loanApr /= 100;
          // result of user input
          result = ((loanApr / 12) * loanAmt) / (1 - (1 + loanApr / 12) ** -(loanTerm * 12));
          // Have result be rounded two decimal places
          result = result.toFixed(2);
          // Insert result to the DOM

          document.getElementById("monthly-payment-text").value = result;
        }
      }
, 1500);
  
}
/*****************************************************
 * Function calculates the monthly payment based
 * on user's input
 *****************************************************/
function calcMonthlyPay() {
  let result;
  // Loan term user input variables
  let loanTerm = document.getElementById("loan-term").value;
  // Check if valid loan term
  let loanAmt = document.getElementById("loan-amount").value;
  let loanApr = document.getElementById("apr-rate").value;
  // Validate
  if (loanApr == "" || loanAmt == "" || loanTerm == "") {
    window.alert("Please fill out all required fields.");
    if (loanApr == "") {
      document.getElementById("apr-rate").focus();
      document.getElementById("apr-rate").style.borderBottom = "1px solid red";
    } else if (loanTerm == "") {
      document.getElementById("loan-term").focus();
      document.getElementById("loan-term").style.borderBottom = "1px solid red";
    } else if (loanAmt == "") {
      document.getElementById("loan-amount").focus();
      document.getElementById("loan-amount").style.borderBottom = "1px solid red";
    }
  } else {
    // Parsed values
    loanApr = parseUserInput(loanApr);
    loanAmt = parseUserInput(loanAmt);
    loanTerm = parseUserInput(loanTerm);

    // Validation
    if (loanTerm > 40.00 || loanTerm < 1.00) {
      window.alert("Invalid loan term.");
    }

    // Conversions
    loanApr /= 100;
    // result of user input
    result = ((loanApr / 12) * loanAmt) / (1 - (1 + loanApr / 12) ** -(loanTerm * 12));
    // Have result be rounded two decimal places
    result = result.toPrecision(6);
    // Insert result to the DOM

    document.getElementById("monthly-payment-text").value = result;
  }
}
/***********************************************************
 * Parse function to remove "%" and "$" from user input
 ***********************************************************/
function parseUserInput(str) {
  let size = str.length;
  let newStr = str.split("");

  for (let i = 0; i < size; i++) {
    if (str[i] == '%' || str[i] == '$') {
      newStr.splice(i, 1);
    }
  }

  newStr = newStr.join("");

  newStr = parseFloat(newStr);

  return newStr;
}
