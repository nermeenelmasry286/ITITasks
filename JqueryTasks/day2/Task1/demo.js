$(document).ready(function () {

  
  $('.gallery img').click(function () {
    var src = $(this).attr('src');

  
    if (!$('.modal img').length) {
      $('.modal').append('<img src="" alt="Modal Image">');
    }

    
    $('.modal img').css({ left: '100%' }).attr('src', src).animate({ left: '20%' }, 500);
    $('.modal').fadeIn();
  });

  
  $('.close').click(function () {
    $('.modal').fadeOut();
  });

  
  $('.arrow.left').click(function () {
    var currentImg = $('.modal img').attr('src');
    var currentIndex = $('.gallery img[src="' + currentImg + '"]').index();
    var newIndex = (currentIndex - 1 + $('.gallery img').length) % $('.gallery img').length;
    var newSrc = $('.gallery img').eq(newIndex).attr('src');
    $('.modal img').animate({ left: '100%' }, 500, function () {
      $(this).css({ left: '-100%' }).attr('src', newSrc).animate({ left: '20%' }, 500);
    });
  });

  
  $('.arrow.right').click(function () {
    var currentImg = $('.modal img').attr('src');
    var currentIndex = $('.gallery img[src="' + currentImg + '"]').index();
    var newIndex = (currentIndex + 1) % $('.gallery img').length;
    var newSrc = $('.gallery img').eq(newIndex).attr('src');
    $('.modal img').animate({ left: '-100%' }, 500, function () {
      $(this).css({ left: '100%' }).attr('src', newSrc).animate({ left: '20%' }, 500);
    });
  });

  
  $('.modal').click(function (e) {
    if ($(e.target).is('.modal')) {
      $('.modal').fadeOut();
    }
  });
});