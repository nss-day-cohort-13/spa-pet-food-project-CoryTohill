var brandDiv = document.getElementById("brand");
var breedsDiv = document.getElementById("breeds");
var volumesPricesDiv = document.getElementById("volumesPrices");
var brandHTML = "";
var typesHTML = "";
var nameHTML = "";
var priceHTML = "";
var typeVolumePriceHTML = "";
var breedsHTML = "";


var dogFoodRequest = new XMLHttpRequest();
dogFoodRequest.open("GET", "dogFood.json");
dogFoodRequest.send();
dogFoodRequest.addEventListener("load", processPetFoodData);

var catFoodRequest = new XMLHttpRequest();
catFoodRequest.open("GET", "catFood.json");
catFoodRequest.send();
catFoodRequest.addEventListener("load", processPetFoodData);


function processPetFoodData () {
  var petFoodData = JSON.parse(this.responseText);

  for (i = 0; i < petFoodData.brands.length; i++) {
    brandHTML += petFoodData.brands[i].name;

    //determines whether a breeds section exists and gathers appropriate data if it does, defaults to "All Breeds" if no data found
    if (petFoodData.brands[i].breeds){
      for(bre = 0; bre < petFoodData.brands[i].breeds.length; bre++){
        var breeds = `${petFoodData.brands[i].breeds[bre].breed}, `;
        breeds = breeds[0].toUpperCase() + breeds.slice(1);
        breedsHTML += breeds;
      }
    } else {
      breedsHTML += `All Breeds`;
    }
    breedsDiv.innerHTML += `<p>${breedsHTML}</p>`;
    breedsHTML = "";

    // determins number of brands and inserts them into appropriate divs in HTML
    for (typ = 0; typ < petFoodData.brands[i].types.length; typ++) {
      typesHTML += `${petFoodData.brands[i].types[typ].type}`;
      typesHTML = typesHTML[0].toUpperCase() + typesHTML.slice(1);
      typesHTML = typesHTML.replace("_", " ");

      // determines the types, sizes, and prices and inserts them into the appropriate divs in HTML
      for (vol = 0; vol < petFoodData.brands[i].types[typ].volumes.length; vol++) {
        nameHTML = petFoodData.brands[i].types[typ].volumes[vol].name;

        priceHTML = petFoodData.brands[i].types[typ].volumes[vol].price;

        typeVolumePriceHTML += `${typesHTML}, ${nameHTML}, ${priceHTML} : `;
      }
      typesHTML = "";

    }
    typeVolumePriceHTML = typeVolumePriceHTML.slice(0, -2);
    volumesPricesDiv.innerHTML += `<p>${typeVolumePriceHTML}</p>`;
    typeVolumePriceHTML = "";

    brandDiv.innerHTML += `<p>${brandHTML}</p>`;
    brandHTML = "";
  }


};
