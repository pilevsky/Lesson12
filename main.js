let width = 50;
let height = 50;
document.querySelector(".one").onclick = function (event) {
  console.log("d");
  document.querySelector(".one").style.width = width + "px";
  width++;
  document.querySelector(".one").style.height = height + "px";
  height++;
};
let hello = document.querySelector(".Hello").innerHTML;
document.querySelector(".two").ondblclick = function (event) {
  console.log(hello);
};

let img = document.querySelector(".img");
img.onclick = function change() {
  img.src =
    "https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-38-340x340.png";
};

function check(inp) {
  if (typeof inp === "number") {
    return console.log("False");
  } else {
    console.log("True");
  }
}
console.log(check(123));
