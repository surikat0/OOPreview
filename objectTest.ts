import { Mobile } from "./mobile";

let nokia3210:Mobile = new Mobile("The Rock", "3210", "Nokia", 16, "Black", false, 0, 30);
let iPhone3G:Mobile = new Mobile("The First", "iPhone3G", "Apple", 128, "White Pearl", false, 1, 60);
let samsungGalaxy10:Mobile = new Mobile("The Bomb", "Galaxy10", "Samsung", 256, "Blue", true, 4, 400);

// Mostrar por consola todos los atributos de cada objeto.

console.log(nokia3210);
console.log(iPhone3G);
console.log(samsungGalaxy10);

// Modificar el Nokia 3210 para que tenga 5G (lol) y 4 cámaras (megalol).

nokia3210.setis5G(true);
nokia3210.setCameraNumber(4);

// Mostrar todos los atributos de todos los objetos creados.

console.log(nokia3210);
console.log(iPhone3G);
console.log(samsungGalaxy10);