import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonAdd,
    buttonLess,
    buttonFlorest,
    buttonRain,
    buttonCafe,
    buttonFire,
    buttonSun, 
    buttonMoon,
    florestVolume,
    rainVolume,
    cafeVolume,
    fireVolume
    
} from "./elements.js";

import { Controls } from "./controls.js";
const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonCafe,
    buttonFire,
    buttonFlorest,
    buttonRain,
    buttonSun, 
    buttonMoon
    
});

import Sounds from "./sounds.js"
const sound = Sounds();

import { Timer } from "./timer.js"
const timer = Timer();


// EVENTOS DO CONTADOR

buttonPlay.addEventListener('click', function() {
    controls.play();
    timer.countdown();    
})

buttonPause.addEventListener('click', function() {
    controls.pause();
    timer.pause();
})

buttonStop.addEventListener('click', function(){
    timer.reset();
})

buttonAdd.addEventListener('click', function() {
    timer.add();
})

buttonLess.addEventListener('click', function() {
    timer.less();
})


// EVENTOS DOS BOTÕES DE ÁUDIO

buttonFlorest.addEventListener('click', function() {
    if(!buttonFlorest.classList.contains('active')){
        controls.audioFlorest();
        sound.florestAudio.play();
        sound.rainAudio.pause();
        sound.cafeAudio.pause();
        sound.fireAudio.pause();
        florestVolume.value = 0.5;
    } else {
        sound.florestAudio.pause();
        buttonFlorest.classList.remove('active');
        florestVolume.value = 0;


    }

})

florestVolume.addEventListener('input', function() {
    const volume = Number(florestVolume.value);
    sound.florestAudio.volume = volume;
})

florestVolume.addEventListener('click', e => e.stopPropagation())



buttonRain.addEventListener('click', function() {
    if(!buttonRain.classList.contains('active')){
        controls.audioRain();
        sound.rainAudio.play();
        sound.florestAudio.pause();
        sound.cafeAudio.pause();
        sound.fireAudio.pause();
        rainVolume.value = 0.5;

    } else {
        sound.rainAudio.pause();
        buttonRain.classList.remove('active');
        rainVolume.value = 0;
        
    }

})

rainVolume.addEventListener('input', () => {
    const volume = Number(rainVolume.value);
    sound.rainAudio.volume = volume;
})

rainVolume.addEventListener('click', e => e.stopPropagation())



buttonCafe.addEventListener('click', function() {
    if(!buttonCafe.classList.contains('active')){
        controls.audioCafe();
        sound.cafeAudio.play();
        sound.florestAudio.pause();
        sound.rainAudio.pause();
        sound.fireAudio.pause();
        cafeVolume.value = 0.5;
    } else {
        sound.cafeAudio.pause();
        buttonCafe.classList.remove('active');
        cafeVolume.value = 0;

    }
})

cafeVolume.addEventListener('input', () => {
    const volume = Number(cafeVolume.value);
    sound.cafeAudio.volume = volume;
})

cafeVolume.addEventListener('click', e => e.stopPropagation())



buttonFire.addEventListener('click', function() {
    if(!buttonFire.classList.contains('active')){
        controls.audioFire();
        sound.fireAudio.play();
        sound.florestAudio.pause();
        sound.rainAudio.pause();
        sound.cafeAudio.pause();
        fireVolume.value = 0.5;
    } else {
        sound.fireAudio.pause();
        buttonFire.classList.remove('active');
        fireVolume.value = 0;

    }
})

fireVolume.addEventListener('input', () => {
    const volume = Number(fireVolume.value);
    sound.fireAudio.volume = volume;
})

fireVolume.addEventListener('click', e => e.stopPropagation())



// EVENTOS DE MUDANÇA DO TEMA

buttonSun.addEventListener('click', function() {
    controls.activateDarkMode();
})

buttonMoon.addEventListener('click', () => {
    controls.activateLightMode();
})

