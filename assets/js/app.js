document.addEventListener("mousemove", (event) =>{
    const styles = {
        style: `--move-x: ${(event.clientX - window.innerWidth / 2) * 0.005 }deg;
        --move-y: ${(event.clientY - window.innerHeight / 2) * 0.01}deg;`

    }
    Object.assign(document.documentElement , styles)
})

let xDeg = document.querySelector(".x-deg")
let yDeg = document.querySelector(".y-deg")

window.addEventListener("deviceorientation", (event) =>{
    let xRotate = event.beta
    let yRotate = event.gamma

    xDeg.innerHTML = xRotate
    yDeg.innerHTML = yRotate

    const styles = {
        style: `--move-x: ${xRotate}deg
        --move-y: ${yRotate}deg`
        
    }
    Object.assign(document.documentElement,styles)

},true)