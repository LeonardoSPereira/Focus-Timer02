import { buttonPlay, buttonPause } from "./elements.js";
import { Controls } from "./controls.js";
const controls = Controls({
    buttonPlay,
    buttonPause,
});
import { minutes, seconds } from "./elements.js";
import Sounds from "./sounds.js";
const sound = Sounds();

export function Timer() {
    let timeTimeOut;

    function updateDisplay(updateMinutes, updateSeconds) {
        minutes.textContent = String(updateMinutes).padStart(2, "0");
        seconds.textContent = String(updateSeconds).padStart(2, "0");
    }

    function pause() {
        clearTimeout(timeTimeOut);
    }

    function add() {
        let moreMinutes = Number(minutes.textContent);
        moreMinutes = moreMinutes + 5;
        updateDisplay(moreMinutes, 0);
        
        
    }

    function less() {
        let lessMinutes = Number(minutes.textContent);
        lessMinutes = lessMinutes - 5;
        updateDisplay(lessMinutes, 0);
        
    }

    function reset() {
        controls.reset();
        updateDisplay(25, 0);
        clearTimeout(timeTimeOut);
    }

    function countdown() {

        timeTimeOut = setTimeout(function() {
            let newMinutes = Number(minutes.textContent);
            let newSeconds = Number(seconds.textContent);

            updateDisplay(newMinutes, 0);

            if(newMinutes <= 0 && newSeconds <= 0) {
                reset();
                sound.timeEnd();
                return
            }

            if(newSeconds <= 0) {
                newSeconds = 60;
                --newMinutes;
            }


            updateDisplay(newMinutes, newSeconds - 1);

            countdown()
        }, 1000)
    }


    return{
        countdown,
        reset,
        pause,
        add, 
        less
    }
}