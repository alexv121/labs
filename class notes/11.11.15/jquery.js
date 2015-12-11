/*$.GET()used to get information from a source*/
$function(){
	$.ajax("GET","https://www.reddit.com/r/aww/.json",function(response){
		console.log(response.kind);
	});$
};

/*$('#register').on('submit', function(e){
	e.preventDefault();
	var details = $('#register').serialize();
$.post('register.php', details, function(data) {
$('#register').html(data);
});*/
