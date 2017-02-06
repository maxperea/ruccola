function docLoaded(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else  {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function indexPageLoaded() {
  displayItems();
}

function sendFunction() {
  for (var i = 0, len = food.length; i < len; i++) {
    var checked = document.getElementById(food[i].name).checked;
    if (checked) {
      console.log(food[i].name);
    }
  }

  var e = document.getElementById("lask");
  var lask = e.options[e.selectedIndex].text;
  console.log(lask);

  var radios = document.getElementsByName('kaffe');

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      // do whatever you want with the checked radio
      console.log(radios[i].value);

      // only one radio can be logically checked, don't check the rest
      break;
    }
  }
}

function displayItems() {
  for (i = 0; i < food.length; i++) {

    var tr = document.getElementById("burgertable");
    var td = document.createElement("td");
    tr.appendChild(td);

    var header = document.createElement("h3");
    var headertext = document.createTextNode(food[i].name);
    header.appendChild(headertext);
    td.appendChild(header);

    var image = document.createElement("img");
    image.setAttribute("src", food[i].img);
    image.setAttribute("height", "200px");
    td.appendChild(image);

    var ul = document.createElement("ul");
    td.appendChild(ul);

    var li = document.createElement("li");
    var kcal = document.createTextNode(food[i].kcal + " kCal.");
    li.appendChild(kcal);
    ul.appendChild(li);

    if (food[i].gluten) {
      var li = document.createElement("li");
      var glut = document.createTextNode("Massa gluten.");
      li.appendChild(glut);
      ul.appendChild(li);
    }

    if (food[i].lactose) {
      var li = document.createElement("li");
      var lact = document.createTextNode("Massa laktos.");
      li.appendChild(lact);
      ul.appendChild(li);
    }

    var form = document.createElement("form");
    form.setAttribute("action","");

    var input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("id",food[i].name);
    input.setAttribute("value",food[i].name);

    form.appendChild(input);
    td.appendChild(form);

  };
}
