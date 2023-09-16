function getFormvalue() {
    // Get the form element by its ID
    var form = document.getElementById("form1");

    // Get the values of the first and last name fields
    var firstName = form.elements.fname.value;
    var lastName = form.elements.lname.value;

    // Check if both fields are filled out
    if (firstName && lastName) {
        // Display the values using an alert
        alert(firstName +" "+lastName);
    } else {
        alert("Please fill out both First name and Last name fields.");
    }

    // Prevent the form from submitting and refreshing the page
    return false;
}
