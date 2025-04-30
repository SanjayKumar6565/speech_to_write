let element =document.getElementById("text");
const recongition = new(window.SpeechRecognition || window.webkitSpeechRecognition);
recongition.lang ="en-GB";
recongition.continuous = true;
document.onclick = recongition.start();
recongition.onresult = (event)=>{
    for (const result of event.results){
        element.innerText = result[0].transcript;
    }
}