// Enum for types of vehicles: Car, Truck, Motorcycle
var vehicles;
(function (vehicles) {
    vehicles[vehicles["Car"] = 0] = "Car";
    vehicles[vehicles["Truck"] = 1] = "Truck";
    vehicles[vehicles["Motorcycle"] = 2] = "Motorcycle"; //2
})(vehicles || (vehicles = {}));
;
// Log the value associated with 'Truck' in the 'vehicles' enum
console.log(vehicles.Truck);
