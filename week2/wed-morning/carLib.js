//{
//    "model": "Corolla",
//    "color": "Red",
//    "age": 3
//}

let carArray = [];
let nextId = 1;

function getAll(model, color, age){
    return carArray;
}


function addOne(model, color, age){
if (!model || !color || !age){ //check for undefined or empty
    return false;
}
const newCar = {
    id: nextId++,
    model,
    color,
    age
};
carArray.push(newCar);
return newCar;
}

function findById(id) {
    const numericId = Number(id); // converts Id to a number
    const car = carArray.find(item => item.id === numericId); // Finds the matching car by ID
    return car || false // returns the car or false if not found
}

function updateOneById(id, updatedData) {
    const car = findById(id);
    if (car) {
        if (updatedData.model) car.model = updatedData.model;
        if (updatedData.color) car.color = updatedData.color;
        if (updatedData.age) car.age = updatedData.age;
        return car;
    }
    return false;
}

function deleteOneById(id) {
    const car = findById(id);
    if (car) {
        const initialLength = carArray.length;
        carArray = carArray.filter(car => car.id !== Number(id)); // Filters out the car with the matching ID
        return carArray.length < initialLength; // Returns true if the array length decreased, indicating successful deletion
    }
    return false; // Returns false if the car was not found
}
const Car = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Car;

// test if main
if (require.main === module) {
    // Add cars
    let result = addOne("Corolla", "Red", 3);
    console.log(result);
    result = addOne("Civic", "Blue", 2);
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { age: 4, color: "Black" }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}




addOne("Corolla","Red", 3)

console.log(getAll())

