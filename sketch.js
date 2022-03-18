let dataObg=[{
    pos:10,
    neg:30,
    neit:50
},
{
    pos:100,
    neg:300,
    neit:500
},
    {
    pos:300,
    neg:300,
    neit:500
},
]
 function setup() {
  createCanvas(400, 400);
 }
function draw() {
  background(220);
}

let  playParam = function(DATA){
  var  wave;
  wave= new  p5.Oscillator('sine');
  wave.setType('sine')
  wave.amp(DATA.neg);
  wave.freq(DATA.pos)
  console.log(`pos:${DATA.pos}, neg: ${DATA.neg}, nietral: ${DATA.neit}`)
  wave.start();
}

let playData = function (){
    // data.forEach((x)=>playParam(x))
    for (let i = 0; i < dataObg.length; i++) {
        playParam(dataObg[i])

    }

}


