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
/// ON SCROLL MENU OPACITY ///
const navbar = document.querySelector('nav')

window.onscroll = function() {
  if (window.pageYOffset > 0) {
    navbar.classList.add('light')
  } else {
    navbar.classList.remove('light')
  }
}

///MODAL GALLERY ///////////////////////////////////////////////////////////////
const modalBox = document.querySelector('.modal-holder');

document.getElementById('previewGallery').addEventListener('click', turnOff);
document.querySelectorAll('.about-item').forEach((item) => item.addEventListener("click", toggleModal));
document.getElementById('about-modal-holder').addEventListener('click', openLightboxModal);

function toggleModal(event) {
    modalBox.classList.toggle('visible');
    document.querySelector('#preview-src').src = event.currentTarget.querySelector('img').src;
}


function turnOff() {
    modalBox.classList.toggle('visible');
}

function openLightboxModal(event) {
    if (event.target === modalBox) {
        toggleModal();
        turnOff();
    }
}
