---
---
$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle();

	});
	// end hamburger menu

	// This is the pop-up gallery
	// $('.popup-gallery').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'image',
	// 	tLoading: 'Loading image #%curr%...',
	// 	mainClass: 'mfp-img-mobile',
	// 	gallery: {
	// 		enabled: true,
	// 		navigateByImgClick: true,
	// 		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	// 	},
	// 	image: {
	// 		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	// 		titleSrc: function(item) {
	// 			return item.el.attr('title');
	// 		}
	// 	}
	// });

	var allPanels = $('.accordion > dd').hide();

		$('.accordion > dt > a').click(function() {

			allPanels.slideUp();

	    $(this).filter('.open').removeClass('open').addClass('closing')
	    $('.accordion > dt > a').removeClass('open');
	  $(this).not(".closing").addClass('open').parent().next().slideDown();
	    $('.accordion > dt > a').removeClass('closing');

	    return false;
		});
		// end accordian
		// para
		// var images = document.querySelectorAll('.thumbnail');
		// new simpleParallax(images, {
		//     delay: 0.1,
		//     orientation: 'top-down',
		//     scale: 1.1,
		//     overflow: false
		// });
// end section
//function to check if the .cd-image-container is in the viewport here
   // ...

   //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
   $('.cd-image-container').each(function(){
      var actual = $(this);
      drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual);
   });

   //function to upadate images label visibility here
   // ...
});

//draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
function drags(dragElement, resizeElement, container) {
   dragElement.on("mousedown vmousedown", function(e) {
      dragElement.addClass('draggable');
      resizeElement.addClass('resizable');

      var dragWidth = dragElement.outerWidth(),
          xPosition = dragElement.offset().left + dragWidth - e.pageX,
          containerOffset = container.offset().left,
          containerWidth = container.outerWidth(),
          minLeft = containerOffset + 10,
          maxLeft = containerOffset + containerWidth - dragWidth - 10;

      dragElement.parents().on("mousemove vmousemove", function(e) {
         leftValue = e.pageX + xPosition - dragWidth;

         //constrain the draggable element to move inside its container
         if(leftValue < minLeft ) {
            leftValue = minLeft;
         } else if ( leftValue > maxLeft) {
            leftValue = maxLeft;
         }

         widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';

         $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
            $(this).removeClass('draggable');
            resizeElement.removeClass('resizable');
         });

         $('.resizable').css('width', widthValue);

         //function to upadate images label visibility here
         // ...

      }).on("mouseup vmouseup", function(e){
         dragElement.removeClass('draggable');
         resizeElement.removeClass('resizable');
      });
      e.preventDefault();
   }).on("mouseup vmouseup", function(e) {
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
   });

});
