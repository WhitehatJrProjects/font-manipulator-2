function setup() {
    video = createCapture(VIDEO);
    video.size(650, 600);
    video.position(100, 100)
 

    canvas = createCanvas(600, 550);
    canvas.position(800, 130)
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized!')
}

function draw() {
    background('#FFC0CB')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}