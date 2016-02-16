$('.btn_right').click(function()
{
  $('.btn_right i').toggleClass('fa-pencil-square-o').toggleClass('fa-times');
   $(".compose-tweet").toggleClass('open');
});

$('#newPost').hide();
