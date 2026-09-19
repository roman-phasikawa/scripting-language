function validateform(e) {
  e.preventDefault();

  // Data Validation
  let nameValue = document.forms["myform"]["fname"].value;
  if (nameValue.trim() === "") {
    alert("Name must be filled");
    return;
  }
  let emailValue = document.forms["myform"]["email"].value.trim();
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Pattern: text@text.domain
  if (emailValue === "" || !emailPattern.test(emailValue)) {
    alert("Data Validation Error: Please enter a valid email address!");
    return;
  }

  // Numeric Validation
  const ageInput = document.getElementById("age");
  let ageValue = Number(ageInput.value);
  if (isNaN(ageValue) || ageValue < 1 || ageValue > 99) {
    alert("Numeric Validation Error: Input not valid");
    return;
  }

  // Constraint Validation
  let form = document.getElementById("myForm");
  if (!form.checkValidity()) {
    alert("Constraint Validation Failed");
    return;
  }

  alert("Form submit successfullly");
}
