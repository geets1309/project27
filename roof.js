class Roof{

    constructor(x,y,width,height)
    
    
    {var options={
    
        isStatic: true
       
    
    }
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,this.width,this.height,options);
    World.add(world,this.body);
    
    }
    
    display()
    {push ();
    
    rectMode(CENTER);
    fill ("yellow")
rect(this.body.position.x,this.body.position.y,this.width,this.height);
    pop();
    }
    
    
    }
