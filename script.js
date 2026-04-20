/*
    JS Forms lab
    Seth Boyer
    Oct. 9th, 2025
*/

const form = document.getElementById("eventRegistrationForm");

form.addEventListener("submit", (event) => {
  const errorMessages = document.querySelectorAll(".error-message");
  for (const el of errorMessages) {
    el.remove();
  }

  if (validation()) {
    event.preventDefault();
  }

  const tickets = document.getElementById("tickets").value;
  console.log("Number of tickets:", tickets);

  const emailAddress = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;

  console.log("Email:", emailAddress.value);
  console.log("Phone:", phoneNumber.value);

  if (validation()) {
    console.log("Validation succesful");
  } else {
    console.log("Validation failed.");
  }
});

const validation = () => {
  let isValid = true;
  const tickets = document.getElementById("tickets");
  const emailAddress = document.getElementById("email");
  const phoneNumber = document.getElementById("phoneNumber");
  const options = document.querySelector("#checkboxes");

  if (tickets.value === "") {
    displayErrorMessage(tickets, "You must purchase a ticket to register.");
    isValid = false;
  } else if (tickets.value < 1) {
    displayErrorMessage(
      tickets,
      "Please ensure you have selected a valid amount of tickets. (Numeric, non-negative.)",
    );
    isValid = false;
  } else if (tickets.value > 5) {
    displayErrorMessage(
      tickets,
      "Only 5 tickets per customer. You chose ",
      tickets.value,
    );
    isValid = false;
  }

  if (emailAddress.value === "") {
    displayErrorMessage(emailAddress, "Email Address cannot be blank.");
    isValid = false;
  }

  if (phoneNumber.value === "") {
    displayErrorMessage(phoneNumber, "Phone number cannot be blank.");
    isValid = false;
  }

  // for checkboxes, querySelector(":checked") checks for checked checkboxes, cant use .value like other validation
  if (!document.querySelector(":checked")) {
    displayErrorMessage(options, "Please select at least one checkbox");
    isValid = false;
  }

  return isValid;
};

const displayErrorMessage = (inputElement, message) => {
  const parent = inputElement.parentElement;
  const errorDisplay = document.createElement("span");

  errorDisplay.innerHTML = message;
  errorDisplay.className = "error-message";
  parent.appendChild(errorDisplay);

  parent.appendChild(errorDisplay);
};

//
