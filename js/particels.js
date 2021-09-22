var body = document.getElementsByTagName("BODY")[0];
console.log(body);

window.onload = init();
function init(){
  canvas = document.getElementById('particels'); 
  context = canvas.getContext('2d');
  canvas.height = body.scrollHeight;
  canvas.width = window.innerWidth;
  colors = [ '#2f75ef'];
  window.addEventListener('resize', canvasResize,false);
  dotsHolder = [];
  for(i = 0; i < 100; i++)
  {
    dotsHolder.push(new dots());
  }

  (function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame){
      window.requestAnimationFrame = function(callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() { callback(currTime + timeToCall); },
            timeToCall);
          lastTime = currTime + timeToCall;
          return id;
      };
    }
 
    if (!window.cancelAnimationFrame){
      window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
      };
    }
    
  }());
}

function canvasResize(){
 canvas.height = body.scrollHeight;
 canvas.width = window.innerWidth;
 cancelAnimationFrame(animate);
}


function dots(){
 this.xPos = Math.random()*canvas.width;
 this.yPos = Math.random()*canvas.height;
 this.color = colors[Math.floor(Math.random()*colors.length)];
 this.radius = Math.random()*8; 
 this.vx = Math.cos(this.radius);
 this.vy = Math.sin(this.radius);
 this.stepSize = Math.random() / 10;
 this.step = 0;
 this.friction = 7;
 this.speedX = this.vx;
 this.speedY = this.vy;
} 

dots.draw = function(){
  context.clearRect(0,0,canvas.width,canvas.height);
  for(var c = 0; c < dotsHolder.length;c++){
    dot = dotsHolder[c]; 
    context.beginPath();
    distanceX = dot.xPos;
    distanceY = dot.yPos;
    context.fillStyle = dot.color;
    dot.xPos += dot.vx;
    dot.yPos += dot.vy;
    if(dot.xPos < -50) {dot.xPos = canvas.width+50;}
    if(dot.yPos < -50) {dot.yPos = canvas.height+50;}
    if(dot.xPos > canvas.width+50) {dot.xPos = -50;}
    if(dot.yPos > canvas.height+50) {dot.yPos = -50;}
    context.arc(dot.xPos,dot.yPos,(dot.radius/2.5),0,2*Math.PI,false);
    context.fill();
  }
}

function animate(){
  requestAnimationFrame(animate);
  dots.draw();
}

animate();