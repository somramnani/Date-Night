
/* eslint-disable */
console.warn('Project One JS Initialized');


//__________________________________________________________
//GLOBAL VARIABLES
//__________________________________________________________
  
  //________________________________________________________
  //Price Button Variables
  //________________________________________________________
    //Price Button value variables 
    var price1 = $(".price1").val();
    var price2 = $(".price2").val();
    var price3 = $(".price3").val();
    var price4 = $(".price4").val();
    var price5 = $(".price5").val();
    
    // Price button input field
    var priceEntry = $(".price_entry");
  //________________________________________________________


//__________________________________________________________

//__________________________________________________________
//BUTTON FUNCTIONS
//__________________________________________________________
  
//________________________________________________________
  //Price Button On-Click Functions
  //________________________________________________________
    $(".price1").on("click", function(){
      priceEntry.attr("value", price1);
    })

    $(".price2").on("click", function(){
      priceEntry.attr("value", price2);
    })
    $(".price3").on("click", function(){
      priceEntry.attr("value", price3);
    })
    $(".price4").on("click", function(){
      priceEntry.attr("value", price4);
    })
    $(".price5").on("click", function(){
      priceEntry.attr("value", price5 );
    })
  //________________________________________________________



//__________________________________________________________
 
=======
/* eslint-enable */

// https://api.yelp.com/v3/businesses/{id}
// rating, price, url, photo/image-url 


var lat;
var lng;

var address = "54 Tracy Drive, Manalapan, NJ 07726";

// var googleGeoCodeAPIKey = "AIzaSyCzFKGOi-M3i-imW-3EPnBNkYyid0rkRQM";
// var googleGeoCodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + googleGeoCodeAPIKey;



// $.ajax({
//     url: googleGeoCodeURL,
//     method: "GET"
// }).then(function(response) {
//     console.log(response);
//     lat = response.results[0].geometry.location.lat;
//     console.log(lat);
//     lng = response.results[0].geometry.location.lng;
//     console.log(lng);

// })

$("#submit").on("click", function() {
  var addressInput = $("#location").val().trim();
  var yelpAPIKey = "V3BqWR13gf4DYXvRewAG0jVi7K7Xy-yLxjzRTFA29eZPdSiS1aFqyxVXq1PNP2e_m4Xl8cDdypAroctE4HFsP0ZY7_oGX0Xmvm7kZ6_WtTMAqCx2k_qljY0j3qymXHYx"
  var yelpURL = "https://api.yelp.com/v3/businesses/search?location=Tokyo" + addressInput;

    $.ajax({
        url: yelpURL,
        headers: {
            'Authorization': 'Bearer' + yelpAPIKey
            },
        method: "GET",
        dataType: 'JSONP' 
    }).then(function(response) {
        console.log(response.businesses)
        var resultArray = [];
        for(i = 0; i < response.businesses.length; i++);
        resultArray.push([i]);
        console.log(resultArray);
    })
})


