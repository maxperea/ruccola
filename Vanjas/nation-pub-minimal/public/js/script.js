function docLoaded(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


function submitFunc(){
for (i = 0; i < food.length; i++) {
    var checked = document.getElementById(food[i].name).checked;
    if (checked) {
      console.log(food[i].name);
    }
  }
  var beer = document.getElementById("beer");
  var selected = beer.options[beer.selectedIndex].text;
  console.log(selected);
    
  var soda = document.getElementById("soda");
  var selected = soda.options[soda.selectedIndex].text;
  console.log(selected);

  var coffee = document.getElementsByName('coffee');
  for (var i = 0; i < coffee.length; i++) {
    if (coffee[i].checked) {
      console.log(coffee[i].value);
    }
  }
}


function displayItems() {
 for (i = 0; i < food.length; i++) {
    
     /* Add name for product */
    var elName = document.getElementById("name");
    var th = document.createElement("th");
    var txtName = document.createTextNode(food[i].name); 
    th.appendChild(txtName);
    elName.appendChild(th);
     
    /* Add picture for product */ 
    var elPic = document.getElementById("pic");
    var tdPic = document.createElement("td");
    var pic = document.createElement("img");
    pic.setAttribute("src", food[i].img);
    pic.setAttribute("width", 300);
    pic.setAttribute("height", 200);
    tdPic.appendChild(pic);
    elPic.appendChild(tdPic);
    
    /* Create info-list for product */
    var elInfo = document.getElementById("info");
    var tdInfo = document.createElement("td");
    var ul = document.createElement("ul");
     
    /* Add info (price) for product */ 
    var luPrice = document.createElement("lu");
    var price = document.createTextNode("Pris : " + food[i].price + " kr")
    luPrice.appendChild(price); 
    ul.appendChild(luPrice);
    
     /* Add info (lactose) for product */
    if (food[i].lactose) {
        var liLact = document.createElement("li");
        var lact = document.createTextNode("Innehåller laktos");
        liLact.appendChild(lact);
        ul.appendChild(liLact);
        } 
     
    /* Add info (gluten) for product */ 
    if (food[i].gluten) {
        var liGlu = document.createElement("li");
        var glu = document.createTextNode("Innehåller gluten");
        liGlu.appendChild(glu);
        ul.appendChild(liGlu);
        }  
    
    /* Add all info for product */ 
    tdInfo.appendChild(ul);
    elInfo.appendChild(tdInfo);
    
    /* Make order */ 
    var order = document.getElementById("order");
    var input = document.createElement("input");
    var txtOrder = document.createTextNode(food[i].name + ": ");
    var br = document.createElement("br");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", food[i].name);
    input.setAttribute("value", food[i].name);
    input.setAttribute("name", "itemlol");
    order.appendChild(txtOrder);
    order.appendChild(input);
    order.appendChild(br);
    }
}

function indexPageLoaded() {
    displayItems();
}
