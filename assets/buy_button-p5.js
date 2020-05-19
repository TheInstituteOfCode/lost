---
---

//------------ shopify
/*
  {% assign cart = "" %}
 {% capture cart %}
   {% include cart.html %}
 {% endcapture %}
*/
// client details
$(document).ready(function() {

  var client = ShopifyBuy.buildClient({
    domain: 'lostleblanc.myshopify.com',
    storefrontAccessToken: '7e83041cdccf15dc77c69532bc4edbb3',
  });


  var ui = ShopifyBuy.UI.init(client);


  // product details
  ui.createComponent('product', {
    id: 5238372040856,
    node: document.getElementById('button-1'),
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
        },



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
      },
      toggle: {
        iframe: true,
        contents: {
          count: true,
          icon: true,
          title: true,
        },
        templates:{
          title: '<style media="screen">.is-sticky.shopify-buy__cart-toggle{background-color: #99d0d0}</style>',
        }
      },

    }

  });
});
