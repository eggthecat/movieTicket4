$(document).ready(function(){
  $(".tiempo").click(function(event){
    event.preventDefault();
    // $(".prices").show(value);


    var timeValue = parseInt($(".tiempo").val());

    $("input.quantity").click(function(){
      var matineeTicketQuantity = parseInt($("input.quantity").val());

      console.log(this);

    })

 //  $(".matineeQuantity.quantity").on("keyup", function(){
 //   var qty = $(this).val();
 //   var price = 5;
 //   $("#total").html(qty*price);
 // });

    if (this.value < 15){
      $(".regularQuantity").hide();
      $(".matineeQuantity").fadeIn();
    } else if(this.value > 15){
      $(".matineeQuantity").hide();
      $(".regularQuantity").fadeIn();
    }
  })

 $("matinee").click(function(){
   $(".tiempo").toggle();
  })
});
