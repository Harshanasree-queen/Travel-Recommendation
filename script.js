const countrySelect = document.getElementById("country-select");
const countryRecommendation = document.getElementById("country-recommendation");

const recommendations = {
  maldives: [
    { text: "Maldives - Crystal clear waters and luxurious resorts." },
  ],
  india: [
    { text: "Golden Temple - A spiritual retreat in Amritsar, India." },
  ],
  cambodia: [
    {  text: "Angkor Wat - A magnificent ancient temple in Cambodia." },
  ],
};

countrySelect.addEventListener("change", () => {
  const selectedCountry = countrySelect.value;
  const places = recommendations[selectedCountry];
  countryRecommendation.innerHTML = places
    .map(
      (place) => `
    <div class="destination">
      <p>${place.text}</p>
    </div>
  `
    )
    .join("");
});
