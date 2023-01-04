Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="image"  src="'+data_uri+'">';
});}

console.log("ml5 version= ",ml5.version);
classifier = ml5.imageClassifier('https://drive.google.com/file/d/1wImQoMrVPIBptOeZn6GxwsMs-5BiLwx_/view',modelLoaded);

function check() {
    img=document.getElementById("image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error); 
    }
    else{
        console.log(results);
        document.getElementById("display_object").innerHTML=results[0].label;
        document.getElementById("display_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}