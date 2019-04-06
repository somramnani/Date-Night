/* eslint-disable */
console.warn('Project One JS Initialized');
/* eslint-enable */

// rating, price, url, photo/image-url

$("#submit").on("click", function() {
  var addressInput = $("#location").val().trim();
  var yelpAPIKey = "V3BqWR13gf4DYXvRewAG0jVi7K7Xy-yLxjzRTFA29eZPdSiS1aFqyxVXq1PNP2e_m4Xl8cDdypAroctE4HFsP0ZY7_oGX0Xmvm7kZ6_WtTMAqCx2k_qljY0j3qymXHYx"
  var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + addressInput;

    $.ajax({
        url: yelpURL,
        headers: {
            'Authorization': 'Bearer ' + yelpAPIKey,
            },
        method: "GET",
        dataType: 'json' 
    }).then(function(response) {
        var resultArray = [];
        for(i = 0; i < response.businesses.length; i++);
        resultArray.push([i]);
        console.log(resultArray);
    })
})


