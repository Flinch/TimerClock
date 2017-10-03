function start (value) {

	var x =	setInterval(function()
	
	{
	
		document.getElementById("test").innerHTML = value;
	
		value--;
		  		
		$('.stop_button').click(function()
		
		{

			clearInterval(x);
		
		});

		if (value < 0)
		  	
		clearInterval(x);
		  		

		$('.reset_button').click(function()
		
		{

		  	document.getElementById("test").innerHTML = 0;
		  		
		  	clearInterval(x);


		 });

	}, 1000);


}


$(document).ready(function() {
	$('.time_val').keyup(function(){

		var valu = new Array ();
		
		  value = $('.time_val').val();

		  	$('.start_button').click(function(){

		  		start(value);

		  	});
		  
				
	});
   
});



