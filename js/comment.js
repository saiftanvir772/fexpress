//for comment 
$('#save').click(function(){
	var name = $('#comName').val();
	var content = $('#text').val();

	$('dl').append("<dt><h3>"+name+"</h3></dt> <br>"+"<dt><p> &nbsp; &nbsp; &nbsp;"+content+" </p></dt><hr>");
	
})