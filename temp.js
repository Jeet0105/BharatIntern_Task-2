function temconvert() {
    var t = document.getElementById("type").value;
    if (t == "celsius") {
        var celsius = parseFloat(document.getElementById("temp").value);
        var fahrenheit = (celsius * 9) / 5 + 32;
        document.getElementById("p1").innerHTML ="Temperature in Fahrenheit is " + fahrenheit + "F";
        var kelvin = celsius + 273.15;
        document.getElementById("p2").innerHTML ="Temperature in Kelvin is " + kelvin + "K";
        var rankine = (celsius * 9) / 5 + 491.67;
        document.getElementById("p3").innerHTML ="Temperature in Rankine is " + rankine + "R";
    } 
    else if (t == "fahrenheit") {
        var fahrenheit = parseFloat(document.getElementById("temp").value);
        var celsius=(fahrenheit-32)*5/9;
        document.getElementById("p1").innerHTML ="Temperature in Celsius is " + celsius + "C";
        var kelvin = celsius + 273.15;
        document.getElementById("p2").innerHTML ="Temperature in Kelvin is " + kelvin + "K";
        var rankine = (celsius * 9) / 5 + 491.67;
        document.getElementById("p3").innerHTML ="Temperature in Rankine is " + rankine + "R";
    } 
    else if(t=="kelvin"){
        var kelvin = parseFloat(document.getElementById("temp").value);
        var celsius = kelvin-273.15;
        document.getElementById("p1").innerHTML ="Temperature in Celsius is " + celsius + "C";
        var fahrenheit = (celsius * 9) / 5 + 32;
        document.getElementById("p2").innerHTML ="Temperature in Fahrenheit is " + fahrenheit + "F";
        var rankine = (celsius * 9) / 5 + 491.67;
        document.getElementById("p3").innerHTML ="Temperature in Rankine is " + rankine + "R";
    }
    else if(t=="rankine"){
        var rankine = parseFloat(document.getElementById("temp").value);
        var celsius =(rankine-491.67)*5/9;
        document.getElementById("p1").innerHTML ="Temperature in Celsius is " + celsius + "C";
        var fahrenheit = (celsius * 9) / 5 + 32;
        document.getElementById("p2").innerHTML ="Temperature in Fahrenheit is " + fahrenheit + "F";
        var kelvin = celsius + 273.15;
        document.getElementById("p3").innerHTML ="Temperature in Kelvin is " + kelvin + "K";
    }
    else{
        alert("Select proper option");
    }
}