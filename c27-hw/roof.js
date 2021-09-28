class roof{
    constructor(x, y, width, height){
        var options = {
            'density':1.0,
            'isStatic':true
        }

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);

        World.add(world, this.body);
    }

    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    }
}