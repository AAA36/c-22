var angryEngine , angryWorld , angryBall , angryGround ;

function setup(){

  createCanvas(600,600)

   angryEngine = Matter.Engine.create()
   angryWorld = angryEngine.world

   var groundProperties =  {isStatic: true}
   angryGround = Matter.Bodies.rectangle(300,590,600,20,groundProperties)
   Matter.World.add(angryWorld,angryGround)

   var ballProperties = {restitution: 1 }
   angryBall = Matter.Bodies.circle(300,300,40,ballProperties)
   Matter.World.add(angryWorld,angryBall)

   console.log(angryGround)
}

function draw(){

   background('black')

   Matter.Engine.update(angryEngine)

   circle(angryBall.position.x,angryBall.position.y,80)


   rectMode(CENTER)
   rect(angryGround.position.x,angryGround.position.y,600,20)
}

