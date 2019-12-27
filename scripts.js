const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({ video: true, audio: false}) //returns a promise
     .then(localMediaStream => {
         video.srcObject = localMediaStream;
         video.play();
     }).catch(err =>{
         console.error("Need access to webcam", err)});
}

function paintToCanvas(){
    const height = video.videoHeight;
    const width = video.videoWidth;
    canvas.height = height;
    canvas.width = width;

    return setInterval(()=>{
        ctx.drawImage(video, 0, 0, width, height)
    }, 10);
}

getVideo();
video.addEventListener('canplay', paintToCanvas )

function takePhoto(){
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg') // extract data from canvas - picture in text baed format 
    const link = document.createElement('a'); // 
    link.href = data; 
    link.setAttribute('download', 'handsome')
    link.innerHTML = `<img src='${data}'alt = "Handsome" ></img>`
    strip.insertBefore(link, strip.firstChild)
}


