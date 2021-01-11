  function JS(){
  	myFunction();
  	alertTest();
  }





function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
 }

 function alertTest(){
 	alert("Ok pour le js")
 }