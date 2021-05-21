class Particles{
    constructor(x, y, r){
        var options ={
            restitution: 0.4,
            density: 1.2 
        }
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 255), random(0,255), random(0, 255));
        World.add(world, this.body);
    }

    display(){
        /*if(frameCount % 700 === 0){
            fill("black");
            ellipse(0, 0, this.r, this.r);
            World.remove(world, this.body);
        }else{*/
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            noStroke();
            fill(this.color);
            ellipseMode(RADIUS);
            ellipse(0, 0, this.r, this.r);
            pop();
          //}

    }
}