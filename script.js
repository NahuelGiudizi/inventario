"use strict";
const loggerHtml = document.getElementById("LOGGER");
const stockDiscosAmolar = document.getElementById("stockDiscosAmolar");
const stockDiscosOrbitar = document.getElementById("stockDiscosOrbitar");
const inputDiscosAmolar = document.getElementById("inputDiscosAmolar");
const inputDiscosOrbitar = document.getElementById("inputDiscosOrbitar");
document.getElementById("foo").innerHTML = logger;

var currentdate = new Date();
var datetime =
  currentdate.getDate() +
  "/" +
  (currentdate.getMonth() + 1) +
  "/" +
  currentdate.getFullYear() +
  " @ " +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes() +
  ":";

function funcionSumar() {
  let quienIngresa = prompt("Quien ingresa?");

  //discos de Amolar

  let resultado0 = parseInt(stockDiscosAmolar.value);
  let input0 = parseInt(inputDiscosAmolar.value);

  let resultado1 = parseInt(stockDiscosOrbitar.value);
  let input1 = parseInt(inputDiscosOrbitar.value);

  stockDiscosAmolar.value = parseInt(0 + resultado0 + input0);
  stockDiscosOrbitar.value = parseInt(0 + resultado1 + input1);

  logger += `${quienIngresa}, ha ingresado ${inputDiscosAmolar.value} discos de Amolar. ${datetime} `;
  inputDiscosAmolar.value = 0;

  //discos de Orbitar

  stockDiscosOrbitar.value = parseInt(0 + resultado1 + input1);
  logger += `${quienIngresa}, ha ingresado ${inputDiscosOrbitar.value} discos de Orbitar. ${datetime} `;
  inputDiscosOrbitar.value = 0;
}
function funcionRestar() {
  //discos de Amolar
  let quienRetira = prompt("Quien retira?");
  let resultado0 = parseInt(stockDiscosAmolar.value);
  let input0 = parseInt(inputDiscosAmolar.value);
  stockDiscosAmolar.value = parseInt(0 + resultado0 - input0);

  var resultado = `${logger} ${quienRetira}, ha retirado ${inputDiscosOrbitar.value} discos de Orbitar. ${datetime} `;
  logger = resultado;
  inputDiscosAmolar.value = 0;
  //discos de Orbitar
  let resultado1 = parseInt(stockDiscosOrbitar.value);
  let input1 = parseInt(inputDiscosOrbitar.value);
  stockDiscosOrbitar.value = parseInt(0 + resultado1 - input1);
  var resultado01 = `${logger} ${quienRetira}, ha retirado ${inputDiscosOrbitar.value} discos de Orbitar. ${datetime}`;
  logger = resultado01;
  inputDiscosOrbitar.value = 0;
}
