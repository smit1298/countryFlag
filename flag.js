const countryButtonElement = document.querySelector("button");

countryButtonElement.addEventListener("click", function (e) {
  const randomIndex = Math.floor(Math.random() * countryWithImages.length);

  const selectedCountry = countryWithImages[randomIndex];

  document
  .querySelector("img")
  .setAttribute("src", `https:${selectedCountry.file_url}`);
  
  const allPElements = document.querySelectorAll("p");
  allPElements[0].textContent = selectedCountry.name
  allPElements[1].textContent = selectedCountry.alpha3
});
