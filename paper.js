  class Paper  {
    constructor(x,y)   {
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
        }
        this.body = Bodies.circle(x,y,23,options);
    
        this.image = loadImage('paper.png');
        World.add(world,this.body);
        Paper.scale=1.0;

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
           
            image(this.image,0,0,65,140);
            
            pop();
        }

}
