const formE = document.getElementById("submit-form");
formE.onsubmit = async (e) => {
  e.preventDefault();

  let response = await fetch("https://formspree.io/f/mayaddnq", {
    method: "POST",
    body: new FormData(formE),
  });

  let result = await response.json();

  alert(result.message);
};
