const year = new Date();
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

document.getElementById("year").innerText =
  `${year.getDate()} de ${months[year.getMonth()]} del ${year.getFullYear()} `;

function showmenu() {
  var btn = document.getElementById("button_menu");
  var nav = document.getElementsByClassName("main-menu");

  if (nav[0].classList.contains("active")) {
    btn.innerText = "≡" ;
  } else {
    btn.innerText = "x";
  }

  nav[0].classList.toggle("active");
}
