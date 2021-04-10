class Hammer {
    constructor(x,y) {
      var options = {
          'restitution' : 0.5,
          'density' : 2,
          'friction' : 1
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("orange");
      stroke("white");
      strokeWeight(3);
      rect(0,0,this.width,this.height);
      pop();
      
      //image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };