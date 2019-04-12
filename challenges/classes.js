// 1. Copy and paste your prototype in here and refactor into class syntax.

    // Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.
    /* == Step 1: Base Constructor ==
      Create a constructor function named CuboidMaker that accepts properties for length, width, and height
    */
    class CuboidMaker {
        constructor(props) {
            this.length = props.length;
            this.width = props.width;
            this.height = props.height;
        }
        volume() {
            console.log(this.length * this.width * this.height);
        }
        surfaceArea() {
            console.log(2 * (this.length * this.width + this.length * this.height + this.width * this.height));
        }
    };
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130

  // Getting Uncaught SyntaxError: Identifier 'CuboidMaker' has already been declared at classes.js:1
  //I am unsure of how to get rid of this error, since CuboidMaker hasn't been declared in this file but once.