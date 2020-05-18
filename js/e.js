$('label').click(function(){
  $(this).toggleClass('blueColor');
})

$('.my-x').click (function(){
  $('.screen--1').fadeOut(100);
  setTimeout(() => {
    $('footer').toggleClass("fixed-bottom");
    $('.screen--2').fadeIn(1000);
  }, 100);
  setTimeout(
    function(){
      $('.screen--2 .loader').fadeOut(180);
      $('.screen--2').addClass('well');
    },3000
  );
  
  setTimeout(() => {
    $('.screen--2').fadeOut(100);
    $('footer').toggleClass("fixed-bottom");
    $('.screen--3').fadeIn(1000);
  },4450)
})
$('.my-y').click (function(){
  $('.screen--3').fadeOut(200);
  setTimeout(() => {
    $('.screen--4').fadeIn(1000);
  }, 200);
})



  $('.question-one .label , .question-two label ').click(function(){
    var current = $(this).parents('.question'),
        next    = $(this).parents('.question').next();
 
        setTimeout(function(){
          current.fadeOut(300);
        },1000);
 
        setTimeout(function(){
          next.fadeIn(500);
        },1000);
 });

 $('.question-one #question-1s-label').click(function(){

      setTimeout(function(){
        $('#question-1s-label').fadeOut(300);
        $('#question-1s').fadeOut(300);
      },1000);

      setTimeout(function(){
        $('#error-message').toggleClass('hidden');
      },1000);
});

 $('#error-message').click(function(){
      setTimeout(
          function(){
            $('#error-message').toggleClass('hidden');
            $('#question-1s-label').fadeIn(300);
            $('#question-1s').fadeIn(300);
          }, 500
      );
  });

$('.question-three label').click(function(){
  setTimeout(
      function(){
        $('.screen--4').fadeOut(200);
        $('footer').toggleClass("fixed-bottom");
      }, 300
  );
  setTimeout(
    function(){
      $('.screen--5').fadeIn(1000);
    }, 500
  );
  setTimeout(
    function(){
      $('.screen--5 .loader').fadeOut(180);
      $('.screen--5').addClass('play'); 
    },3300
  );
  setTimeout(
    function(){
      $('footer').toggleClass("fixed-bottom");
      $('.screen--5').fadeOut(100);
      $('.screen--6').fadeIn(1000);
    }, 6000
  );
});




