let myMenu = document.getElementsByClassName("list")[0];

let myUl = document.getElementsByTagName("ul");

let myli0 = document.getElementsByClassName("links")[0];
let myli1 = document.getElementsByClassName("links")[1];
let myli2 = document.getElementsByClassName("links")[2];

myMenu.onclick = function () {
  myUl[0].classList.toggle(`visible`);
};

myli0.onclick = function () {
  myUl[0].classList.toggle(`visible`);
};
myli1.onclick = function () {
  myUl[0].classList.toggle(`visible`);
};
myli2.onclick = function () {
  myUl[0].classList.toggle(`visible`);
};