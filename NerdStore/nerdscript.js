( function( $ )
{
$( document ).ready(function()
{
	var counter = 0;
$('#cssmenu').prepend('<div id="menu-button">Menu</div>');
	$(".container-4").hide();
	$("#title").hide();
	$("#title").delay(500).fadeIn(1000);
	$("#items").hide();
	$("#items").delay(1000).fadeIn();
	counter += 1;
	console.log(counter);
	if(counter > 0)
	{
		$("#items:hover").css({"-o-transition":".5s", "-ms-transition":".5s", "-moz-transition":".5s", "-webkit-transition":".5s","transition":".5s"});
	}
	$(".has-sub-search").click(function ()
	{
		$(".container-4").fadeIn();

	});

	$('#cssmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
});
} )( jQuery );
