class Bob{

    constructor(x,y,radius)
    
    
    {var options={
    
        
        restitution:1, 
        friction:0.3,
        density:0.8
    
    }
   
    this.radius=radius;
    this.body=Bodies.circle(x,y,this.radius,options);
    World.add(world,this.body);
    
    }
    
    display()
    {var pos=this.body.position;
        push ();
        noStroke();
    translate(pos.x,pos.y)
    ellipseMode(RADIUS);
    //imageMode(RADIUS);
    fill ("pink")
    //image(this.image,0,0,this.radius,this.radius);
    ellipse(0,0,this.radius,this.radius);
        pop();
    }
    
    
    }