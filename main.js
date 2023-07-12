let c = [];
let d = new Set(c);
d.add("e");
d.add("r");
d.add("i");
d.add("k");
d.add("t");
d.add("h");
d.add("e");
d.add("b");
d.add("e");
d.add("s");
d.add("t");
console.log(d);

let input = document.querySelector(".inp");
let btn1 = document.querySelector(".btn1");
let div = document.querySelector(".div");
btn1.onclick = function () {
  let inp = input.value;
  console.log(d.has(inp));
  if (d.has(inp) === false) {
    d.add(inp);
    console.log(d);
    div.innerHTML = `<h2> True </h2>`;
  } else {
    div.innerHTML = `<h2> False </h2>`;
  }
};

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let b = [];
let arr = Array.from(a);
for (let key of arr) {
  if (arr[key] >= 5) {
    b.push(arr[key]);
  }
}
console.log(b);
