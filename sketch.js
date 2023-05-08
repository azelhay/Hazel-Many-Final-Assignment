// this code will overlay two images and allow the user to draw over the canvas with a translucent rainbow mouse 

var img1;
  //global variable for first image file
var img2;
  //global variable for second image file
var aspect;
  //global varibale for changing the aspect ratio

var numColums = 150;

var numRows = 150;

var myShape;
//global variable for the object we will create below.


function preload(){
  
  img1 = loadImage("dolphin.jpeg");
  
  img2 = loadImage("clipart.jpeg");
 
  //define variables by calling the file here^
}

function setup() {
  
  print ("Intro to programing 1, Final Assignment, Hazel Many, 5/2/2023");
  
  aspect = img1.width/img1.height;
  
  aspect = img2.width/img2.height;
  
  //define varibales for aspect ratios
  
  createCanvas(300 * aspect, 300);
  //frame canvas to new image size
  
  image (img1, 0, 0, width, height);
  tint(0, 153, 204, 55);
  image (img2, mouseX, mouseY, width, height);
  //dislpay images and adjust sizes
  
  img1 = get();
  img2 = get();
  
  let columWidth = width/numColums;
  let rowHeight = height/numRows;
  //set up colums and rows for a grid
  
  for (let i = 0; i < numColums; i++){
    //for loop for the colums 
    for (let j = 0; j < numRows; j++){
      //nested for loop for the rows 
      
      let x = i * columWidth
      let y = j * rowHeight
      let w = columWidth 
      let h = rowHeight 
      //coordinates for each cicle in the loop
      
      var circleColor = img1.get(x, y)
      //variable for the color of each ellipse in the loop
      
      fill(circleColor)
      noStroke()
  
     ellipse(x + columWidth/2, y + rowHeight/2, w, h)
      //display shapes, offset for shape origin
      }
}
}

function draw() {
  
  //create an object within the draw function:
  myShape = {
    x : mouseX, //commas to seperate properties.
    y : mouseY,
    w : random(40,100),
    h : random(40,100),
   
    }
    
  
  //outside of the object we display the shape using the properties from the object

  noStroke();
  fill (mouseX, mouseY, 0, 10);
  ellipse(myShape.x, myShape.y, myShape.w, myShape.h);
 
  
}