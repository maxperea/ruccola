/* global sharedVueStuff, Vue, socket */
'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getOrderNumber() {
  // It's probably not a good idea to generate a random order number, client-side. 
  // A better idea would be to let the server decide.
  return "#" + getRandomInt(1, 1000000);
}

new Vue({
  el: '#main',
  mixins: [sharedVueStuff], // include stuff that goes to both diner and kitchen
  methods: {
    placeOrder: function() {
      // create an array of checked items to order
    var orderItems = [].filter.call(document.getElementsByName('food[]'), function(i) {
      return i.checked;
    }).map(function(i) {
      return i.value;
    });
      socket.emit('order', {orderId: getOrderNumber(), orderItems: orderItems});
  }
  }
});
