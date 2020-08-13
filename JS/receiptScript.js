window.onload = function(){
    var table=localStorage.getItem("tbl");
    document.getElementById('recHeader').innerHTML = 'Thank you for your order, ' + name + '. Your order for table ' + table + ' has been confirmed!';
    var items=localStorage.getItem("items");
    purchasedItems = items.split(',');
    document.getElementById("beer").innerHTML = purchasedItems[0]; 
    document.getElementById("redWine").innerHTML = purchasedItems[1];
    document.getElementById("whiteWine").innerHTML = purchasedItems[2];
    document.getElementById("gt").innerHTML = purchasedItems[3];
    document.getElementById("whiskey").innerHTML = purchasedItems[4];
    document.getElementById("rum").innerHTML = purchasedItems[5];
    var total = 0;
  for (i = 0; i < purchasedItems.length; i++) {
    if (purchasedItems[i].length>0) {
      purchasedItem = purchasedItems[i].split(' ');
      strPrice = purchasedItem[2].match(/\d+/)[0];
      price = parseInt(strPrice);
    }
    if(typeof price == 'number'){
      total += price;
      price = 0;
      document.getElementById("total").innerHTML = 'Total: ' + total + '$';
    }
}
    

};