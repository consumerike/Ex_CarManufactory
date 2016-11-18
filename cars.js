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
let Legacy1 = new Model();
Legacy1.plateNumber = "1232";

let Legacy2 = new Model();
let Legacy3 = new Model();



