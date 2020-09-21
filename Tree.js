class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("tree.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      imageMode(CENTER);
      fill("brown");
      image(this.image, 900, 400, 500, 600);
    }
};