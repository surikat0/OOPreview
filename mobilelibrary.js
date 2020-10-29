"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    MobileLibrary.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    MobileLibrary.prototype.gettotalPriceCalculation = function () {
        return this.totalPriceCalculation();
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var sumaPrecios = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            sumaPrecios += this.mobiles[i].getPrice();
        }
        return sumaPrecios;
    };
    MobileLibrary.prototype.printLibrary = function () {
        var imprimir = "";
        imprimir += "This is all my mobiles: " + "\n";
        for (var i = 0; i < this.mobiles.length; i++) {
            imprimir += this.mobiles[i].toString();
        }
        imprimir += "Price Overall: " + this.totalPriceCalculation();
        return imprimir;
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
