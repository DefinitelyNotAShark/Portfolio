var video = document.getElementById("myVideo"); //To create the video element.
video.loop = true;

function LoopVideo() {
  this.load();
  this.play();
}

function CreateResponsiveNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
