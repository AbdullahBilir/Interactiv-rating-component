import { dataEkle, dataGetir } from "./data.js";

const button = document.querySelectorAll(".button-1");

const submit = document.querySelector(".submit");

button.forEach((eleman) => {
  eleman.addEventListener("click", handleClick);
});

function handleClick(e) {
  let selectedValue = e.target.value;
  e.target.classList.add("active");

  dataEkle(selectedValue);

  localStorage.setItem("veriler", JSON.stringify(dataGetir()));

  button.forEach((btn) => {
    btn.removeEventListener("click", handleClick);
  });
}
