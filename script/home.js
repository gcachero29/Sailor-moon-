function homepageButton(){

    let text; 
  let person = prompt("Please enter Name");
  if(person == null || person == "") {
      text = "User cancelled the prompt";
  } else {
      text =  "Hello " + person + " Welcome to my page! My name is gabby and this website is about sailor moon characters and my opinion about them. Press a button inside the navbar to explore the page!";
  }
      document.getElementById("text").innerHTML = text;
    }

    mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}