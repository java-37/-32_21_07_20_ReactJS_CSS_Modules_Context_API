import React from 'react';
import classes from './Car.module.css';


export default () => {
    console.log(classes);
    const arr = [classes.Car,classes.Card];
    return (
        <div className={arr.join(' ')}>
            <h2 className={classes['Car-title']}>Car component</h2>
        </div>
    );
}