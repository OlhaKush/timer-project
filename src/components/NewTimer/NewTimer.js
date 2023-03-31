import styles from './NewTimer.module.scss';
import {useEffect, useState} from 'react';
import React from 'react';


const NewTimer = () => {

    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(0);

    const startTimer = () => {
        const newIntervalId = setInterval(() => {
            setTime(time => time + 1);
        }, 10);
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

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor(((time % 360000) % 60000) / 100);

        return hours + ":" + minutes + ":" + seconds + ":" + time

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