$(document).ready(function(){
  $("[data-toggle]").on("click", function(event){
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("open-sidebar");
  });
});