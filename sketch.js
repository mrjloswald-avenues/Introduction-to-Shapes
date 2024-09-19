// setup runs once when you hit the play button
// anything between the {} "happens" or "is executed"
function setup() {
//functionName(parameters)  can have zero parameters
  createCanvas(400, 400); // calling a function
}

// draw happens continuously after setup happens
// lines happen (are executed) in order
function draw() {
  // TODO 1 change the number below. Maybe several times
  background(220)
  // this is a comment
  // command/control + slash to comment/uncomment
  // TODO 2a comment out the first background "call" (above)
  // TODO 2b uncomment the second one (below)
  // background(220,160)
  // TODO 3a comment out the second background call
  // TODO 3b uncomment the third one
  // background(220,160,120); 
  // what is RGB?
  // how could we pick colors we want?
  // https://www.w3schools.com/colors/default.asp
  rect(10,10,10,10) 
  // why is it located where it is? 
  // why is it the size it is?
  // TODO 4 change the values
  // Here is the P5 reference for shapes: 
  // https://p5js.org/reference/#Shape
  // TODO 5 try square
  // TODO 6 try ellipse
  // TODO 7 try circle
  // TODO 8 try triangle
  // why are the shapes white?
  // why do they have a black border?  
  // TODO 9 uncomment the following two lines
  // fill(20,80,160)
  // stroke('white')
  // TODO 10 experiment by combining different things
  // TODO 11 ...
}