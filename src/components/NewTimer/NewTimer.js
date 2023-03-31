import styles from './NewTimer.module.scss';
import {useEffect, useState} from 'react';
import React from 'react';


const NewTimer = () => {


        const [time, setTime] = useState(0);
        const [intervalId, setIntervalId] = useState(null);


    useEffect(() => {
        return () => {
            clearInterval(intervalId);
        }
    });

        const startTimer = () => {
            const newIntervalId = setInterval(() => {
                setTime(time => time + 100);
            }, 100);
            setIntervalId(newIntervalId);
        };

        const stopTimer = () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };

        const resetTimer = () => {
            if (intervalId) {
                clearInterval(intervalId);
                setTime(0);
            }
        };

        const formatTime = (t) => {

            const ms = t % 1000;
            t = (t - ms) / 1000;
            const secs = t % 60;
            t = (t - secs) / 60;
            const mins = t % 60;
            const hrs = (t - mins) / 60;

            return hrs + ':' + mins + ':' + secs + '.' + ms;
        };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.timer}> {formatTime(time)} </h1>
            <button className={styles.button} onClick={startTimer}>Start</button>
            <button className={styles.button} onClick={stopTimer}>Stop</button>
            <button className={styles.button} onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default NewTimer;