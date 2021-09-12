import React, { useState } from 'react'
import styles from '../../styles/Colors.module.css'

const colors = () => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <h1 className="text-center">NBN Colors</h1>
            <p className="text-center">Use NBN'css custom Alerts in your PROJECT</p>
            <div className="">
                <div className={styles.bodys}>
                    <div className={styles.blood}><p className={styles.text}>.NBN-danger</p></div>
                    <div className={styles.moon}><p className={styles.text}>.NBN-light</p></div>
                    <div className={styles.tree}><p className={styles.text}>.NBN-success</p></div>
                    <div className={styles.sky}><p className={styles.text}>.NBN-info</p></div>
                    <div className={styles.sun}><p className={styles.text}>.NBN-warning</p></div>
                    <div className={styles.space}><p className={styles.text}>.NBN-secondary</p></div>
                    <div className={styles.primary}><p className={styles.text}>.NBN-primary</p></div>
                    <div className={styles.dark}><p className={styles.text}>.NBN-dark</p></div>
                </div>
            </div>
        </>
    )
}

export default colors
