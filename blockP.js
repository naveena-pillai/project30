class BlockP{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<5){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill(232,144,226);
        rect(0, 0, this.width, this.height);
        pop();
        } else{
          World.remove(world,this.body);
          push();
          this.Visibility = this.Visibility-2;
          tint(255, this.Visibility);
          fill(232,144,226);
          rect(0, 0, this.width, this.height);
          pop();
        }
      }
}