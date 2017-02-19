/* global io */
/* exported sharedVueStuff */
'use strict';

var socket = io();

// Stuff that goes to both diner and kitchen
var sharedVueStuff = {
  data: {
    orders: {},
    menu: {}
  },
  created: function() {
    socket.on('initialize', function(data) {
      this.orders = data.orders;
      this.menu = data.menu;
    }.bind(this));

    socket.on('currentQueue', function(data) {
      this.orders = data;
    }.bind(this));
  }
};