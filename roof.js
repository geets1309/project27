class Roof{

    constructor(x,y,width,height)
    
    
    {var options={
    
        isStatic: true
       
    
    }
    this.width=width;
    this.height=height;
    this.roof=Bodies.rectangle(x,y,this.width,this.height,options);
    World.add(world,this.roof);
    
    }
    
    display()
    {push ();
    
    rectMode(CENTER);
    fill ("yellow")
rect(this.roof.position.x,this.roof.position.y,this.width,this.height);
    pop();
    }
    
    
    }
