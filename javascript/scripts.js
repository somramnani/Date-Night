/* eslint-disable */
console.warn('Project One JS Initialized');
/* eslint-enable */

// rating, price, url, photo/image-url

$("#submit").on("click", function() {
  var addressInput = $("#location").val().trim();
  var yelpAPIKey = "V3BqWR13gf4DYXvRewAG0jVi7K7Xy-yLxjzRTFA29eZPdSiS1aFqyxVXq1PNP2e_m4Xl8cDdypAroctE4HFsP0ZY7_oGX0Xmvm7kZ6_WtTMAqCx2k_qljY0j3qymXHYx"
  var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + addressInput;

  var eventbriteAPIKey = "QHHRQKYP5TZBK3NVPHD2";
  var eventbriteURL = "https://www.eventbriteapi.com/v3/events/search/?location.address=" + addressInput + "&token=QHHRQKYP5TZBK3NVPHD2";
  var OAuthKey = "QHHRQKYP5TZBK3NVPHD2";
  var eventSearchURL = "https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=" + addressInput;
  

    $.ajax({
        url: yelpURL,
        headers: {
            'Authorization': 'Bearer ' + yelpAPIKey,
            },
        method: "GET",
        dataType: 'json' 
    }).then(function(response) {
        console.warn("<--------yelp results----->");
        console.log(response)
        var resultArray = [];
        for(i = 0; i < response.businesses.length; i++);
        resultArray.push([i]);
    })

    $.ajax({
        url: eventbriteURL,
        method: "GET"
    }).then(function(response) {
        console.warn("<------eventbrite results------->");
        console.log(response);
    })

})


