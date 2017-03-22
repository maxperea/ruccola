/* global sharedVueStuff, Vue, socket */
'use strict';

var orderNr = 0;

function getOrderNumber() {
  orderNr++;
  return "#" + orderNr;
}

new Vue({
  el: '.ordering',
  mixins: [sharedVueStuff], // include stuff that goes to both diner and kitchen
  data: {
    mainDish: [],
    extras: []
  },
  methods: {
    placeOrder: function() {
      // Here two ways of getting selected items are illustrated
      // 1. The Vue way, notice the data model declarations above
      var mainCourse = this.mainDish;
      var extras = this.extras;
      // 2. The old-school way: create an array with values of checked items
      var theRest = [].filter.call(document.getElementsByName('item[]'), function(i) {
        return i.checked;
      }).map(function(i) {
        return i.value;
      });
      // OK, it's not really neat to use two different ways of accomplishing the same thing
      // but let's pretend it's for an educational purpose ... here comes another no-no:
      //var orderItems = mainCourse.concat(extras).concat(theRest);
      // Finally we make use of socket.io's magic to send the stuff to the kitchen
      var note = document.getElementById("form1").elements[0].value;
      summary.push(note);
      var orderItems = summary;
      summary = [];
      document.getElementById("form1").reset();
      printSummary();
      socket.emit('order', {orderId: getOrderNumber(), orderItems: orderItems});
    }
  }
});

var summary = [];

function foodSummary(key){
  summary.push(key);
  console.log(summary);
  printSummary();
  return;
}


function extraSummary(key){
  for(i = 0; i < sideorders.length ; i++){
    if(sideorders[i].label == key){
      summary.push(sideorders[i]);
      printSummary();
      return;
    }
  }
  console.log('Side order does not exist');
}

function drinkSummary(key){
  for(i = 0; i < commondrinks.length ; i++){
    if(commondrinks[i].label == key){
      summary.push(commondrinks[i]);
      printSummary();
      return;
    }  
    for(i = 0 ; i < drinks.length; i++){
      if(drinks[i].label == key){
        summary.push(drinks[i]);
        printSummary();
        return;
      }

    }
    console.log('Drink does not exist');
  }

}

function printSummary()  {
  //var el1 = document.getElementById(foodlist);
  document.getElementById("foodlist").innerHTML = ' ';
  var i;
  var x = 0;
  for(i = 0; i < summary.length; i++){
    //var order = document.createElement('li');
    //order.setAttribute('value', summary[i]); 
    //el1.appendChild(order);
    var node = document.createElement("LI");                 // Create a <li> node
    node.setAttribute('value', summary[i]); 
    var textnode = document.createTextNode(summary[i]);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("foodlist").appendChild(node);     // Append <li> to <ul> with id="myList"
    x = x + 50;
  }
  var node = document.createElement("LI");                 // Create a <li> node
  node.setAttribute('value', x); 
  var textnode = document.createTextNode("Summa: " + x + ":-");         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("foodlist").appendChild(node);     // Append <li> to <ul> with id="myList"

}

/*
var el2 = document.getElementByID(drinklist);
for(i = 0; i < drinks.length; i++){
var drink1 = document.createElement('li');
drink1.setAttribute('value', drinks[i]); 
el2.appendChild(drink1);
}
*/



