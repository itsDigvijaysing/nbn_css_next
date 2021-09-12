import React from 'react'
import styles from '../../styles/Border.module.css'

const border = () => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <h1 className="text-center">NBN border</h1>
            <p className="text-center">Use NBN'css custom <strong>BORDERS</strong> in your PROJECT</p>
            <h4 className={styles.title}>1) Border Position</h4>
            <div className={styles.body}>
                <div className={styles.box5}><p className={styles.text}>.NBN-border</p></div>
                <div className={styles.box1}><p className={styles.text}>.NBN-border-top</p></div>
                <div className={styles.box2}><p className={styles.text}>.NBN-border-right</p></div>
                <div className={styles.box3}><p className={styles.text}>.NBN-border-bottom</p></div>
                <div className={styles.box4}><p className={styles.text}>.NBN-border-left</p></div>
            </div>
            <br />
            <h4 className={styles.title}>1) Border Colors</h4>
            <div className={styles.body}>
                <div className={styles.box5c}><p className={styles.text}>.NBN-border-info</p></div>
                <div className={styles.box1c}><p className={styles.text}>.NBN-border-danger</p></div>
                <div className={styles.box2c}><p className={styles.text}>.NBN-border-warning</p></div>
                <div className={styles.box3c}><p className={styles.text}>.NBN-border-success</p></div>
                <div className={styles.box4c}><p className={styles.text}>.NBN-border-primary</p></div>
                <div className={styles.box6c}><p className={styles.text}>.NBN-border-light</p></div>
                <div className={styles.box7c}><p className={styles.text}>.NBN-border-secondary</p></div>
            </div>
            <br />
            <h4 className={styles.title}>1) Border Width</h4>
            <div className={styles.body}>
                <div className={styles.box1b}><p className={styles.text}>.NBN-border-1</p></div>
                <div className={styles.box2b}><p className={styles.text}>.NBN-border-2</p></div>
                <div className={styles.box3b}><p className={styles.text}>.NBN-border-3</p></div>
                <div className={styles.box4b}><p className={styles.text}>.NBN-border-4</p></div>
                <div className={styles.box5b}><p className={styles.text}>.NBN-border-5</p></div>

            </div>
            <br />
        </>
    )
}

export default border
