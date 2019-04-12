// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class cuboid {
    constructor(properties) {
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 6 * (this.length + this.width);
    }
}

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


// ------ Original Code Prototype ------ //


/* const CuboidMaker = function (properties) {
    this.length = properties.length;
    this.width = properties.width;
    this.height = properties.height;
};



CuboidMaker.prototype.volume = function () {
    return this.length * this.width * this.height;
};


CuboidMaker.prototype.surfaceArea = function () {
    return 2 * (
      (this.length * this.width) +
      (this.length * this.height) +
      (this.width * this.height)
    );
};


const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
})

 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

*/

// ------ Original Code Prototype ------ //