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