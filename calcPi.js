var pV = 1000;
var iC = 0;
var nIC = 0;
function setup() {
  createCanvas(1000,1000);
  background(0);
  ellipse(500,500,1000);
}
function draw() {
  stroke("red");
  for(var i = 0;i < 1000; i++){
    p = [random(1000), random(1000)];
    point(p[0], p[1]);
    if(dist(p[0], p[1], 500, 500) <= 500){
      iC++;
    }
    else{
      nIC++;
    }
  }
  if(frameCount >= pV){
    pV += 1000;
    pH = (iC/(nIC + iC)) * 4;
    alert(pH);
  }
}
