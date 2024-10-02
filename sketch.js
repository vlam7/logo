let obj;
let spinLogo = false;
let logoScale = 0.19; // Adjust this scale factor based on your needs

function preload() {
  // Load the 3D model during the preload phase
  obj = loadModel('logo.obj', true);
}

function setup() {
  createCanvas(70, 70, WEBGL);
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
    rotateY(frameCount * 0.05); // Rotate the model for animation
  }

  ambientLight(165);

  // Set the color of the 3D model to 8C7853
  ambientMaterial(140, 120, 83);

  pointLight(150, 150, 150, locX, locY, 165);
  scale(logoScale); // Scale the model to fit the canvas
  // texture(textureImg); // Uncomment this line if you want to apply texture
  model(obj);
}

function mouseOverCanvas() {
  return mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height;
}

function mouseMoved() {
  spinLogo = mouseOverCanvas();
}
