const speech = new SpeechSynthesisUtterance(); // create default speech object
const voiceSelect = document.querySelector("select");
let voices = [];

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
    //spech method of speechSynthesis to speak the text
});


window.speechSynthesis.addEventListener("voiceschanged", () => {
    voices = window.speechSynthesis.getVoices(); // pulls all voices installed in system
    speech.voice = voices[0];

    for (let i = 0; i < voices.length; i++) {
        voiceSelect.options[i] = new Option(voices[i].name);
        //creates new option in dropbox
    }
});

voiceSelect.addEventListener("change", () => {

    const voice1 = voices.filter(voice => voice.name === voiceSelect.value);
    speech.voice = voice1[0];

});