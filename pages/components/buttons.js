import React, { useState, useEffect } from 'react'
import styles from '../../styles/Button.module.css'
import { CopyBlock, dracula } from "react-code-blocks";

const buttons = () => {
    const [lang, setLang] = useState("java")
    const sapmle = {
        html: `        <button className={styles.nbnButtonBlue}>SKY</button>
        <button className={styles.nbnButtonYellow}>SUN</button>
        <button className={styles.nbnButtonGreen}>TREE</button>
        <button className={styles.nbnButtonRed}>BLOOD</button>
        <button className={styles.nbnButtonPink}>PINK</button>
            `
    }
    return (
        <div className="container">
            <h1 className="text-center m-3 fw-bold">NBN BUTTONS</h1>
            <p className="text-center">Use NBN'css custom BUTTONS in your #WEBSITE</p>
            <div>
                <div className="container border border-dark p-3">
                    <button className={styles.nbnButtonBlue}>SKY</button>
                    <button className={styles.nbnButtonYellow}>SUN</button>
                    <button className={styles.nbnButtonGreen}>TREE</button>
                    <button className={styles.nbnButtonRed}>BLOOD</button>
                    <button className={styles.nbnButtonPink}>PINK</button>
                </div>
                <div className="container m-4">
                    <CopyBlock
                        CodeBlock
                        language={lang}
                        text={sapmle.html}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines={false}
                    />
                    <br />
                </div>
            </div>
        </div >
    )
}
true
export default buttons
