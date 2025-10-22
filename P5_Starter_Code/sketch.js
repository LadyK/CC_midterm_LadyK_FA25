let t;

function setup() {
 // put setup code here
  createCanvas(900, 900); // size() 
  background(255);

}

function draw() {
    push()
    translate(400, 0);
    fill(0);
    ellipse(width/2, height/2, 40, 40);
    pop();

    fill(255, 0, 0);
    ellipse(0, 0, 100, 100);

    fill(0, 255, 0);
    rect(0, 300, 60, 60);
  
  
}

function mousePressed(){

    let v = createVector(mouseX, mouseY);
    //t = new Turkey(createVector(mouseX, mouseY));
    t = new Turkey(v);
}
