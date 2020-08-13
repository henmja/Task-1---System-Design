var name = '';
var table = '';
window.onload = function(){
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
    document.getElementById("fnl").className = 'hidden';
    document.getElementById("lnl").className = 'hidden';
    document.getElementById("ctl").className = 'hidden';
    document.getElementById("cnl").className = 'hidden';
    document.getElementById("cvc").className = 'hidden';
    document.getElementById("fnt").className = 'hidden';
    document.getElementById("lnt").className = 'hidden';
    document.getElementById("ctt").className = 'hidden';
    document.getElementById("cnt").className = 'hidden';
    document.getElementById("cvt").className = 'hidden';
  }
  /*var beer=localStorage.getItem("beer");
  var redWine=localStorage.getItem("redWine");
  var whiteWine=localStorage.getItem("whiteWine");
  var gt=localStorage.getItem("gt");
  var whiskey=localStorage.getItem("whiskey");
  var rum=localStorage.getItem("rum");
  document.getElementById("beer").innerHTML = beer; 
  document.getElementById("redWine").innerHTML = redWine;
  document.getElementById("whiteWine").innerHTML = whiteWine;
  document.getElementById("gt").innerHTML = gt;
  document.getElementById("whiskey").innerHTML = whiskey; 
  document.getElementById("rum").innerHTML = rum;*/
};

function other() {
  document.getElementById("fnl").className = 'hidden';
  document.getElementById("lnl").className = 'hidden';
  document.getElementById("ctl").className = 'hidden';
  document.getElementById("cnl").className = 'hidden';
  document.getElementById("cvc").className = 'hidden';
  document.getElementById("fnt").className = 'hidden';
  document.getElementById("lnt").className = 'hidden';
  document.getElementById("ctt").className = 'hidden';
  document.getElementById("cnt").className = 'hidden';
  document.getElementById("cvt").className = 'hidden';
}

function order() {
  name = document.getElementById("nameIn").value;
  table = document.getElementById("tblIn").value;
  localStorage.setItem("tbl",table);
  window.location.href = 'receipt.html'
}

function creditCard() {
  document.getElementById("fnl").className = '';
  document.getElementById("lnl").className = '';
  document.getElementById("ctl").className = '';
  document.getElementById("cnl").className = '';
  document.getElementById("cvc").className = '';
  document.getElementById("fnt").className = '';
  document.getElementById("lnt").className = '';
  document.getElementById("ctt").className = '';
  document.getElementById("cnt").className = '';
  document.getElementById("cvt").className = '';
}
