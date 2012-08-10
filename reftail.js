$(document).ready(function() {

	function getUrlVars() {
	    var vars = {};
	    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	        vars[key] = value;
	    });
	    return vars;
	}
	ref = getUrlVars()["ref"];
	host = window.location.hostname;
	console.log(ref);
	if (ref !== undefined) {
    	$.ajax({
		  url: "http://reftail.kejsarmakten.se/add",
		  data: {"ref": ref, "host": host},
		  dataType: "jsonp"
		});
	}
    $('.tictail_add_to_cart_button').bind('click', function() {
    	$.ajax({
		  url: "http://reftail.kejsarmakten.se/sell",
		  data: {"ref": ref, "host": host, "title":document.title},
		  dataType: "jsonp"
		});
    });
});
