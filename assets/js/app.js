const checkbox = document.getElementById("btn__dark");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
