window.onload = function () {
    document.addEventListener("scroll", miniFunktion);       
}

const wort = document.getElementById("wort");
const offset = wort.offsetTop;

function miniFunktion() {
    if (window.scrollY >= offset) {
      wort.classList.add("sticky")
    } else {
      wort.classList.remove("sticky");
    }
}

console.log(scrollY);
console.log(box.offsetTop);