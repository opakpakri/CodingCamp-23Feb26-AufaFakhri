function askName() {
  const userNameElement = document.getElementById("user-name");

  if (!userNameElement) return;

  let name = prompt("Halo! Siapa nama Anda?", "");

  if (name === "" || name === null) {
    userNameElement.innerText = "Guest";
  } else {
    userNameElement.innerText = name;
  }
}

window.onload = askName;

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

const form = document.getElementById("message-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("input-nama").value;
    const tanggal = document.getElementById("input-tanggal").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const pesan = document.getElementById("input-pesan").value;

    if (!nama || !tanggal || !gender || !pesan) {
      alert("Error: Mohon lengkapi semua data form!");
      return;
    }

    const now = new Date();
    const timeString = now.toString().split(" GMT")[0] + " WIB";

    const content = document.getElementById("review-content");
    if (content) {
      content.style.display = "block";
    }

    document.getElementById("res-time").innerText = timeString;
    document.getElementById("res-nama").innerText = nama;
    document.getElementById("res-tanggal").innerText = tanggal;
    document.getElementById("res-gender").innerText = gender.value;
    document.getElementById("res-pesan").innerText = pesan;

    form.reset();
  });
}
