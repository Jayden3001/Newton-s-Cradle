class Rope{
    constructor(body1,body2,offsetX,offsetY){

        this.offsetX=offsetX
        this.offsetY=offsetY
        var option={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            //length:10,
            stiffness:.04
        }
        this.rope=Constraint.create(option)
        World.add(world,this.rope)
    }
    
        
    
    display(){
        fill("black")
        var point1=this.rope.bodyA.position
        var point2=this.rope.bodyB.position
        var finalp2=this.offsetX+point2.x
        var finalp2y=this.offsetY+point2.y
        strokeWeight(3)
        line(point1.x,point1.y,finalp2,finalp2y)
        
    }
}