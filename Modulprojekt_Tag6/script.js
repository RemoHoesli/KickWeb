window.onscroll = function () {"klebrig"};

var box = document.getElementById("box");
var sticky = box.offsetTop;

function klebrig() {
    if (window.scrollY >= sticky) {
      box.classList.add("sticky")
    } else {
      box.classList.remove("sticky");
    }
}

console.log(scrollY);
console.log(box.offsetTop);