document.getElementById('vacation-form').onsubmit = () => {

    clearErrors();

    // Flag variable to determine if form data is valid
    let isValid = true;

    //validate Number of travlers
    let Travelers = document.getElementById('Travelers').value.trim();
    if (Travelers <= 0) {
        document.getElementById("err-Travelers").style.display = "block";
        isValid = false;
    }

    let destination = document.getElementById('destination').value.trim();
    if (destination == "none") {
        document.getElementById("err-destination").style.display = "block";
        isValid = false;
    }

    // Return isValid flag
    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}