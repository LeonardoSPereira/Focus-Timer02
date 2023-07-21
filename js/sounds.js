export default function() {
    const florestAudio = new Audio("../audio/Floresta.wav");
    const rainAudio = new Audio("../audio/Chuva.wav");
    const cafeAudio = new Audio("../audio/Cafeteria.wav");
    const fireAudio = new Audio("../audio/Lareira.wav");
    const timesEnd = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");

    function timeEnd() {
        timesEnd.play();
    }

    florestAudio.loop = true;
    rainAudio.loop = true;
    cafeAudio.loop = true;
    fireAudio.loop = true;

    return {
        florestAudio,
        rainAudio,
        cafeAudio,
        fireAudio,
        timeEnd
    }
}