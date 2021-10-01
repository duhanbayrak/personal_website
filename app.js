$(document).ready(function () {
    $("#hamburger-icon").click(function () {
      $("ul").toggleClass("show");
    });
    $(".navbar-link").click(function () {
      $("ul").toggleClass("show");
    });

    let options = {
      startAngle: -1.55,
      size: 150,
      value: 0.85,
      fill: {gradient: ['#e84545', '#e84545']}
    };
    $(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function(event, progress, stepValue){
      $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
    });
    $(".html .bar").circleProgress({
      value: 0.80
    });
    $(".css .bar").circleProgress({
      value: 0.70
    });
    $(".js .bar").circleProgress({
      value: 0.60
    });
    $(".bootstrap .bar").circleProgress({
      value: 0.40
    });
    $(".vue .bar").circleProgress({
      value: 0.30
    });
    $(".res .bar").circleProgress({
      value: 0.70
    });
  });
