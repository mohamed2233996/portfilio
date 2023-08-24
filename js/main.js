var text = ["Website programmer", "Photoshop Designer"];
var counter = 0;

setInterval(function() {
  document.getElementById("myText").innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}, 2000);


const Message = document.getElementsByClassName("letter-image")
const Message_text =document.getElementsByClassName("message")

function grow(params) {
  Message.addEventListener ('click', active_text)
}


function active_text (Message_text) {
  Message_text.style.display="flex";
}

function myFunction() {
  document.getElementById("message").style.display = "flex";
}