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
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});

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

		//------------ shopify
		/*
			{% assign cart = "" %}
		 {% capture cart %}
			 {% include cart.html %}
		 {% endcapture %}
		*/
		// client details
		var client = ShopifyBuy.buildClient({
		  domain: 'swinkels-test-1.myshopify.com',
		  storefrontAccessToken: '0c87504f50f66b6f7c68f1a68e803912', // previously apiKey, now deprecated
		});


		var ui = ShopifyBuy.UI.init(client);


		// product details
		ui.createComponent('product', {
			id: 4531514441800,
			node: document.getElementById('my-product-1'),
			options: {
				product: {
					iframe: false,
					text: { button: 'Enroll Now'},
					buttonDestination: 'cart',
					contents: {
						img: false,
						imgWithCarousel: false,
						title: false,
						variantTitle: false,
						price: false,
						unitPrice: false,
						options: false,
						quantity: false,
						quantityIncrement: false,
						quantityDecrement: false,
						quantityInput: false,
						button: true,
						buttonWithQuantity: false,
						description: false,
					},
					templates:{
						button: '{% raw %}<div class="{{data.classes.product.buttonWrapper}}" data-element="product.buttonWrapper"><button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="button {{data.classes.product.button}} {{data.buttonClass}}" data-element="product.button">{{data.buttonText}}</button></div>{% endraw %}'
					}
				},
				cart: {
					iframe: true,
					startOpen: false,
					popup: false,
					contents: {
						title: true,
						lineItems: true,
						footer: false,
						note: false,
						discounts: false,
					},
					templates:{
						lineItems: '{{ cart | strip_newlines }}',
						close: "X",
					}
				}

			}

		});



// end section

});
