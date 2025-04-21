// document.addEventListener("DOMContentLoaded", function() {
//   // Load Header
//   fetch("forms/header.html")
//   .then(response => response.text())
//   .then(data => {
//       document.getElementById("header").innerHTML = data;
//   })
//   .catch(error => console.error("Error loading header:", error));

//   // Load Footer
//   fetch("forms/footer.html")
//   .then(response => response.text())
//   .then(data => {
//       document.getElementById("footer").innerHTML = data;
//   })
//   .catch(error => console.error("Error loading footer:", error));
// });




// // assets/js/layout.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("forms/footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer").innerHTML = data;
      })
      .catch(error => console.error("Error loading footer:", error));
  });
  