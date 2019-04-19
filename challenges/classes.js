// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class CuboidMaker {
    constructor(length, width, height) {
      this.length = length;
      this.width = width;
      this.height = height;
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }

  const Cuboid = new CuboidMaker(4, 5, 5);


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(Cuboid.volume()); // 100
console.log(Cuboid.surfaceArea()); // 130



/* Original Code */

/* const CuboidMaker = function (properties) {
    this.length = properties.length;
    this.width = properties.width;
    this.height = properties.height;
  };
*/ 

/* CuboidMaker.prototype.volume = function () {
  return this.length * this.width * this.height;
};

CuboidMaker.prototype.surfaceArea = function () {
  return(2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height) ));
};

const Cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

*/