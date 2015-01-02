$( document ).ready(function() {
	$("#navigation ul li").mouseenter(function() {

 		$('.secondary').css({'display':'block', "height": "auto"});
 		$(".banner").css({"height":"300px"});
 		var articleHeading = $(this).html();
 		var innerText =  $("h1:contains('" + articleHeading + "')");
 		$(".banner h2").html(innerText);
	});

	$("header").mouseleave(function() {
 		$('.secondary').css({'display':'none'});
 		$(".banner h2").html("");
 		$(".banner").css({"height":"	0px"});

	});
});