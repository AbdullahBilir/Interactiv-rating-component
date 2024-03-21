let array = [];

export function dataEkle(value) {
  array.push(value);
}

export function dataGetir() {
  return array;
}

window.addEventListener("DOMContentLoaded", () => {
  const handle = document.querySelector(".handtitle");
  const chose = JSON.parse(localStorage.getItem("veriler"));
  const veri = `You selected ${chose} out of 5`;
  handle.textContent = veri;
});
