Webcam.set({
    width:350,
    height:300,
    image_format:jpeg,
    jpeg_quality:100
});
camera = document.getElementById("camera");
Webcam.attach('#camera')
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src"'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('',modelLoded);
function modelLoded(){
    console.log('modelLoded!');
}
function speak() {
    var synth = window.speechSythesis;
    speak_data1 = "The first prediction is ";
    speak_data2 = "The second prediction is ";
    var utterThis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}

    
    
