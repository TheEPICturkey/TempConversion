function tempConvert(){
  const fahrenheit = window.prompt("Enter the temperature in fahrenheit:");
  const celsius = (fahrenheit - 32) * (5/9);
  const kelvin = celsius + 273.15;
  
  window.alert(
    fahrenheit + "F is " + celsius + "C.\n" + 
    fahrenheit + "F is " + kelvin + "K." 
  )
}

tempConvert();
