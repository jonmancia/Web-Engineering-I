/** Get ALL input elements */
function getInputElements() {
    // Get all inputs
    let startCity = document.getElementsByName("startCity")[0]
    let startState = document.getElementsByName("startState")[0]
    let endCity = document.getElementsByName("endCity")[0]
    let endState = document.getElementsByName("endState")[0]
    let inputElementsArray = [startCity, startState, endCity, endState];
    return inputElementsArray;
}
/** Get ALL input values */
function getInputValues() {
    let inputValuesArray = [];
    // Get input elements
    let inputElements = getInputElements();
    // counter
    let i = 0;
    while (i < inputElements.length) {
        inputValuesArray.push(inputElements[i].value);
        i++;
    }
    return inputValuesArray;
}
/** Form Validation */
function validateForm() {
    /** *******************************************
     * We'll get all elements and values from form 
     * ********************************************/
    const inputElementsArray = getInputElements();
    const inputValuesArray = getInputValues();
    // Loop to check if there are any undefined inputs
    let numInvalidInputs = 0;
    let i = 0;
    while (i < inputValuesArray.length) {
        // Add red border to invalid inputs 
        if (inputValuesArray[i] == '') {
            inputElementsArray[i].classList.add("invalid");
            numInvalidInputs++;
        } else {
            inputElementsArray[i].classList.remove("invalid");
        }
        i++;
    } // If everything is validated, execute request
    if (numInvalidInputs == 0) {
        getMileageInfo();
    }
}
/** AJAX Request */
function getMileageInfo() {
    let inputElements = getInputElements();
    let inputValues = getInputValues();
    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            let response = this.responseText;
            console.log(response);
            response = JSON.parse(response);
            displayMileageInfo(response);
        } else if (this.status != 200 && this.readyState == 4) {
            let element = document.getElementById("mileageInfo");
            element.innerHTML = "<h2>There was an error processing your request</h2>";
        }
    }
    let url = "http://localhost:1024/cgi-bin/cs213/mileageAjaxJSON?" + inputElements[0].name + "=" + inputValues[0] + "&" + inputElements[1].name + "=" + inputValues[1] + "&" + inputElements[2].name + "=" + inputValues[2] + "&" + inputElements[3].name + "=" + inputValues[3];
    request.open("GET", url);
    request.send();
}
/**Function takes care of displaying info to DOM */
function displayMileageInfo(info) {
    // get dom element
    let element = document.getElementById("mileageInfo");
    // deconstruct object
    let miles = info.trip.miles;
    let tmodes = info.trip.tmode;
    // assign data to element
    let milesNode = "<h3>Total: " + miles + " miles</h3><br>";
    let modesNode = "<h3>Modes of Transportation: </h3><br><ul>";
    // test if tmodes is empty
    if (tmodes == undefined) {
        modesNode = ''
    } else {
        for (let i = 0; i < info.trip.tmode.length; i++) {
            modesNode += "<h4>" + info.trip.tmode[i] + "</h4>";
        }
    }
    // Glue items from info to DOM
    element.innerHTML = milesNode + modesNode;
}
/** Function clears active mileage result when the clear button is clicked */
function clearDisplay() {
    let element = document.getElementById("mileageInfo");
    if (element.hasChildNodes()) {
        element.innerHTML = "";
    }
}
/** Function removes red border on input change if required fields are completed*/
function removeBorder(node) {
    // If the value of the node is not equal to nothing remove class
    if (node.value != '') {
        node.classList.remove("invalid");
    } else {
        node.classList.add("invalid");
    }
}