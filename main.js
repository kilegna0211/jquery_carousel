
$(document).ready(function() {

//fonctionnement du carousel
  setInterval(function() {
    $("#carousel ul li:first-child").animate({marginLeft:"-800px",marginTop:250,height:0,opacity:0}, 1400, function() {
      $(this).css("margin-left",0).appendTo("#carousel ul");
      $(this).css("margin-top",0).appendTo("#carousel ul");
      $(this).css("height", 500).appendTo("#carousel ul");
      $(this).css("opacity", 1).appendTo("#carousel ul");
      });
    }, 3000);

// fleche de droite
  $('.flecheright').click(function(){
    $("#carousel ul li:first-child").animate({marginLeft: "-800px"}, 400, function() {
      $(this).css("margin-left", 0).appendTo("#carousel ul");
    });
  });

// fleche de gauche
  $('.flecheleft').click(function(){
    $("#carousel ul li:last-child").insertBefore("#carousel ul li:first-child").animate({});
  });
});
