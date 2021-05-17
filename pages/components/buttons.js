import React, { useState, useEffect } from 'react'
import styles from '../../styles/Button.module.css'
import { CopyBlock, dracula, atomOneDark } from "react-code-blocks";

const buttons = () => {
    const [lang, setLang] = useState("java")
    const sapmle = {
        simpleButton: `        
        <button type="button" class=" nbn-btn  nbn-btn-sky ">SKY</button>
        <button type="button" class=" nbn-btn  nbn-btn-sun ">SUN</button>
        <button type="button" class=" nbn-btn  nbn-btn-tree ">TREE</button>
        <button type="button" class=" nbn-btn  nbn-btn-blood ">BLOOD</button>
        <button type="button" class=" nbn-btn  nbn-btn-pink ">PINK</button>
            `,
        outlieButton: `           
            <button type="button" class=" nbn-btn  nbn-btn-outline-sky ">SKY</button>
            <button type="button" class=" nbn-btn  nbn-btn-outline-sun ">SUN</button>
            <button type="button" class=" nbn-btn  nbn-btn-outline-tree ">TREE</button>
            <button type="button" class=" nbn-btn  nbn-btn-outline-blood ">BLOOD</button>
            <button type="button" class=" nbn-btn  nbn-btn-outline-pink ">PINK</button>
                `,
        textButton: `           
            <button type="button" class=" nbn-btn  nbn-btn-text-sky ">SKY</button>
            <button type="button" class=" nbn-btn  nbn-btn-text-sun ">SUN</button>
            <button type="button" class=" nbn-btn  nbn-btn-text-tree ">TREE</button>
            <button type="button" class=" nbn-btn  nbn-btn-text-blood ">BLOOD</button>
            <button type="button" class=" nbn-btn  nbn-btn-text-pink ">PINK</button>
                `,
        linearButton: `           
            <button type="button" class=" nbn-btn  nbn-btn-linear-sky ">SKY</button>
            <button type="button" class=" nbn-btn  nbn-btn-linear-sun ">SUN</button>
            <button type="button" class=" nbn-btn  nbn-btn-linear-tree ">TREE</button>
            <button type="button" class=" nbn-btn  nbn-btn-linear-blood ">BLOOD</button>
            <button type="button" class=" nbn-btn  nbn-btn-linear-pink ">PINK</button>
                `
    }
    return (
        <div className="container">
            <h1 className="text-center m-3 fw-bold">NBN BUTTONS</h1>
            <p className="text-center">Use NBN'css custom BUTTONS in your PROJECT</p>
            <div>
                <h3 className="fw-bold">Plain Button :- </h3>
                <div className="container border border-dark p-3">
                    <button className={styles.NBNSimpleButtonBlue}>SKY</button>
                    <button className={styles.NBNSimpleButtonYellow}>SUN</button>
                    <button className={styles.NBNSimpleButtonGreen}>TREE</button>
                    <button className={styles.NBNSimpleButtonRed}>BLOOD</button>
                    <button className={styles.NBNSimpleButtonPink}>PINK</button>
                    <button className={styles.NBNSimpleButtonBlue}>SKY</button>
                </div>
                <div className="container m-4">
                    <CopyBlock
                        CodeBlock
                        language={lang}
                        text={sapmle.simpleButton}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines={false}
                    />
                </div>
            </div>
            <div>
                <h3 className="fw-bold">Outline Button :- </h3>
                <div className="container border border-dark p-3">
                    <button className={styles.nbnButtonBlue}>SKY</button>
                    <button className={styles.nbnButtonYellow}>SUN</button>
                    <button className={styles.nbnButtonGreen}>TREE</button>
                    <button className={styles.nbnButtonRed}>BLOOD</button>
                    <button className={styles.nbnButtonPink}>PINK</button>
                    <button className={styles.nbnButtonBlue}>SKY</button>
                </div>
                <div className="container m-4">
                    <CopyBlock
                        CodeBlock
                        language={lang}
                        text={sapmle.outlieButton}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines={false}
                    />
                </div>
            </div>
            <div>
                <h3 className="fw-bold">Text Button :- </h3>
                <div className="container border border-dark p-3">
                    <button className={styles.NBNTextButtontBlue}>SKY</button>
                    <button className={styles.NBNTextButtonYellow}>SUN</button>
                    <button className={styles.NBNTextButtonGreen}>TREE</button>
                    <button className={styles.NBNTextButtonRed}>BLOOD</button>
                    <button className={styles.NBNTextButtonRedPink}>PINK</button>
                    <button className={styles.NBNTextButtontBlue}>SKY</button>
                </div>
                <div className="container m-4">
                    <CopyBlock
                        CodeBlock
                        language={lang}
                        text={sapmle.textButton}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines={false}
                    />
                </div>
            </div>
            <div>
                <h3 className="fw-bold">Linear Button :- </h3>
                <div className="container border border-dark p-3">
                    <button onClick={() => alert("hello monster")} className={styles.NBNLinearButtonBlue}>SKY</button>
                    <button className={styles.NBNLinearButtonYellow}>SUN</button>
                    <button className={styles.NBNLinearButtonGreen}>TREE</button>
                    <button className={styles.NBNLinearButtonRed}>BLOOD</button>
                    <button className={styles.NBNLinearButtonPink}>PINK</button>
                    <button className={styles.NBNLinearButtonBlue}>SKY</button>
                </div>
                <div className="container m-4">
                    <CopyBlock
                        CodeBlock
                        language={lang}
                        text={sapmle.linearButton}
                        showLineNumbers={false}
                        theme={dracula}
                        wrapLines={false}
                    />
                </div>
            </div>
        </div >
    )
}
true
export default buttons
