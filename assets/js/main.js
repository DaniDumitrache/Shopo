$(document).ready(function () {
  $("#OpenMenu").click(function () {
    if ($(".navbar").attr("class").match("NavActive")) {
      $(".navbar").removeClass("NavActive");

      $("body").css("overflow", "initial");
    } else {
      $(".navbar").addClass("NavActive");
      $("body").css("overflow", "hidden");
    }
  });
});
