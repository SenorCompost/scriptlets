/// ExampleScript.js
  addEventListener("load", (event) => {
    myFunc();
  });

function myFunc() {
  let e = document.querySelector("div.image-container > a");
  alert(e.href);
}
