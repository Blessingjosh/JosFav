let menu = document.querySelector('#menu')
let navbar = document.querySelector('.navbar')
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topNav").style.top = "0";
  } else {
    document.getElementById("topNav").style.top = "-50px";
  }
}

