/* global sharedVueStuff, Vue, socket */
'use strict';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

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
var orderItems = mainCourse.concat(extras).concat(theRest);
// Finally we make use of socket.io's magic to send the stuff to the kitchen
socket.emit('order', {orderId: getOrderNumber(), orderItems: orderItems});
            }
         }
});

var summary[];

function foodSummary(key){
  for(i = 0; i < common.length ; i++){
     if(common[i].label == key){
        summary.push(common[i]);
        printSummary();
        return;
    }

  }
  for(i=0 ; i < foods.length; i++){
    if(foods[i].label == key){
        summary.push(foods[i]);
        printSummary();
        return;
    }

}       
console.log('Order does not exist');
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

function printSummary()  {
var el1 = document.getElementByID(foodlist);
for(i = 0; i < summary.length; i++){
var order = document.createElement('li');
order.setAttribute('value', summary[i]); 
el1.appendChild(order);

}

/*
var el2 = document.getElementByID(drinklist);
for(i = 0; i < drinks.length; i++){
var drink1 = document.createElement('li');
drink1.setAttribute('value', drinks[i]); 
el2.appendChild(drink1);
}
*/
}



