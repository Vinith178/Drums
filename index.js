
document.querySelectorAll(".drum")[0].addEventListener("click",a1);
document.querySelectorAll(".drum")[1].addEventListener("click",a2);
document.querySelectorAll(".drum")[2].addEventListener("click",a3);
document.querySelectorAll(".drum")[3].addEventListener("click",a4);
document.querySelectorAll(".drum")[4].addEventListener("click",a5);
document.querySelectorAll(".drum")[5].addEventListener("click",a6);



function a1(){
  var audio1 = new Audio("tom-1.mp3");
  audio1.play();
  var butt= this.innerHTML;
  var actbutt=document.querySelector("."+butt);
  actbutt.classList.add("pressed");
  setTimeout(function(){
    actbutt.classList.remove("pressed");
  },100);
}

function a2(){
  var audio2 = new Audio("tom-2.mp3");
  audio2.play();
  var butt= this.innerHTML;
  var actbutt=document.querySelector("."+butt);
  actbutt.classList.add("pressed");
  setTimeout(function(){
    actbutt.classList.remove("pressed");
  },100);
}

function a3(){
  var audio3 = new Audio("tom-3.mp3");
  audio3.play();
  var butt= this.innerHTML;
  var actbutt=document.querySelector("."+butt);
  actbutt.classList.add("pressed");
  setTimeout(function(){
    actbutt.classList.remove("pressed");
  },100);
}

function a4(){
  var audio4 = new Audio("snare.mp3");
  audio4.play();
  var butt= this.innerHTML;
  var actbutt=document.querySelector("."+butt);
  actbutt.classList.add("pressed");
  setTimeout(function(){
    actbutt.classList.remove("pressed");
  },100);
}

function a5(){
  var audio5 = new Audio("kick-bass.mp3");
  audio5.play();
  var butt= this.innerHTML;
  var actbutt=document.querySelector("."+butt);
  actbutt.classList.add("pressed");
  setTimeout(function(){
    actbutt.classList.remove("pressed");
  },100);
}

function a6(){
  var audio6 = new Audio("crash.mp3");
  audio6.play();
  var butt= this.innerHTML;
  var actbutt=document.querySelector("."+butt);
  actbutt.classList.add("pressed");
  setTimeout(function(){
    actbutt.classList.remove("pressed");
  },100);
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  btnAnimation(event.key);
});


function makeSound(key){
  switch (key) {
    case 'v':
      var audio=new Audio("tom-1.mp3");
      audio.play();
      break;

    case 'i':
      var audio=new Audio("snare.mp3");
      audio.play();
      break;


    case 'n':
      var audio=new Audio("tom-3.mp3");
      audio.play();
      break;

    case 't':
      var audio=new Audio("kick-bass.mp3");
      audio.play();
      break;


    case 'h':
      var audio=new Audio("crash.mp3");
      audio.play();
      break;

    default:

  }
}


function btnAnimation(crrkey){
  var actbutt=document.querySelector("."+crrkey);
  actbutt.classList.add("pressed");
  setTimeout(function(){
    actbutt.classList.remove("pressed");
  },100);
}
