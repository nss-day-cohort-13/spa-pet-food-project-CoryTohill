var brandDiv = document.getElementById("brand");
var breedsDiv = document.getElementById("breeds");
var volumesPricesDiv = document.getElementById("volumesPrices");
var brandHTML = "";
var typesHTML = "";
var nameHTML = "";
var priceHTML = "";
var typeVolumePriceHTML = "";


var dogFoodRequest = new XMLHttpRequest();

dogFoodRequest.open("GET", "dogFood.json");
dogFoodRequest.send();
dogFoodRequest.addEventListener("load", processDogFoodData);

function processDogFoodData () {
  var dogFoodData = JSON.parse(this.responseText);

  for (i = 0; i < dogFoodData.dog_brands.length; i++) {
    brandHTML += dogFoodData.dog_brands[i].name;

    for (typ = 0; typ < dogFoodData.dog_brands[i].types.length; typ++) {
      typesHTML += `${dogFoodData.dog_brands[i].types[typ].type}`;

      for (vol = 0; vol < dogFoodData.dog_brands[i].types[typ].volumes.length; vol++) {
        nameHTML = dogFoodData.dog_brands[i].types[typ].volumes[vol].name;

        priceHTML = dogFoodData.dog_brands[i].types[typ].volumes[vol].price;

        typeVolumePriceHTML += `${typesHTML}, ${nameHTML}, ${priceHTML} : `;
      }
      typesHTML = "";

    }
    volumesPricesDiv.innerHTML += `<p>${typeVolumePriceHTML}</p>`;
    typeVolumePriceHTML = "";

    brandDiv.innerHTML += `<p>${brandHTML}</p>`;
    brandHTML = "";
  }
  breedsDiv.innerHTML += `<p>All Breeds</p>`;
};
