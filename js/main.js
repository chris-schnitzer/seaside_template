/*var clientHeight = $(window).height();
	$('#landing').css('height', clientHeight);*/





/*$(window).scroll(function() {

var header = $("header");
var logo = $("#logo");
var nav = $("#main_navigation");

	if ( $(this).scrollTop() > 100) {
		header.css({
			"background-color" : "#ffffff"
		}),
		logo.css({
			"color" : "#13689F"
		}),
		nav.css("background", 'url("img/menu_blue.svg")');
	}
	else {
		header.css({
			"background-color" : "inherit"
		}),
		logo.css({
			"color" : "#ffffff"
		}),
		nav.css("background", 'url("img/menu_white.svg")');

	}

});*/
$(window).scroll(function() {
	if ($(window).scrollTop() > 100) {
		$('header').addClass('sticky_header');
		$('#logo a').css({ 
			'color' : '#13689F'
		}),
		$('.menu_icon').css("background-color", '#13689f');
	} else {
		$('header').removeClass('sticky_header');
		$('#logo a').css({ 
			'color' : '#ffffff'
		}),
		$('.menu_icon').css("background-color", '#ffffff');
	}

});


/*function open() {
 $('nav').addClass('open_nav');
 $('nav').removeClass('close_nav');
}


function close() {
	$('nav').removeClass('open_nav');
}*/

/*$('.main_navigation').click(function() {
	$('nav').toggleClass('close_nav open_nav'),
	$('#menu_button').toggleClass('.main_navigation .main_nav_open');
});*/
/*if ($( "#mydiv" ).hasClass( "open_" )) {
	alert("open");
}
}*/

/*toogle between functions*/

$('.main_navigation').click(function() {
	$('nav').removeClass('close_nav'),
	$('nav').addClass('open_nav'),
	$('body').css({
		"overflow" : "hidden",
		"position" : "fixed"
	});
});

$('.close_button, nav a').click(function() {
	$('nav').removeClass('open_nav'),
	$('nav').addClass('close_nav'),
	$('body').css({ 
		"overflow" : "scroll",
		"position" : "static" 
	});
});

$('.slider').each(function() {              // For every slider
  var $this   = $(this);                    // Current slider
  var $group  = $this.find('.slide-group'); // Get the slide-group (container)
  var $slides = $this.find('.slide');       // Create jQuery object to hold all slides
  var buttonArray  = [];                    // Create array to hold navigation buttons
  var currentIndex = 0;                     // Hold index number of the current slide
  var timeout;                              // Sets gap between auto-sliding

  function move(newIndex) {          // Creates the slide from old to new one
    var animateUp, slideUp;      // Declare variables

    advance();                       // When slide moves, call advance() again

    // If it is the current slide / animating do nothing
    if ($group.is(':animated') || currentIndex === newIndex) {  
      return;
    }

    buttonArray[currentIndex].removeClass('active'); // Remove class from item
    buttonArray[newIndex].addClass('active');        // Add class to new item

    if (newIndex > currentIndex) {   // If new item > current
      slideUp = '0';            // Sit the new slide to the right
      animateUp = '0';         // Animate the current group to the left
    } else {                         // Otherwise
      slideUp = '0';           // Sit the new slide to the left
      animateUp = '0';          // Animate the current group to the right
    }
    // Position new slide to left (if less) or right (if more) of current
    $slides.eq(newIndex).css( {top: slideUp, display: 'block'} );

    $group.animate( {top: animateUp}, function() {    // Animate slides and
      $slides.eq(currentIndex).css( {display: 'none'} ); // Hide previous slide      
      $slides.eq(newIndex).css( {top: 0} ); // Set position of the new item
      $group.css( {top: 0} );               // Set position of group of slides
      currentIndex = newIndex;               // Set currentIndex to the new image
    });
  }

  function advance() {                     // Used to set 
    clearTimeout(timeout);                 // Clear previous timeout
    timeout = setTimeout(function() {      // Set new timer
      if (currentIndex < ($slides.length - 1)) { // If slide < total slides
        move(currentIndex + 1);            // Move to next slide
      } else {                             // Otherwise
        move(0);                           // Move to the first slide
      }
    }, 4000);                              // Milliseconds timer will wait
  }

  $.each($slides, function(index) {
    // Create a button element for the button
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {    // If index is the current item
      $button.addClass('active');    // Add the active class
    }
    $button.on('click', function() { // Create event handler for the button
      move(index);                   // It calls the move() function
    }).appendTo('.slide-buttons');   // Add to the buttons holder
    buttonArray.push($button);       // Add it to the button array
  });

  advance();                          // Script is set up, advance() to move it


});














