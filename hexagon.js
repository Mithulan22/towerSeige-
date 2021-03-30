class hexagon {
  constructor(x, y, r) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
        isStatic:false
    }
    this.body = Bodies.circle(x, y, r, options);
    this.x = x;
    this.y = y;
    this.r = r;
    this.image = loadImage("hexagon.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill(255);
    image(this.image, 0, 0, this.r, this.r);
    pop();
  }
};