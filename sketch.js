let obj;
let textureImg;
let spinLogo = false;

function preload() {
  // Load the 3D model during the preload phase
  obj = loadModel('logo.obj', true);
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  cursor(HAND);
  background(255, 255, 255, 0);

  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  // Display the 3D model
  rotateX(PI); // Rotate around the X axis to fix orientation
  noStroke();

  if (spinLogo) {
    rotateY(frameCount * 0.01); // Rotate the model for animation
  }

  ambientLight(200);

  // Set the color of the 3D model to 8C7853
  ambientMaterial(140, 120, 83);

  pointLight(255, 255, 255, locX, locY, 100);
  scale(1); // Scale the model to fit the canvas
  // texture(textureImg); // Uncomment this line if you want to apply texture
  model(obj);
}

function mouseOverCanvas() {
  return mouseX >= 50 && mouseX <= width && mouseY >= 200 && mouseY <= height;
}

function mouseMoved() {
  spinLogo = mouseOverCanvas();
}
