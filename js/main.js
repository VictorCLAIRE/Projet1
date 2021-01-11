function JS(){
    //navPage()
  } 

/** 
document.getElementById("BlockTitre").onclick = function () {getVar()};

function getVar() {
  alert("Bonjour");
}
 
document.getElementById("myTopnav").onclick = function () {navigation()};
function navigation(){
  var x = document.getElementsByClassName("nav")
  if (x.className === "nav"){
    element.classList.add("active")
  }
}
*/

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
}

function navPage() {

  let link = document.getElementsByClassName("nav")
  link.addEventListener("click", function() {
    alert("rfrgr")
  })
}
