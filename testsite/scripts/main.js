const myImage = document.querySelector("img");

myImage.addEventListener("click", function() {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/computer.jpeg") {
    myImage.setAttribute("src", "images/mac.jpeg");
  } else {
    myImage.setAttribute("src", "images/computer.jpeg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername() {
        const myName = prompt ("Naam k paryo hajur ko?");
        if (!myName) {
            setUsername();
        }else {
        localStorage.setItem("name", myName);
        myHeading.textContent= `AAHA! KATI Mithoo Naam, ${myName}`;
        }
}
if (!localStorage.getItem("name")) {
    setUsername();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent= `AAHA! KATI Mithoo Naam, ${storedName}`
}

myButton.addEventListener('click', () => {
    setUsername();
});

