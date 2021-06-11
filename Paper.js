class Paper{
	constructor(x,y,r)

	{
	var options={
		'density':0.235,
        'friction': 0.1,
        'restitution':0.3,
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y,this.r,options)
        this.image = loadImage("paper.png")
		World.add(world, this.body)
    }
 display(){
        push();
		imageMode(CENTER)
		translate(this.body.position.x,this.body.position.y)
		image(this.image,0,0,this.r,this.r);
		//ellipseMode(RADIUS)
		//ellipse(0,0,this.r,this.r)
		pop();
 }
}