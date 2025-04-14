let canvas = document.querySelector(".rain");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

let rainController = document.querySelector(".btn-rain")

function random(min = 0,max = 10){
    return Math.floor((Math.random() * (max-min))+min)
}
function RainDrop(x , y , endy , speed , opacity) {
    this.x = x;
    this.y = y;
    this.endy = endy;
    this.speed = speed;
    this.opacity = opacity;


    this.draw = () =>{
        ctx.beginPath();
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x, this.y - this.endy)
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.stroke()
    }
    this.update = () =>{
        let rainEnd = window.innerHeight
        if(this.y >=rainEnd) {
           this.y = this.endy 
        }
        else {
            this.y = this.y + this.speed
            
        }
        this.draw()
    }
}
let rainArray = [];

for (let i = 0; i < 100; i++) {
  let x = random(0, window.innerWidth);       
  let y = random(0, 10);         
  let endY = y + random(2, 5);
  let speed = random(1, 10);       
  let opacity = Math.random();    
  let drop = new RainDrop(x, y, endY, speed, opacity);
  rainArray.push(drop);  
}
let animation = null
let isAnimationRun = false
function animateRain() {
    animation = requestAnimationFrame(animateRain)

    ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    isAnimationRun = true

    for (let i = 0; i < rainArray.length; i++) {
       const drop = rainArray[i];
       drop.update()
   } 
}

animateRain()
rainController.onclick = () =>{
    if (isAnimationRun === true) {
        cancelAnimationFrame(animation)
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
        isAnimationRun = false
        rainController.innerHTML = "Запустить <br/> дождь"
    }
    else{
        animateRain()
        rainController.innerHTML="Остановить <br/> дождь"
    }
}
