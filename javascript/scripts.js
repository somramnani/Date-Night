
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
 

