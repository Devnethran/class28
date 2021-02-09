class Slingshot{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,pointB:pointB,
            length:50,stiffness:0.04
        }
        this.pointB=pointB;
        this.chain=Constraint.create(option);
        World.add(world,this.chain);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.chain.bodyA){
        var A=this.chain.bodyA.position;
       var B=this.pointB;
        strokeWeight(4);
        line(A.x,A.y,B.x,B.y);
    }}
}