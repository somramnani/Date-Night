
//__________________________________________________________
//GLOBAL VARIABLES
//__________________________________________________________

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
  //Price Button On-Click Functions
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
        var yelpURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + addressInput + "&limit=4";
        
        var eventSearchURL = "https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=" + addressInput + "&expand=ticket_classes&token=QHHRQKYP5TZBK3NVPHD2";
        
        let placesAPIKey = "AIzaSyBXO-BuPfu7ZFeL1Cebncm3ojSMaIbNFk0";
        let placesURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=theaters+in+" + addressInput + "&key=" + placesAPIKey;
      //______________________________________________________
      
      //______________________________________________________
      //API'S AJAX REQUEST
      //______________________________________________________

        // YELP API
        $.ajax({
          url: yelpURL,
          headers: {
            'Authorization': 'Bearer ' + yelpAPIKey,    
          },
          method: "GET",
            dataType: 'json' 

          }).then(function(response) {
              console.warn("<--------yelp results----->");
              console.log(response);

              for(i = 0; i < 4; i++){
                
                var restaurantDiv = $(".rest-result");
             
                // API information stored into variables
                var price = response.businesses[i].price;
                var image = response.businesses[i].image_url;
                var webURL = response.businesses[i].url;
                var name = response.businesses[i].name;
                var rating = response.businesses[i].rating;

                // If the user clicks price, and restaraunts display the specific budget and Restaurants.
                if (priceEntryValue === price  && activityEntryValue === "Restaurants") {
                  console.log(response.businesses[i]);

                var restCol = $("<div>").addClass("col-md-4");
                var restCardContainer = $("<div>").addClass("card m-2").attr("style", "width: 18rem");
                var restCardImg = $("<img>").addClass("card-img-top").attr("alt", "image").attr("src", image);
                var restCardBody = $("<div>").addClass("card-body");
                var restCardTitle = $("<h5>").addClass("card-header").html(name);
                var restCardText = $("<p>").addClass("card-text font-weight-light mx-2").text("Address:");
                var restCardList = $("<ul>").addClass("list-group list-group-flush");
                var restCardListItem = $("<li>").addClass("list-group-item").html("User Rating: " + rating);
                var restCardListItem2 = $("<li>").addClass("list-group-item").html("Price Range: " + price);
                var restCardLink = $("<a>").addClass("btn btn-primary").html("Visit Us Online").attr("src", webURL);

                var restResultCard = restCardContainer.append(restCardImg,restCardBody,restCardTitle,restCardText,restCardList,restCardListItem,restCardListItem2,restCardLink);
                restaurantDiv.append(restCol);
                restCol.append(restResultCard);
              }
            }
          })

          // Eventbrite API
          $.ajax({
            url: eventSearchURL,
            method: "GET"
            }).then(function(response) {

              console.warn("<------eventbrite results------->");
              console.log(response);

              var localEventView = $(".local-result");

              for (let i = 0; i < 2; i++) {

                var eventName = response.events[i].name.text;
                var eventPic = response.events[i].logo.original.url;
                var eventDescription = response.events[i].description.text;

              if (priceEntryValue === price && activityEntryValue === "Local-Events") {

                var eventCol = $("<div>").addClass("col-md-4");
                var eventCardContainer = $("<div>").addClass("card m-2").attr("style", "width: 18rem");
                var eventCardImg = $("<img>").addClass("card-img-top").attr("alt", "image").attr("src", eventPic);
                var eventCardBody = $("<div>").addClass("card-body");
                var eventCardTitle = $("<h5>").addClass("card-header").html(eventName);
                var eventCardText = $("<p>").addClass("card-text font-weight-light mx-2").html("Address:");
                var eventCardList = $("<ul>").addClass("list-group list-group-flush");
                var eventCardListItem = $("<li>").addClass("list-group-item").html("Description: " + eventDescription);
                var eventCardLink = $("<a>").addClass("card-link").html("Visit Online At: " + "<strong>" + "www.whatever.com" + "</strong>");

                var eventResultCard = eventCardContainer.append(eventCardImg,eventCardBody,eventCardTitle,eventCardText,eventCardList,eventCardListItem,eventCardLink);

              localEventView.append(eventCol);
              eventCol.append(eventResultCard);
            }
          }
        })
          
          // Google Places API
          $.ajax({
            url: placesURL,
            method: "GET"
          }).then(function(response) {
            console.warn('----google places-----')
            console.log(response);

            var movieTheatersRow = $(".theater-results");

            if (activityEntryValue === "Theatres") {

            for(i = 0; i < 5; i++) {
              console.log('theater name: ' + response.results[i].name);
              console.log('street address: ' + response.results[i].formatted_address);
              console.log('user rating: ' + response.results[i].rating);

              var theaterName = response.results[i].name;
              var theaterAddress = response.results[i].formatted_address;
              var theaterRating = response.results[i].rating;
              var theaterThumbnail = "/Users/brentabruzese/Dropbox/Date-Night/images/cinema.png";

              var theaterCol = ("<div>").addClass("col-md-4");
              var cardContainer = $("<div>").addClass("card m-2").attr("style", "width: 16rem");
              var cardImg = $("<img>").addClass("card-img-top").attr("alt", "image").attr("src", theaterThumbnail);
              var cardBody = $("<div>").addClass("card-body");
              var cardTitle = $("<h5>").addClass("card-header").html(theaterName);
              var cardText = $("<p>").addClass("card-text font-weight-light mx-2").html("Address: " + theaterAddress);
              var cardList = $("<ul>").addClass("list-group list-group-flush");
              var cardListItem = $("<li>").addClass("list-group-item").html("Theater Rating: " + "<strong>" + theaterRating + "</strong>");
              var cardLink = $("<a>").addClass("card-link").html("Visit Online At: " + "<strong>" + "www.whatever.com" + "</strong>");

              var movieResultCard = cardContainer.append(cardImg,cardBody,cardTitle,cardText,cardList,cardListItem,cardLink);

              movieTheatersRow.append(theaterCol);
              theaterCol.append(movieResultCard);
            }
          }
        })
      })


  
    //______________________________________________________
      
  //______________________________________________________
      
//______________________________________________________


