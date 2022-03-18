let data = [100,440,500]
 function setup() {
  createCanvas(400, 400);
 }
function draw() {
  background(220);
}

let  playDATA = function(){
  var  wave;
  wave= new  p5.Oscillator('sine');
  wave.setType('sine')
  wave.amp(1);
  wave.freq(300)
  wave.start();  
}