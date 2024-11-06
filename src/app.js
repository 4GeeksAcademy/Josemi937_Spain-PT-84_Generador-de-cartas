/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};
let suit = ["♦", "♥", "♠", "♣"];
let numbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
let iconTop = document.querySelector("#iconTop");
let numberValue = document.querySelector("#numberValue");
let iconBottom = document.querySelector("#iconBottom");

function generateRandomSuit() {
  return suit[Math.floor(Math.random() * suit.length)];
}

function generateRandomNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function asingSuitAndNumbers() {
  let suit = generateRandomSuit();
  let numbers = generateRandomNumber();

  iconTop.innerText = suit;
  numberValue.innerText = numbers;
  iconBottom.innerText = suit;

  iconTop.style.color = suit === "♦" || suit === "♥" ? "red" : "black";
  iconBottom.style.color = suit === "♦" || suit === "♥" ? "red" : "black";
}

console.log(asingSuitAndNumbers());

const refreshBtn = document.getElementById("btnRefresh");

function handleClick() {
  asingSuitAndNumbers();
}

refreshBtn.addEventListener("click", handleClick);
