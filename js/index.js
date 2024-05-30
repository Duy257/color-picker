renderPicker();

const themeInput = document.getElementById("theme");

themeInput.addEventListener("change", (event) => {
  console.log("🚀 ~ themeInput.addEventListener ~ event:", event.value);
});
