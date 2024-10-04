let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let mssg = document.querySelector(".mssg");
let turn = "X";

const checkWinner = () => {
  let L = [];
  L.push(boxes[0].innerText + boxes[1].innerText + boxes[2].innerText);
  L.push(boxes[3].innerText + boxes[4].innerText + boxes[5].innerText);
  L.push(boxes[6].innerText + boxes[7].innerText + boxes[8].innerText);
  L.push(boxes[0].innerText + boxes[4].innerText + boxes[8].innerText);
  L.push(boxes[2].innerText + boxes[4].innerText + boxes[6].innerText);
  L.push(boxes[0].innerText + boxes[3].innerText + boxes[6].innerText);
  L.push(boxes[1].innerText + boxes[4].innerText + boxes[7].innerText);
  L.push(boxes[2].innerText + boxes[5].innerText + boxes[8].innerText);
  if (L.includes("XXX")) {
    mssg.innerText = "X জিতে গেসে";
    mssg.classList.add("mssssssg");
    for (let box of boxes) {
      box.disabled = true;
    }
  } else if (L.includes("OOO")) {
    mssg.innerText = "O জিতে গেসে";
    mssg.classList.add("mssssssg");
    for (let box of boxes) {
      box.disabled = true;
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.innerText = turn;
    turn == "X" ? (turn = "O") : (turn = "X");
    box.disabled = true;
    checkWinner();
  });
});
function resetgame() {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  mssg.innerText = "";
  mssg.classList.remove("mssssssg");
  turn = "X";
}
reset.addEventListener("click", resetgame);
