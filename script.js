
Webcam.set({
         width: 350,
         height: 350,
         image_quality: 'png',
         png_quality: 90,
     })
     camera = document.getElementById("camera");

Webcam.attach('#camera');
     
     function take_snapshot() {
         Webcam.snap(function (data_uri) {
             document.getElementById("result").innerHTML = '<img style ="height: 350px; width: 350px;" id="captured_image" src="' + data_uri + '">'
         })
     }
     
     console.log('ml5 version', ml5.version);
     classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1JHfHFUq_/model.json', modelLoaded)
     function modelLoaded() {
         console.log('model loaded')
     }
     
     
     function check(){
         img = document.getElementById('captured_image')
         classifier.classify(img, gotresult)
     }
     
     
     function gotresult(error, result) {
         if (error) {
             console.error(error)
         } else {
             console.log(result)
             document.getElementById("object_name").innerHTML = result[0].label
             document.getElementById("object_accuracy").innerHTML = result[0].confidence.toFixed(3)
         }
     }
          