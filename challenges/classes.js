// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(promps){
        this.length = promps.length,
        this.width = promps.width,
        this.height = promps.height
    };
  };
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create 
// those methods using the dimension properties from CuboidMaker. Test your work by logging out your volume and surface area.


class CubeMaker extends CuboidMaker {
    constructor(props) {
      super(props);
    }
  
    volume(a) {
      return a * a * a;
    };

    surfaceArea(a) {
        return 6 (a * a);
      };
};
