
function preload(){
    video = createVideo("video.mp4")
   
}

function setup() {
    canvas = createCanvas(500,400)
    canvas.center()

}

function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "status: detecting objects"

}
function modelLoaded() {
    console.log("model is loaded")
    status = true
    video.loop()
    video.speed(1)
    video.volume(0)
}
function draw(){
    image(video,0,0,500,400)
}