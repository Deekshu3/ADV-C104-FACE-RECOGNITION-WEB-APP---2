webcam.set({
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
classifier = ml5.imageClassifier('https://drive.google.com/file/d/13pcv3gAQ-ad4zcdvFw8WvX1Kb1D28cDM/view',modelLoaded);

function check() {
    img=document.getElementById("image");
    classifier.classify(img,gotResult);
}
