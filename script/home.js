function myFunction(){

    let text; 
  let person = prompt (Please enter Name);
  if(person == null || person == "") {
      text = "User cancelled the prompt";
  } else {
      text =  "Hello" + person;
  }
      document.getElementById("demo").innerHTML = text;
    }