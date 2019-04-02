function requestPopulationData() {
    // get value from selection
    let countrySelection = document.getElementsByName("country")[0].value;
    // select correct file based on selection
    let strFileName;
    let activeClass;
    switch (countrySelection) {
        case "USA":
            {
                strFileName = "usa.txt";
                activeClass = "usa";
                break;
            }
        case "Mexico":
            {
                strFileName = "mexico.txt";
                activeClass = "mexico";
                break;
            }
        case "Canada":
            {
                strFileName = "canada.txt";
                activeClass = "canada";
                break;
            }
        case "Russia":
            {
                strFileName = "russia.txt";
                activeClass = "russia";
            }
        default:
            break;
    }
    if (strFileName) {
        // Remove previously selected class/background
        let arrCountry = ["usa", "mexico", "russia", "canada"];
        for (let i = 0; i < 4; i++) {
            if (document.getElementsByClassName("main__container")[0].classList.contains(arrCountry[i])) {
                document.getElementsByClassName("main__container")[0].classList.remove(arrCountry[i])
            };
        }
        // Add flag background
        document.getElementsByClassName("main__container")[0].classList.add(activeClass);
        // create ajax object
        let request = new XMLHttpRequest;
        // callback function
        request.onreadystatechange = function() {
            // check if request finished and response ready
            if (this.readyState = 4 && this.status == 200) {
                if (this.responseText) document.getElementById("cities").innerHTML = this.responseText;
            }
        }
        // passing in file name value
        request.open("GET", "http://157.201.194.254/~cs213/" + strFileName, true);
        // send
        request.send();
    } else {
        document.getElementById("cities").innerHTML = "<br><br><br>Please select a country";
    }
}

function processJSONRequest() {
    // Set up the request object
    let request = new XMLHttpRequest;
    // Get input value from user
    let selectedFile = document.getElementsByName("filename-input")[0].value;
    // Check wether user entered in valid file names
    if (selectedFile == "json.txt" || selectedFile == "json1.txt") {
        // set up a call back function
        request.onreadystatechange = function() {
            // Check if the response is ready
            if (this.readyState == 4 && this.status == 200) {
                // get document object
                let htmlVal = document.getElementById("result-container");
                // create html table to dynamically add json values
                let table = "<table id =\"student-table\"><tr><th>Student Name</th><th>Address</th><th>Major</th><th>GPA</th></tr>";
                let obj = JSON.parse(this.responseText);
                for (let i = 0; i < obj.students.length; i++) {
                    table += "<tr><td>" + obj.students[i].first + " " + obj.students[i].last + "</td><td>" + obj.students[i].address.city + " " + obj.students[i].address.state + "," + obj.students[i].address.zip + "</td><td>" + obj.students[i].major + "</td><td>" + obj.students[i].gpa + "</td></tr>";
                }
                htmlVal.innerHTML = table;
            }
        }
        request.open("get", "http://157.201.194.254/~cs213/" + selectedFile, true);
        request.send();
    } else { // fallback will be json.txt
        request.onreadystatechange = function() {
            // Check if the response is ready
            if (this.readyState == 4 && this.status == 200) {
                // get document object
                let htmlVal = document.getElementById("result-container");
                // create html table to dynamically add json values
                let table = "<table id =\"student-table\"><tr><th>Student Name</th><th>Address</th><th>Major</th><th>GPA</th></tr>";
                let obj = JSON.parse(this.responseText);
                for (let i = 0; i < obj.students.length; i++) {
                    table += "<tr><td>" + obj.students[i].first + " " + obj.students[i].last + "</td><td>" + obj.students[i].address.city + " " + obj.students[i].address.state + "," + obj.students[i].address.zip + "</td><td>" + obj.students[i].major + "</td><td>" + obj.students[i].gpa + "</td></tr>";
                }
                htmlVal.innerHTML = table;
            }
        }
        request.open("get", "http://157.201.194.254/~cs213/json.txt", true);
        request.send();
    }
}
