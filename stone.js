class Stone
{
    constructor(x,y,width,height){

        var option = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width = width
        this.height = height
        this.image = loadImage('stone.png')
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position

        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;

        fill('black')
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}