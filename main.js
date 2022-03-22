leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("teal");
    document.getElementById("text_size").innerHTML="Width and Height of Text is : " + difference;
    fill("turquoise");
    stroke("lightblue");
    textSize(difference);
    text("Mountains", 100, 300);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=Math.floor(leftWristX-rightWristX);
        console.log("LeftWristX = " + leftWristX + "RightWristX = " + rightWristX + "Difference = " + difference);
    }
}