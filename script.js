const error = document.querySelector(".error");
const subError = document.querySelector(".subError");

const validate = (event) => {
  console.log(event);
  console.log(event.target.value);
  if (event.target.value == "") {
    error.innerHTML = "";
    subError.innerHTML = "";
  } else if (event.target.value.includes("@" && ".")) {
    error.innerHTML = "";
    subError.innerHTML = "";
  } else {
    event.target.id == "email"
      ? (error.innerHTML = "enter a valid email id")
      : (subError.innerHTML = "enter a valid email id");
  }
};
