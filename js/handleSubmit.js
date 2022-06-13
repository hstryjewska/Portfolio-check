const form = document.getElementById("contact-form");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const status = document.getElementById("statusOn");
  const data = new FormData(event.target);
  
  let error = 0;

  let nameField = document.forms["contact-form"]["name"].value;
  document.getElementById("name_error").innerHTML = "";
  if (nameField == null || nameField == "") {
    error++;
    document.getElementById("name_error").innerHTML = "Name must be filled out";
  }

  let emailField = document.forms["contact-form"]["email"].value;
  document.getElementById("email_error").innerHTML = "";
  if (emailField == null || emailField == "") {
    error++;
    document.getElementById("email_error").innerHTML =
      "Email must be filled out";
  }

  let ifEmpty = document.forms["contact-form"]["message"].value;
  document.getElementById("message_error").innerHTML = "";
  if (ifEmpty == null || ifEmpty == "") {
    error++;
    document.getElementById("message_error").innerHTML =
      "Oh no! Please ... write something :)";
  }

  if (error > 0) {
    return false;
  }

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok && error <= 0) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}

export { handleSubmit };