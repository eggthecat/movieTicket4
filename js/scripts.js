$(document).ready(function(){
  $(".tiempo").click(function(event){
    event.preventDefault();
    // $(".prices").show(value);
    $("#matinee").toggle();
    console.log(this.value);
    var timeValue = parseInt($(".tiempo").val());
    if (this.value < 15){
      $(".matineeQuantity").fadeToggle();
    } else if(this.value > 15){
      $(".matineeQuantity").hide();
      $(".regularQuantity").fadeToggle();
    }
  })

 $("matinee").click(function(){
   $(".tiempo").toggle();
  })
});
