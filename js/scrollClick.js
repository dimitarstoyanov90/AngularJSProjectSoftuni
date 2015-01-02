//tuk mojesh da si napravish skrola samo 4e ti prelagam da e malko
//inteligentno 
//shte pomislq za variant da tursi shodni headingi
//v momenta sum go napravil pri click da otiva na article
$(document).ready(function() { 
	$("#navigation ul li").click(function() {
		$('html, body').animate({
		    scrollTop: $("article").offset().top
		}, 2000);
	});
});
