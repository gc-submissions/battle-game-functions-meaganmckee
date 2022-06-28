"use strict";

// TODO - write your code here.

const randomDamage = () => Math.floor(Math.random() * 10 + 1); // we removed {} and return

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2; //ternary opperator
};

const attackPlayer = function (health) {
  return (health -= randomDamage());
};

const logHealth = (player, health) => {
  return `${player} health: ${health}`;
};
// console.log(logHealth("Tarzan", 20));

const logDeath = (winner, loser) => {
  return `${winner} defeated ${loser}`;
};

console.log(logDeath());
