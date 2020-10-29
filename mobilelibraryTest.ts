import { Mobile } from "./mobile";
import { MobileLibrary } from "./mobilelibrary";


let nokia3210:Mobile = new Mobile("The Rock", "3210", "Nokia", 16, "Black", false, 0, 30);
let iPhone3G:Mobile = new Mobile("The First", "iPhone3G", "Apple", 128, "White Pearl", false, 1, 60);
let samsungGalaxy10:Mobile = new Mobile("The Bomb", "Galaxy10", "Samsung", 256, "Blue", true, 4, 400);
let nokia3310:Mobile = new Mobile("The Best", "3310", "Nokia", 16, "Black", false, 0, 50);
let iphone8G:Mobile = new Mobile("The First", "iPhone8G", "Apple", 256, "White Pearl", false, 1, 350);
let samsungGalaxyNote:Mobile = new Mobile("The Note", "GalaxyNote", "Samsung", 256, "Blue", true, 3, 700);
let terminales = [nokia3310, iphone8G, samsungGalaxyNote];
let library:MobileLibrary = new MobileLibrary("Whatever", "Madrid", terminales);

// console.log(library.totalPriceCalculation());
// console.log("-------------");

// Probar que funcionan los métodos del objeto.

console.log(library.getLocation());
console.log("-------------");
console.log(library.getMobiles());
console.log("-------------");
console.log(library.getName());
console.log("-------------");
library.setLocation("una nueva location");
console.log(library.getLocation());
console.log("-------------");
library.setName("un nuevo nombre");
console.log(library.getName());
console.log("-------------");
library.setMobiles(terminales);
console.log(library.getMobiles());
console.log("-------------");

// probar printLibrary.

console.log(library.printLibrary());
console.log("-------------");
console.log(library.gettotalPriceCalculation());
console.log("-------------");
console.log(library.getMobiles());
console.log("-------------");
console.log(library.getName());
