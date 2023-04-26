// ICONS CALLBACK
feather.replace();

// SVGs
$('#svgDribbble').load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/373860/references.html #dribbble');
$('#svgTwitter').load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/373860/references.html #twitter');
$('#svgHicon').load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/373860/references.html #hicon');

// NEW CODE HERE

// Variables
var btnSz = 200;
var c = 0;
var bezierEasing = 'cubic-bezier(.69,-0.49,0,1)';
var t1 = 299;
var t2 = 1198;

var bZ2 = 'cubic-bezier(.46,.56,0,.88)'

$('#mainWrap').on('click', function() {
  c++;
  console.log(c);
  
  // Lock
  $('.lock').addClass('lock-on');
  setTimeout(function() {
    $('.lock').removeClass('lock-on');
  }, 1200);
  
  // Wave
  $('.wave').addClass('wave-act');
  setTimeout(function() {
    $('.wave').removeClass('wave-act');
  }, 1000);

  // Move Button
  setTimeout(function() {
    $('#btn').transition({
      x: '+=10px'
    }, 289, bZ2, function() {
      $('#btn').transition({
        x: '0px'
      }, 289, bZ2);
    }); 
  }, 399);


  // Move Content
  setTimeout(function() {
    if (c <= 2) {
      $('#content').transition({
        x: '+=220px'
      }, t1, bezierEasing, function() {
        $('#content').transition({
          x: '-=20'
        }, 699, 'cubic-bezier(.25,.49,.2,1)');
      });

    } else if (c == 3) {
      $('#content').transition({
        x: '+=220px'
      }, t1, bezierEasing, function() {
        $('#content').transition({
          x: '-=20'
        }, 699, 'cubic-bezier(.25,.49,.2,1)');
      });
      setTimeout(function() {
        $('.cnt-1').css('order', '4');
        $('#content').transition({
          x: '0'
        }, 0);
      }, t2);
    } else if (c == 4) {
      $('#content').transition({
        x: '+=220px'
      }, t1, bezierEasing, function() {
        $('#content').transition({
          x: '-=20'
        }, 699, 'cubic-bezier(.25,.49,.2,1)');
      });
      setTimeout(function() {
        $('#content').transition({
          x: '0'
        }, 0);
        $('.cnt-1').css('order', '0');
      }, t2);
      c = 0;
    } 
  }, 399)


});
// Code Acknowledgement Cosimo Scarpa
