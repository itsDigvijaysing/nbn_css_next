import React from 'react'
import styles from '../../styles/form/radio.module.css'

const radio = () => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <h1 className={styles.text_main}>NBN Form Radio</h1>
            <p className={styles.text_main}>Use NBN'css custom <strong>Radio Form</strong> in your PROJECT</p>
            <div className={styles.container}>
                <h4 className={styles.heading}>1) Radio Color</h4>
                <div className={styles.nbn_check}>
                    <input type="radio" className={styles.nbn_chech_radio} />
                    <label className={styles.nbn_chech_label}>Monster</label>
                </div>
                <div>
                    <input type="radio" />
                    <label>Monster</label>
                </div>
            </div>
        </>
    )
}

export default radio
