"use strict";

$('label').click(function () {
  $(this).toggleClass('blueColor');
});
$('.my-x').click(function () {
  $('.screen--1').fadeOut(100);
  setTimeout(function () {
    $('footer').toggleClass("fixed-bottom");
    $('.screen--2').fadeIn(100);
  }, 100);
  setTimeout(function () {
    $('.loader').fadeOut(300);
    $('.myImg').fadeIn(300);
  }, 3000);
  setTimeout(function () {
    $('footer').toggleClass("fixed-bottom");
    $('.screen--2').fadeOut(100);
    $('.screen--3').fadeIn(100);
    $('.loader').fadeIn(300);
    $('.myImg').fadeOut(300);
  }, 4450);
});
$('.my-y').click(function () {
  $('.screen--3').fadeOut(100);
  setTimeout(function () {
    $('.screen--4').fadeIn(100);
  }, 200);
});
$('#question-1').click(function () {
  setTimeout(function () {
    $('.question-one').fadeOut(300);
  }, 1000);
  setTimeout(function () {
    $('.question-two').fadeIn(300);
  }, 1000);
});
$('.question-2').click(function () {
  setTimeout(function () {
    $('.question-two').fadeOut(300);
  }, 1000);
  setTimeout(function () {
    $('.question-three').fadeIn(300);
  }, 1000);
});
$('#question-1s').click(function () {
  setTimeout(function () {
    $('#question-1s').fadeOut(300);
    $('#question-1s-label').fadeOut(300);
    $('#error-message').fadeIn(300);
  }, 500);
});
$('#error-message').click(function () {
  setTimeout(function () {
    $('#error-message').fadeOut(300);
  }, 500);
  setTimeout(function () {
    $('#question-1s-label').fadeIn(300);
    $('#question-1s').fadeIn(300);
  }, 500);
});
$('.question-3').click(function () {
  setTimeout(function () {
    $('.screen--4').fadeOut(300);
  }, 1000);
  setTimeout(function () {
    $('.screen--5').fadeIn(300);
    $('footer').toggleClass("fixed-bottom");
  }, 1000);
  setTimeout(function () {
    $('.loader').fadeOut(300);
    $('.myImg').fadeIn(300);
  }, 3000);
  setTimeout(function () {
    $('footer').toggleClass("fixed-bottom");
    $('.screen--5').fadeOut(100);
    $('.screen--6').fadeIn(1000);
  }, 4450);
});