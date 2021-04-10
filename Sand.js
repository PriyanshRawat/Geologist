class Sand {
    constructor(x,y,r) {
      var options = {
          'restitution' : 0.3,
          'density' : 1,
          'friction' : 5
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.rectangle(x,y,r,options);
      World.add(world, this.body);
    }
    display(){
      var sandpos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(sandpos.x, sandpos.y);
      //rotate(angle);
      ellipseMode(CENTER);
      fill("brown");
      stroke("black");
      strokeWeight(4);
      ellipse(0,0,this.r,this.r);
      pop();
      
      //image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };