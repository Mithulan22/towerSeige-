class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,

      }
      this.Visiblity = 255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("box.png");
      World.add(world, this.body);
      this.remove = true
    }
    display(){ 
      console.log(this.body.speed); 
      var pos= this.body.position; 
      if(this.body.speed <6){ 
        imageMode(CENTER); 
        image(this.image,pos.x,pos.y,this.width, this.height); }
      else {
        World.remove(world, this.body);
        if(this.remove === true){

          this.remove = false
          }
          push()
          this.Visiblity = this.Visiblity-5
          tint(0,this.Visiblity)
          image(this.image,this.body.position.x, this.body.position.y, 50,50)
          pop()
          }
      }
    }