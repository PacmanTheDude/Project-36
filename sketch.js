var dog, dog_img1, dog_img2;
var food;
var milk, milk_img;

function preload() {
  dog_img1 = loadImage("virtual pet images/Lazy.png");
  dog_img2 = loadImage("images/dogImg1.png");
  milk_img = loadImage("virtual pet images/milk.png");
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(650,400,20,20);
  dog.addImage(dog_img1);
  dog.scale = 0.3;
  food = createSprite(50,400,20,20);
  food.shapeColor = "red";
  milk = createSprite(50,200,20,20);
  milk.addImage(milk_img);
  milk.scale = 0.3; 

}


function draw() {  
  dog.x = mouseX;
  dog.y = mouseY;
  background("white");

  if(food.isTouching(dog)){
    dog.addImage(dog_img2);
  }

  if(milk.isTouching(dog)) {
    dog.addAnimation(dog_img1);
  }


  drawSprites();
}



