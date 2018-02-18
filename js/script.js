function navega(area,px)
{
	
	if(document.body.clientWidth > 1000)
	{
		$('html, body').animate({
                scrollTop: $("#"+area).offset().top-40
        },
        1500);
		
	}
	else
	{
		$('html, body').animate({
                scrollTop: $("#"+area).offset().top-78
        },
        1500);
		
		
	}
}