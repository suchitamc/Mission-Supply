class Box{

constructor(x,y){

var options={
    isStatic:true,
    friction:0.3,
    density:0.2
}

this.body = Bodies.rectangle(x,y,20,20,options);
World.add(world,this.body);
this.width = 20;
this.height = 20;


}
display(){
  

    var pos = this.body.position;
    pos.x = box.x;
    pos.y = box.y;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("pink");
    stroke("pink");
    rect(CENTER);
    rect(0,0,this.width,this.height);
    pop();

}






}