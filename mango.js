class Mango
{
    constructor(x,y,width,height){

        var option = {
            isStatic: true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width
        this.height = height
        this.image = loadImage('mango.png')
        World.add(world,this.body) 
    }
    display(){
        var pos = this.body.position

        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}