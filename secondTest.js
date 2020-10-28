"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var nokia3210 = new mobile_1.Mobile("The Rock", "3210", "Nokia", 16, "Black", false, 0, 30);
var iPhone3G = new mobile_1.Mobile("The First", "iPhone3G", "Apple", 128, "White Pearl", false, 1, 60);
var samsungGalaxy10 = new mobile_1.Mobile("The Bomb", "Galaxy10", "Samsung", 256, "Blue", true, 4, 400);
// Nuevo método que imprima todas las características del objeto siguiendo el patrón dado.
console.log(nokia3210.toString());
console.log("--------------");
console.log(iPhone3G.toString());
console.log("--------------");
console.log(samsungGalaxy10.toString());
console.log("--------------");
// Crear un array de objetos con los tres objetos ya creados y mostrar sus atributos.
var myObjects = [nokia3210, iPhone3G, samsungGalaxy10];
for (var i = 0; i < myObjects.length; i++) {
    console.log("\n" + myObjects[i].toString());
}
