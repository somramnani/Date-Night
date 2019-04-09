
/* eslint-disable */
console.warn('Project One JS Initialized');

//__________________________________________________________
//GLOBAL VARIABLES
//__________________________________________________________
  
  //________________________________________________________
  //Location Variables
  //________________________________________________________
  
    // Location Input
    var gps =  $(".gps").val();
    
    var lat;
    var lng;
    var address = "54 Tracy Drive, Manalapan, NJ 07726";
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

    $(".activities2").on("click", function(){
      activityEntry.attr("value", activities2);
    })

    $(".activities3").on("click", function(){
      activityEntry.attr("value", activities3);
    })

    $(".activities4").on("click", function(){
      activityEntry.attr("value", activities4);
    })

    $(".activities5").on("click", function(){
      activityEntry.attr("value", activities5);
		})
    
  //______________________________________________________


  //______________________________________________________
  //Price Button On-Click Submit Functions
  //______________________________________________________

    $("#submit").on("click", function() {

      // The input value of activities
		  var priceEntryValue = $(".price_entry").val();
      console.log(priceEntryValue);

      // This is the input value of activities: 
      var activityEntryValue = $(".activities_entry").val();
      console.log(activityEntryValue);

       
      //______________________________________________________
      //API VARIABLES
      //______________________________________________________

        var addressInput = $("#location").val().trim();
        var yelpAPIKey = "V3BqWR13gf4DYXvRewAG0jVi7K7Xy-yLxjzRTFA29eZPdSiS1aFqyxVXq1PNP2e_m4Xl8cDdypAroctE4HFsP0ZY7_oGX0Xmvm7kZ6_WtTMAqCx2k_qljY0j3qymXHYx"
        var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + addressInput;

        var eventbriteAPIKey = "QHHRQKYP5TZBK3NVPHD2";
        var eventbriteURL = "https://www.eventbriteapi.com/v3/events/search/?location.address=" + addressInput + "&token=QHHRQKYP5TZBK3NVPHD2";
        var OAuthKey = "QHHRQKYP5TZBK3NVPHD2";
        var eventSearchURL = "https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=" + addressInput;
      //______________________________________________________


      var addressInput = $("#location").val().trim();
      var yelpAPIKey = "V3BqWR13gf4DYXvRewAG0jVi7K7Xy-yLxjzRTFA29eZPdSiS1aFqyxVXq1PNP2e_m4Xl8cDdypAroctE4HFsP0ZY7_oGX0Xmvm7kZ6_WtTMAqCx2k_qljY0j3qymXHYx"
      var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + addressInput + "&limit=6";

      var eventbriteAPIKey = "QHHRQKYP5TZBK3NVPHD2";
      var eventbriteURL = "https://www.eventbriteapi.com/v3/events/search/?location.address=" + addressInput + "&token=QHHRQKYP5TZBK3NVPHD2";
      var OAuthKey = "QHHRQKYP5TZBK3NVPHD2";
      var eventSearchURL = "https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=" + addressInput;
        
      var fandangoApiKey = "ncpps2jdywggp62dwfegnruz";
      var fandangoSecretKey = "BmyAFhX3EV";
      var fandangoURL = "";
      var fandangoSearchURL = "";

      $.ajax({
        url: yelpURL,
        headers: {
          'Authorization': 'Bearer ' + yelpAPIKey,    
        },    
        method: "GET",
          dataType: 'json' 

        }).then(function(response) {
           // var resultArray = [];
            console.warn("<--------yelp results----->");
            console.log(response);

            for(i = 0; i < response.businesses.length; i++){   
              // Restauraunt Results Row
              var newRow = $("<tr>");
              var restaurauntDiv  = $("#restaurant-results");

              // resultArray.push([i]);

              // API information stored into variables
              var price = response.businesses[i].price;

              var image = response.businesses[i].image_url;
              var webURL = response.businesses[i].url;

              var name = response.businesses[i].name;

              // If the user clicks price, and restaraunts display the specific budget and Restaurants.
              if (priceEntryValue === price  && activityEntryValue === "Restaurants" ) {
                console.log(response.businesses[i]);
                let restBtn = $("<a>").addClass("resultBtn m-2").html(name).attr("href", webURL);
                restaurauntDiv.append(restBtn);

              }
          }                  
        })

      
      //______________________________________________________
      //API'S AJAX REQUEST
      //______________________________________________________
        
        $.ajax({
          url: yelpURL,
          headers: {
            'Authorization': 'Bearer ' + yelpAPIKey,    
          },    
          method: "GET",
            dataType: 'json' 

          }).then(function(response) {
              // var resultArray = [];
              console.warn("<--------yelp results----->");
              console.log(response);

              for(i = 0; i < response.businesses.length; i++){   
                // Restauraunt Results Row
                var newRow = $("<tr>");
                var restaurauntDiv  = $("#restaurant-results");
                var restarauntsParralaxDiv = $(".restaurant-parralax")

                // resultArray.push([i]);

                // API information stored into variables
                var price = response.businesses[i].price;

                var name = response.businesses[i].name;

                // If the user clicks price, and restaraunts display the specific budget and Restaurants.
                if (priceEntryValue === price  && activityEntryValue === "Restaurants" ) {
                  console.log(response.businesses[i]);
                  newRow.html(name);
                  restaurauntDiv.append(newRow);
                }
            }                  
          })
        
        $.ajax({
          url: eventbriteURL,
          method: "GET"
          }).then(function(response) {

              console.warn("<------eventbrite results------->");
              console.log(response);

              var localEventsRow = $("#localevents-results");

              for (let i = 0; i < response.events.length; i++){
                var name = response.events[i].name.html;
                
                if (activityEntryValue === "Local-Events" ) {
                  console.log(response.events[i]);
                  localEventsRow.append(name);
                }
              }
          })
          // console.log(resultArray);
      })
    //______________________________________________________
  
  //_______________________________________________________

//________________________________________________________





 