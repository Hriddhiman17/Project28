class Stone {
    constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.r = r;
      this.body = Bodies.circle(x, y, r, options);
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("red");
      image(this.image, 0, 0, this.r, this.r);
      pop();
    }
  };