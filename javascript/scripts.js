
//__________________________________________________________
//GLOBAL VARIABLES

  //________________________________________________________
  //FIREBASE
  //________________________________________________________


    var config = {
      apiKey: "AIzaSyDfKpAiy7ngBuaxWEE57a-Fwddvw-kEEEU",
      uthDomain: "date-night-e6b75.firebaseapp.com",
      databaseURL: "https://date-night-e6b75.firebaseio.com",
      projectId: "date-night-e6b75",
      storageBucket: "date-night-e6b75.appspot.com",
      messagingSenderId: "637265402446"
    };
    
    firebase.initializeApp(config);

  //________________________________________________________ 


//________________________________________________________ 


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


//________________________________________________________
//Activities Button Variables
//________________________________________________________
  
  //Activity Button value variables 
  var activities1 = $(".activities1").val();
  var activities2 = $(".activities2").val();
  var activities3 = $(".activities3").val();
  var activities4 = $(".activities4").val();
  var activities5 = $(".activities5").val();
  
  // Activity button input field
  var activityEntry = $(".activities_entry");
//________________________________________________________

//__________________________________________________________


//__________________________________________________________
//BUTTON FUNCTIONS
//__________________________________________________________

//________________________________________________________
//Price Button On-Click Functions
//________________________________________________________
  
  //If one of the $ is selected, then make the input value(priceEntry) value that price

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

 
//________________________________________________________
//Activity On-Click Functions
//________________________________________________________
  
  //If one of the activities is selected, then make the input value(priceEntry) value that price  

  $(".activities1").on("click", function(){
    activityEntry.attr("value", activities1);
  })


  //______________________________________________________
  //Price Button On-Click Functions
  //______________________________________________________


  $(".activities3").on("click", function(){
    activityEntry.attr("value", activities3);
  })

  $(".activities4").on("click", function(){
    activityEntry.attr("value", activities4);
  })


      // This is the input value of activities: 
      var activityEntryValue = $(".activities_entry").val();
      console.log(activityEntryValue);
      
      //______________________________________________________
      //API VARIABLES
      //______________________________________________________
        var addressInput = $("#location").val().trim();
        var yelpAPIKey = "V3BqWR13gf4DYXvRewAG0jVi7K7Xy-yLxjzRTFA29eZPdSiS1aFqyxVXq1PNP2e_m4Xl8cDdypAroctE4HFsP0ZY7_oGX0Xmvm7kZ6_WtTMAqCx2k_qljY0j3qymXHYx"
        var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + addressInput + "&limit=6";

        var eventbriteAPIKey = "QHHRQKYP5TZBK3NVPHD2";
        var eventbriteURL = "https://www.eventbriteapi.com/v3/events/search/?location.address=" + addressInput + "&token=QHHRQKYP5TZBK3NVPHD2";
        var OAuthKey = "QHHRQKYP5TZBK3NVPHD2";
        var eventSearchURL = "https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=" + addressInput;
        
        let placesAPIKey = "AIzaSyBXO-BuPfu7ZFeL1Cebncm3ojSMaIbNFk0";
        let placesURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=theaters+in+" + addressInput + "&key=" + placesAPIKey;
      //______________________________________________________
      
      //______________________________________________________
      //API'S AJAX REQUEST
      //______________________________________________________

        // YELP API

        $.ajax({
          url: eventbriteURL,
          method: "GET"
          
          }).then(function(response) {

              console.warn("<--------yelp results----->");
              console.log(response);

              for(i = 0; i < response.businesses.length; i++){   
                // Restauraunt Results Row
                var newRow = $("<tr>");
                var restaurauntDiv  = $(".restaurant-parralax");
             
                // API information stored into variables
                var price = response.businesses[i].price;
                var image = response.businesses[i].image_url;
                var webURL = response.businesses[i].url;
                var location = response.businesses[i].location;
                var name = response.businesses[i].name;
                var lat = response.businesses[i].coordinates.latitude;
                var long = response.businesses[i].coordinates.longitude;

                // If the user clicks price, and restaraunts display the specific budget and Restaurants.
                if (priceEntryValue === price  && activityEntryValue === "Restaurants" ) {
                  console.log(response.businesses[i]);
                  let restBtn = $("<a>").addClass("resultBtn m-2").html(name).attr("href", webURL).attr("data-toggle", "popover").attr("title", "information").attr("data-content", "information  here").attr("target", "_blank");
                  restaurauntDiv.append(restBtn);
                }
              }                  
          })

          // Eventbrite API
          $.ajax({
            url: eventbriteURL,
            method: "GET"
            
            }).then(function(response) {

              console.warn("<------eventbrite results------->");
              console.log(response);
            

          for(i = 0; i < response.results.length; i++) {
            console.log('theater name: ' + response.results[i].name);
            console.log('street address: ' + response.results[i].formatted_address);
            console.log('user rating: ' + response.results[i].rating);


              for (let i = 0; i < response.events.length; i++){
                var name = response.events[i].name.html;

                if (activityEntryValue === "Local-Events" ) {
                  console.log(response.events[i]);
                  localEventsRow.append(name);
                }
              }
          }
          
          // Google Places API
          $.ajax({
            url: placesURL,
            method: "GET"
          }).then(function(response) {
            console.warn('----google places-----')

            for(i = 0; i < response.results.length; i++) {
              console.log('theater name: ' + response.results[i].name);
              console.log('street address: ' + response.results[i].formatted_address);
              console.log('user rating: ' + response.results[i].rating);

              var theaterName = response.results[i].name;
              var theaterAddress = response.results[i].formatted_address;
              var theaterRating = response.results[i].rating;
            }
          })
        })


    //______________________________________________________
      
  //______________________________________________________
      
//______________________________________________________
        
