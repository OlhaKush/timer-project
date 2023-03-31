import {useEffect, useState} from 'react';
import Container from "../Container/Container";
import styles from './Timer.module.scss';

const Timer = () =>{
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(0);
    const [isRunning, setRunning] = useState(null);

    useEffect(() => {
        let interval;

        if(isRunning) {
            interval = setInterval (() => {
                if(milliseconds > 0) {
                    setMilliseconds((milliseconds) => milliseconds - 1);
                } else if (seconds > 0) {
                    setSeconds((seconds) => seconds - 1);
                    setMilliseconds(99);
                } else if (minutes > 0) {
                    setMinutes((minutes) => minutes - 1);
                    setSeconds(59);
                    setMilliseconds(99);
                } else if (hours > 0) {
                    setHours ((hours) => hours - 1);
                    setMinutes(59);
                    setSeconds(59);
                    setMilliseconds(99);
                }

            }, 10);
        }
        return () => clearInterval (interval);
    }, [milliseconds, seconds, minutes, hours, isRunning]);

    function startTimer() {
        if (hours !==0 || minutes !==0 || seconds !==0 || milliseconds !==0){
    setRunning(true);
        }
    }

    function pauseTimer() {
        setRunning(false);
    }

    function stopTimer() {
        resetTimer();
    }

    function resetTimer() {
       setRunning(false);
        setMilliseconds(0);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    const changeHours = (e) => {
        setHours(e.target.value);
    };

    const changeMinutes= (e) => {
        setMinutes(e.target.value);
    };

    const changeSeconds = (e) => {
        setSeconds(e.target.value);
    };

    const changeMilliSeconds = (e => {
        setMilliseconds(e.target.value);
    });


    return (
        <Container>

            <div>
                <label>HH</label>
                <input className={styles.fild} value={hours}onChange={changeHours}/>
            </div>
            <div>
                <label>MM</label>
                <input className={styles.fild} value={minutes}onChange={changeMinutes}/>
            </div>
            <div>
                <label>SS</label>
                <input className={styles.fild} value={seconds} onChange={changeSeconds}/>
            </div>
            <div>
                <label>MS</label>
                <input className={styles.fild} value={milliseconds} onChange={changeMilliSeconds}/>
            </div>

            <br/>

            {!isRunning && (
            <button onClick={startTimer}>Play</button>
            )}
            {isRunning && (
                <button onClick={pauseTimer}>Pause</button>
            )}
            {isRunning && (
                <button onClick={stopTimer}>Stop</button>
            )}


        </Container>);

};


export default Timer;



// const Timer = () =>{
//             const [time, setTime] = useState(0);
//
//         const start = () => {
//             setInterval(() => {
//                 setTime(time => time + 1);
//             }, 100);
//         };
//
//         const formatTime = (time) => {
//
//             const hours = Math.floor(time / 3600000);
//             const minutes = Math.floor((time % 3600000) / 60000);
//             const seconds = Math.floor(((time % 360000) % 60000) / 1000);
//             return hours + ":" + minutes + ":" + seconds;
//         };
//
//         return (
//             <>
//                 <div>
//                     {formatTime(time)}
//                 </div>
//                 <button onClick={start}>Play</button>
//             </>
//         );
//    };
//
//
// export default Timer;
