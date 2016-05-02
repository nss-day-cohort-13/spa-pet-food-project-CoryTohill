var brandDiv = document.getElementById("brand");
var typesDiv = document.getElementById("types");
var volumesPricesDiv = document.getElementById("volumesPrices");
var brandHTML = "";
var typesHTML = "";
var nameHTML = "";
var priceHTML = "";
var nameAndPriceHTML = "";


var dogFoodRequest = new XMLHttpRequest();

dogFoodRequest.open("GET", "dogFood.json");
dogFoodRequest.send();
dogFoodRequest.addEventListener("load", processDogFoodData);

function processDogFoodData () {
  var dogFoodData = JSON.parse(this.responseText);

  for (i = 0; i < dogFoodData.dog_brands.length; i++) {
    brandHTML += `<p>${dogFoodData.dog_brands[i].name}</p>`;

    for (typ = 0; typ < dogFoodData.dog_brands[i].types.length; typ++) {
      typesHTML += `<p>${dogFoodData.dog_brands[i].types[typ].type}</p>`;

      for (vol = 0; vol < dogFoodData.dog_brands[i].types[typ].volumes.length; vol++) {
        nameHTML = dogFoodData.dog_brands[i].types[typ].volumes[vol].name;

        priceHTML = dogFoodData.dog_brands[i].types[typ].volumes[vol].price;

        nameAndPriceHTML += `<p>${nameHTML}, ${priceHTML} : </p>`;
      }
    }

  }


  brandDiv.innerHTML += brandHTML;
  typesDiv.innerHTML += typesHTML;
  volumesPricesDiv.innerHTML += nameAndPriceHTML;

};
