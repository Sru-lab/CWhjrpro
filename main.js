song1 = "";
song2 = "";
leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;

function preload()
{
   song1 = loadSound("music.mp3");
   song2 = loadSound("music2.mp3")
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);

    song1.isPlaying()

    fill("#FF0000");
    stroke("#FF0000");

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);
        song2.stop()

        if(song1 = false)
        {
            song1.isPlaying()
            songname("song1")
        }
    }
}

function play()
{
    song.play();
   if(song1 = true)
   {
       document.getElementById("songname").innerHTML = "song1";
   }
   else if(song2 = true)
   {
       document.getElementById("songname").innerHTML = "song2";
   }
   else if(song1 = false)
   {
       document.getElementById("songname").innerHTML = "song name";
   }
   else if(song2 = false)
   {
       document.getElementById("songname").innerHTML = "song name";
   }
}