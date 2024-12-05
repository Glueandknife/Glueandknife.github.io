var ellipseX = 200;
var ellipseY = 100;

  var r= 16;
  var g= 45;
  var b= 232;

  bg = 'green';

function setup() {
 // put setup code here

  c = color(r, g, b);
    createCanvas(displayWidth, displayHeight);
    cursor(CROSS)
    background(c);

}

function draw() {
  // put drawing code here



  fill('#E05F5A')
  circle(mouseX, mouseY,100,100);
  if(mouseIsPressed){
    fill('#E6AC73')
    ellipse(mouseX,mouseY,200,75);

    let button = createButton('Click');
    button.position(100,100);

    button.mousePressed(changebackground);
  }

  function changebackground() { 
  var r= 200;
  var g= 75;
  var b= 100;

   circle(300, 300,100,100);

   c = color(r, g, b);
   background(c);

  if (bg == 'red'){
    c = color(r, g, b);
    background(c);
    (bg == 'green')
    

  }
  

   
}


}



