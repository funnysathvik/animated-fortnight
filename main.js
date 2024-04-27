img = "";
status = "";
object = [];
function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start(){
    identifier = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("sand").innerHTML = "status dectection object";
}
function modelloaded(){
    console.log("model is loaded");
    status=true;
}
function gotpose(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object = results;

}
function draw(){
    image(video,0,0,380,380);
    if(status!=""){
        r=random(255);
        g = random(255);
        b = random(255);
        identifier.detect(video,gotpose);

    for(i=0; i < object.legnth; i++){

        document.getElementById("sphinx").innerHTML = "number of objects detected are " +object.length;
        fill(r,g,b);
        document.getElementById("sand").innerHTML = "status is detecting objects";
        percentage = floor(object[i].confidence*100);
        text(object[i].label+" "+percentage+"%",object[i].x,object[i].y);
        noFill();
        stroke(r,g,b);
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
    }
}
}

