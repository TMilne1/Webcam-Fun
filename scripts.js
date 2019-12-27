const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({ video: true, audio: false}) //returns a promise
     .then(localMediaStream => {
         console.log(localMediaStream)
         video.srcObject = localMediaStream;
         video.play();
     }).catch(err =>{
         console.error("Need access to webcam", err)});
}

getVideo();
