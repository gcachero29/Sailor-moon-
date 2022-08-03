function homepageButton(){

    let text; 
  let person = prompt("Please enter Name");
  if(person == null || person == "") {
      text = "User cancelled the prompt";
  } else {
      text =  "Hello " + person + " Welcome to my page! My name is gabby and this website are about sailor moon characters and my opinion about them. Press a button inside the navbar to explore the page!";
  }
      document.getElementById("text").innerHTML = text;
    }