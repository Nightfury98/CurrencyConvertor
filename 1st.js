function Currency(){
    y = document.getElementById("curr").value;
    return y;
  }
  
  function Calculate(){
  y = Currency();
  
  x = document.getElementById("amount1").value;
  
  if(x == ""){
    document.getElementById("inr1").value = "";
  }else{
    switch(y){
      case "Dollar":
        document.getElementById("inr1").value = x * 74.16;
      break;
  
      case "Pound":
        document.getElementById("inr1").value = x * 102.80351;
      break;
  
      case "Euro":
        document.getElementById("inr1").value = x * 87.39242;
      break;
  
      case "Yen":
        document.getElementById("inr1").value = x * 0.6792311;
      break;
    }
  }
  }