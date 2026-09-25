function covertTemp() {
let degree=parseFloat(document.getElementById('input').value);
let unitFrom=document.getElementById("unit-from").value;
let unitTo=document.getElementById("unit-to").value;
let result;

  if (unitFrom === unitTo) {
    result = degree;
  } else if (unitFrom === "C" && unitTo === "F") {
    result = (degree * 9/5) + 32;
  } else if (unitFrom === "C" && unitTo === "K") {
    result = degree + 273.15;
  } else if (unitFrom === "F" && unitTo === "C") {
    result = (degree - 32) * 5/9;
  } else if (unitFrom === "F" && unitTo === "K") {
    result = (degree - 32) * 5/9 + 273.15;
  } else if (unitFrom === "K" && unitTo === "C") {
    result = degree - 273.15;
  } else if (unitFrom === "K" && unitTo === "F") {
    result = (degree - 273.15) * 9/5 + 32;
  }


  document.getElementById('output').innerText=Math.round(result *100)/100;
  document.getElementById('outputUnit').innerText= `°${unitTo}`

}

 