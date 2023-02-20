var song = "";
var leftWristX = 0;
var leftWristY = 0;
var rightWristX = 0;
var rightWristY = 0;

function preload() {
   song = loadSound("music.mp3");
}
function setup() {
    canvas = createCanvas(540, 540);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 540, 540);
}

function play() {
    song.play();
    song.setVolume(1); //setting volume to full
    song.rate(1); // setting playback speed 
}

function modelLoaded() {
console.log('PoseNet initialize');
}

function gotPoses(Results) {
    if(Results.lenght >= 0){
        console.log(Results);
        leftWristX = Results[0].pose.leftWrist.x;
        leftWristY = Results[0].pose.leftWrist.y;
        console.log("LeftWristX = "+ leftWristX + "LeftWristY = " + leftWristY);

        rightWristX = Results[0].pose.rightWrist.x;
        rightWristY = Results[0].pose.rightWrist.y;
        console.log("RightWristX = " + rightWristX + "RgihtWristY = " + rightWristY);
    }
}