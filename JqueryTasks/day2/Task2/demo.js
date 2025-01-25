$(document).ready(function () { 
  
  $('.gallery img').click(function () { 
    var src = $(this).attr('src'); 
    $('.modal img').css({ opacity: 0 }).attr('src', src).animate({ opacity: 1 }, 500); 
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
    
    
    $('.modal img').animate({ opacity: 0 }, 500, function () { 
      
      $(this).attr('src', newSrc).animate({ opacity: 1 }, 500); 
    }); 
  }); 
  
  
  $('.arrow.right').click(function () { 
    var currentImg = $('.modal img').attr('src'); 
    var currentIndex = $('.gallery img[src="' + currentImg + '"]').index(); 
    var newIndex = (currentIndex + 1) % $('.gallery img').length; 
    var newSrc = $('.gallery img').eq(newIndex).attr('src'); 
    
    
    $('.modal img').animate({ opacity: 0 }, 500, function () { 
      
      $(this).attr('src', newSrc).animate({ opacity: 1 }, 500); 
    }); 
  }); 
  
  
  $('.modal').click(function (e) { 
    if ($(e.target).is('.modal')) { 
      $('.modal').fadeOut(); 
    } 
  }); 
});