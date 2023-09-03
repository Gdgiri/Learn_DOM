      function myFunction() {
      var x = document.getElementById("name").value;
      var y = document.getElementById("age").value;
      var a = document.getElementById("district").value;
      var b = document.getElementById("city").value;
      var c=document.getElementById("ot");
      var d=document.getElementById("ou");
      var e=document.getElementById("ov");

      if (y>=18){
        d.innerHTML="You are Eigible!";
        e.innerHTML="press the X to clear";
      }
      else{

          
        c.innerHTML="You are not Eigible!!" ;
        e.innerHTML="press the X to clear";
       
        return x;
      }         

    document.getElementById("op").innerHTML = `Name: ${x}`;

    document.getElementById("oq").innerHTML = `age: ${y}`;

    document.getElementById("or").innerHTML = `district: ${a} `;

    document.getElementById("os").innerHTML = `city: ${b}`;
  }