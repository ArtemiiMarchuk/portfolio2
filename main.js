/*alert(document.documentElement.clientWidth);*/

$( ".navbar-main .nav-item" ).click(function() {
  $( ".navbar-main .nav-item" ).removeClass( "active" );
  $(this).addClass( "active" );
  $(".navbar-main .navbar-collapse").removeClass( "show" );
});
$( ".aboutus-info-btn").click(function() {
  var show_div = $(this).parent().parent().find("div");
  if(show_div.hasClass("show")){
    $(this).css('border-color', '#505050');
    $(this).parent().find('h3').css('color','#505050');
    $(this).find('svg').attr("stroke", "#505050");
    $(this).find('svg').find('path').attr("d", "M16 2 L16 30 M2 16 L30 16");
  }
  else{
    $(this).css('border-color', '#ff0036');
    $(this).parent().find('h3').css('color','#ff0036');
    $(this).find('svg').attr("stroke", "#ff0036");
    $(this).find('svg').find('path').attr("d", "M2 16 L30 16");
  }
});
$( "#navbarPortfolio .nav-item" ).click(function() {
  $( "#navbarPortfolio .nav-item" ).removeClass( "active" );
  $(this).addClass( "active" );
});
$("*").mouseover(function() {
  var id = $(this).attr('id');
  function menuauto() {
    $( ".navbar-main .nav-item" ).removeClass( "active" );
    $('[href = "#' + id  + '"]').parent().addClass('active');
  }
  var mnuval = ["portfolio", "aboutus", "clients", "team", "services", "maincarousel", "blog","contacts"];
  for(var i = 0; i < mnuval.length; i++){
    if(id == mnuval[i]){
      menuauto();
    }
  }
});
var size = 300,
    newsContent= $('#blog p'),
    newsText = newsContent.text();
if(newsText.length > size){
	newsContent.text(newsText.slice(0, size) + ' ...');
}
$( "#blog .blog-text-button" ).click(function() {
  var p = $(this).parent().find("p");
  if(p.hasClass("hide")){
    p.text(newsText);
    p.removeClass("hide");
    $(this).text("HIDE TEXT");
  }
  else{
    p.text(newsText.slice(0, size) + ' ...');
    p.addClass("hide");
    $(this).text("VIEW TEXT");
  }
});
$( ".load-more-blog-button").click(function() {
    if($(this).hasClass("blog-all-show")){
      $(this).removeClass("blog-all-show");
      $(this).css('transform', 'rotate(0deg)');
    }
    else{
      $(this).addClass("blog-all-show");
      $(this).css('transform', 'rotate(180deg)');
    }
});
