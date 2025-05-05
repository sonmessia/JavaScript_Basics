// const Singleton = (function () {
    // let instance;
// 
    // function createInstance() {
        // return {name: 'Singleton Instance'};
    // }
// 
    // return {
        // getInstance: function () {
            // if (!instance) {
                // instance = createInstance();
            // }
            // return instance;
        // }
    // }
// })();
// 
// let instance1 = Singleton.getInstance();
// let instance2 = Singleton.getInstance();
// 
// console.log(instance1 === instance2);
// 
// console.log(instance1);



class Car {
    constructor(model) {
        this.model = model;
    }

    drive() {
        console.log(`Driving a ${this.model}`);
    }
}

class CarFactory {
    static createCar(model) {
        return new Car(model);
    }
}
let car1 = CarFactory.createCar('Toyota');
let car2 = CarFactory.createCar('Honda');
car1.drive();
car2.drive();