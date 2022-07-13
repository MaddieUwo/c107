https://teachablemachine.withgoogle.com/models/CBnehIKHC/
function startClassification()
{
    navigator .mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CBnehIKHC/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}