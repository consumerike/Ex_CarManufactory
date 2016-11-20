//create Car function:



let  Car = function () {
	this.manufacturedDate = new Date();

};

let Make = function  () {
	this.make = "Subaru";
};

let Model = function () {
	this.model = "Legacy"
}


let Legacy =  function () {
	this.engine = "v8";
	this.maxSpeed = "200 mph";
	this.drive = "all-wheel";
}
Make.prototype = new Car();
Model.prototype = new Make();
Legacy.prototype = new Model();

//create a favorite Car
let Legacy1 = new Legacy();
Legacy1.plateNumber = "1232";

let Legacy2 = new Model();
Legacy2.plateNumber = "abddef";

let Legacy3 = new Model();
Legacy3.plateNumber = "feghi";


let Outback = function () {
	this.engine = "v6";
	this.maxSpeed = "safely";	
	this.drive = "all-wheel";
};

Outback.prototype = new Model();

let Outback1 = new Outback();
Outback1.plateNumber = "poorformJack";
console.log("OUtback", Outback1 );

let inventory= [Outback1.make,  Outback1.model, " ", "license: ", Outback1.plateNumber, " ", "find us @garage to see the entire inventory"];
document.getElementById('garage').innerHTML = `The garage is stoked with: ${inventory}`;


