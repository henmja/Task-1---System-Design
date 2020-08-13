var beer, redWine, whiteWine, gt, whiskey, rum;
window.onload = function(){
  
  beer = 6;
  redWine = 10;
  whiteWine = 8;
  gt = 15;
  whiskey = 20;
  rum = 18;


  var today = new Date();
  var hours = today.getHours();
  if (hours > 15 && hours < 18) {
    alert("Happy Hour - Fifty Percent Off!");
    beer /= 2;
    redWine /= 2;
    whiteWine /=2;
    gt /= 2;
    whiskey /= 2;
    rum /= 2;
  }
    document.getElementById('beer').innerHTML = 'Beer ' + beer + '$';
    document.getElementById('redWine').innerHTML = 'Red Wine ' + redWine + '$';
    document.getElementById('whiteWine').innerHTML = 'White Wine ' + whiteWine + '$';
    document.getElementById('gt').innerHTML = 'Gin Tonic ' + gt + '$';
    document.getElementById('whiskey').innerHTML = 'Whiskey ' + whiskey + '$';
    document.getElementById('rum').innerHTML = 'Rum ' + rum + '$';
};
function addToCart() {
  var beerQuantity = document.getElementById("beerQuantity").value;
  if (beerQuantity!='') {
    document.getElementById("beerOut").innerHTML = beerQuantity + 'x ' + 'Beer ' + beerQuantity*beer + '$'; 
  }

  var redWineQuantity = document.getElementById("redWineQuantity").value;
  if (redWineQuantity!='') {
    document.getElementById("redWineOut").innerHTML = redWineQuantity + 'x ' + 'RedWine ' + redWineQuantity*redWine + '$'; 
  }

  var whiteWineQuantity = document.getElementById("whiteWineQuantity").value;
  if (whiteWineQuantity!='') {
    document.getElementById("whiteWineOut").innerHTML = whiteWineQuantity + 'x ' + 'WhiteWine ' + whiteWineQuantity*whiteWine + '$'; 
  }

  var gtQuantity = document.getElementById("gtQuantity").value;
  if (gtQuantity!='') {
    document.getElementById("gtOut").innerHTML = gtQuantity + 'x ' + 'GT ' + gtQuantity*gt + '$'; 
  }

  var whiskeyQuantity = document.getElementById("whiskeyQuantity").value;
  if (whiskeyQuantity!='') {
    document.getElementById("whiskeyOut").innerHTML = whiskeyQuantity + 'x ' + 'Whiskey ' + whiskeyQuantity*whiskey + '$'; 
  }
  var rumQuantity = document.getElementById("rumQuantity").value;
  if (rumQuantity!='') {
    document.getElementById("rumOut").innerHTML = rumQuantity + 'x ' + 'Rum ' + rumQuantity*rum + '$'; 
  }
  var drinks = new Array();
  drinks[0] = document.getElementById("beerOut").innerHTML
  drinks[1] = document.getElementById("redWineOut").innerHTML
  drinks[2] = document.getElementById("whiteWineOut").innerHTML
  drinks[3] = document.getElementById("gtOut").innerHTML
  drinks[4] = document.getElementById("whiskeyOut").innerHTML
  drinks[5] = document.getElementById("rumOut").innerHTML
  var total = 0;
  for (i = 0; i < drinks.length; i++) {
    if (drinks[i].length>0) {
      drink = drinks[i].split(' ');
      strPrice = drink[2].match(/\d+/)[0];
      price = parseInt(strPrice);
    }
    if(typeof price == 'number'){
      total += price;
      price = 0;
      document.getElementById("total").innerHTML = 'Total: ' + total + '$';
    }
}
}

function clearCart() {
  document.getElementById("beerOut").innerHTML = ""; 
  document.getElementById("redWineOut").innerHTML = ""; 
  document.getElementById("whiteWineOut").innerHTML = ""; 
  document.getElementById("gtOut").innerHTML = ""; 
  document.getElementById("whiskeyOut").innerHTML = ""; 
  document.getElementById("rumOut").innerHTML = ""; 
  document.getElementById("total").innerHTML = ""; 
}

function checkout() {
  var purchasedItems = new Array();
  purchasedItems[0] = document.getElementById("beerOut").innerHTML
  purchasedItems[1] = document.getElementById("redWineOut").innerHTML
  purchasedItems[2] = document.getElementById("whiteWineOut").innerHTML
  purchasedItems[3] = document.getElementById("gtOut").innerHTML
  purchasedItems[4] = document.getElementById("whiskeyOut").innerHTML
  purchasedItems[5] = document.getElementById("rumOut").innerHTML
  localStorage.setItem("items",purchasedItems);
  /*localStorage.setItem("beer",document.getElementById("beerOut").innerHTML);
  localStorage.setItem("redWine",document.getElementById("redWineOut").innerHTML);
  localStorage.setItem("whiteWine",document.getElementById("whiteWineOut").innerHTML);
  localStorage.setItem("gt",document.getElementById("gtOut").innerHTML);
  localStorage.setItem("whiskey",document.getElementById("whiskeyOut").innerHTML);
  localStorage.setItem("rum",document.getElementById("rumOut").innerHTML);*/
  window.location.href = 'checkout.html';
}
