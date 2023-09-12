let limit = 4;
let limito = 4;

//Menampilkan Makanan
function GetMk() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      const cek = data.data.makanan;
      const Data = data.data.makanan.slice(0, limit);
      let card = "";
      Data.forEach((element) => (card += makanan(element)));
      const menu = document.querySelectorAll(".container");
      const add = (menu[0].innerHTML = card);
      if (limit >= cek.length) {
        tombolOne[0].style.display = "none";
      }
    })
    .catch((error) => console.log(error));
}

//Menampilkan Minuman
function GetMn() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      const cek = data.data.minuman;
      const DataOne = data.data.minuman.slice(0, limito);
      let cardOne = "";
      DataOne.forEach((element) => (cardOne += makanan(element)));
      const menu = document.querySelectorAll(".container");
      const addOne = (menu[1].innerHTML = cardOne);
      if (limito >= cek.length) {
        tombolOne[1].style.display = "none";
      }
    })
    .catch((error) => console.log(error));
}

function makanan(element) {
  return `<div class="makanan">
    <div class="gambar">
      <img src="image/${element.image}" alt="" />
    </div>
    <div class="info">
      <h4><em>${element.nama}</em></h4>
      <p>Rp: ${element.harga}</p>
    </div>
  </div>`;
}

GetMk();
GetMn();

const menu = document.querySelector(".bx-menu");
const box = document.querySelector("nav ul");
const tombolOne = document.querySelectorAll(".tombol");
const tombol = document.getElementsByTagName("button");

tombol[0].addEventListener("click", () => {
  limit += 4;
  GetMk();
});

tombol[1].addEventListener("click", () => {
  limito += 4;
  GetMn();
});

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  box.classList.toggle("geser");
});

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("geser");
        document
          .querySelector("nav ul li a[href*=" + id + "]")
          .classList.add("geser");
      });
    }
  });
  /*==================== sticky navbar ====================*/

  let header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menu.classList.remove("bx-x");
  box.classList.remove("geser");
};

/*==================== typed js ====================*/
function typing(selec, ...text) {
  const typed = new Typed(selec, {
    strings: text,
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 5000,
    loop: true,
  });
  return typed;
}

typing(".multiple-text", "TUPAI", "SQUIREL");
typing(".copy", "CopyRight By: Ismail @2023");
