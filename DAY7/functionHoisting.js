const obj = new MyClass(); // ReferenceError
class MyClass {
    constructor() {
        this.name = "Mahima Bhardwaj";
    }
}
var a = 10;
var a = 20; // No error
console.log(a); // 20