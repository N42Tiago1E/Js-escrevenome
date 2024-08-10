function setup() {
    createCanvas(600, 600);
    background("blue")
  }
  
  function draw() {
   
  
    fill("red");
    stroke("green");
    
    if(mouseIsPressed){
      circle(mouseX,mouseY,20,20);
     }
  }