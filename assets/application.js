$(document).ready(function() {
$(".fancy-button").on("click", function () {
      $(this).fadeOut(200);
      $(".button-replacement").fadeIn(1000);
});
});
