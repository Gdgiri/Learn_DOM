
function myFunction() {
  var x = document.getElementById("mySelect").value[0];
    var y = document.getElementById("year").value[2];
    var z = document.getElementById("year").value[3];
    var a = document.getElementById("roll").value;
    var b = document.getElementById("dept").value;
  document.getElementById("op").innerHTML = `${x}${y}${z}${b}${a}`;
}