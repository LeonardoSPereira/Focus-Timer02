export function Controls({
    buttonPlay,
    buttonPause,
    buttonCafe,
    buttonFire,
    buttonFlorest,
    buttonRain,
    buttonSun, 
    buttonMoon
}) {
    
    function play(){
        buttonPlay.classList.add('hide');
        buttonPause.classList.remove('hide');
    }

    function pause() {
        buttonPlay.classList.remove('hide');
        buttonPause.classList.add('hide');
    }

    function reset() {
        buttonPlay.classList.remove('hide');
        buttonPause.classList.add('hide');
    }

    function audioFlorest(){
        buttonFlorest.classList.add('active');
        buttonRain.classList.remove('active');
        buttonCafe.classList.remove('active');
        buttonFire.classList.remove('active');
    }

    function audioRain(){
        buttonFlorest.classList.remove('active');
        buttonRain.classList.add('active');
        buttonCafe.classList.remove('active');
        buttonFire.classList.remove('active');
    }

    function audioCafe(){
        buttonFlorest.classList.remove('active');
        buttonRain.classList.remove('active');
        buttonCafe.classList.add('active');
        buttonFire.classList.remove('active');
    }

    function audioFire(){
        buttonFlorest.classList.remove('active');
        buttonRain.classList.remove('active');
        buttonCafe.classList.remove('active');
        buttonFire.classList.add('active');
    }

    function activateDarkMode() {
        buttonSun.classList.add('hide');
        buttonMoon.classList.remove('hide');
        document.documentElement.classList.toggle('dark');
    }

    function activateLightMode() {
        buttonSun.classList.remove('hide');
        buttonMoon.classList.add('hide');
        document.documentElement.classList.toggle('dark');

    }

    return {
        play,
        pause,
        reset,
        audioCafe,
        audioFire,
        audioRain,
        audioFlorest,
        activateDarkMode,
        activateLightMode
    }

}