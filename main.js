Eyex=0;
Eyey=0;

function preload()
{
   skiing_goggles="https://i.postimg.cc/8z8K5mCK/kisspng-goggles-alpine-skiing-salomon-group-glasses-salomon-france-achat-skis-alpin-snowboard-chau-5.jpg"
}
function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(400,400);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw()
{
   image(video,0,0,400,400);
   image(skiing_goggles,Eyex,Eyey,100,100);
}

function modelLoaded()
{
    console.log("PoseNet is working");

}
function snapshot()
{
    save("sap_img.png");
}
function gotPoses(results)
{
 Eyex=results[0].pose.rightEye.x;  
 Eyey=results[0].pose.rightEye.y;
    if(results.length>0)
    {
        console.log(results);
        console.log("Right_Eye X="+Eyex);
        console.log("Right_Eye Y="+Eyey);
        console.log("Left_Eye X="+results[0].pose.leftEye.x);
        console.log("Left_Eye Y="+results[0].pose.leftEye.y);
    }
}
