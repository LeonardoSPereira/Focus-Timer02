export default function() {
    const florestAudio = new Audio("https://github.com/LeonardoSPereira/Focus-Timer/blob/main/audio/Floresta.wav?raw=true");
    const rainAudio = new Audio("https://www.buscasons.com/_arq/2013/Chuva.mp3");
    const cafeAudio = new Audio("https://github.com/LeonardoSPereira/Focus-Timer/blob/main/audio/Cafeteria.wav?raw=true");
    const fireAudio = new Audio("https://github.com/LeonardoSPereira/Focus-Timer/blob/main/audio/Lareira.wav?raw=true");
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
