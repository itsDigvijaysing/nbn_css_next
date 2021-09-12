import React from 'react'
import styles from '../../styles/layout/Grid.module.css'

const grid = () => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);
    const card_code = {
        simple_grid: `
        <div class =" nbn-container "}>
            <div class = " nbn-row ">
                <div class = " nbn-col-4 ">
                    nbn-col-4
                </div>
                <div class = " nbn-col-4 ">
                    nbn-col-4
                </div>
                <div class = " nbn-col-4 ">
                    nbn-col-4
                </div>
            </div>
        </div>
        `,
        responsive_grid: `
        <div class =" nbn-container "}>
            <div class = " nbn-row ">
                <div class = " nbn-col-s-12 nbn-col-m-4 ">
                    .nbn-col-s-12 .nbn-col-m-4
                </div>
                <div class = " nbn-col-s-12 nbn-col-m-4 ">
                    .nbn-col-s-12 .nbn-col-m-4
                </div>
                <div class = " nbn-col-s-12 nbn-col-m-4 ">
                    .nbn-col-s-12 .nbn-col-m-4
                </div>
            </div>
        </div>
        `,
        options_grid: `
        Row :- nbn_row
        Column :- nbn-col
        Total col :- 12
        mobile column :- nbn-col-s
        Laptop column :- nbn-col-m
        `
    }
    return (
        <>
            <h1 className={styles.text_main}>NBN GRID</h1>
            <p className={styles.text_main}>Use NBN'css custom <strong>GRID</strong> for device responsive in your PROJECT</p>

            <div className={styles.container}>
                <h5 className={styles.heading}>NBN GRID OPTIONS :-</h5>
                <div className={styles.code}>
                    <pre>
                        <code className="language-html">
                            {card_code.options_grid}
                        </code>
                    </pre>
                </div>
            </div>


            <div className={styles.container}>
                <h5 className={styles.heading}>Example 1) :-</h5>
                <div className={styles.container}>
                    <div className={styles.nbn_row}>
                        <div className={styles.nbn_col_4}><h5 className={styles.nbn_text}>.nbn-col-4</h5></div>
                        <div className={styles.nbn_col_4}><h5 className={styles.nbn_text}>.nbn-col-4</h5></div>
                        <div className={styles.nbn_col_4}><h5 className={styles.nbn_text}>.nbn-col-4</h5></div>
                    </div>
                </div>
                <div className={styles.code}>
                    <pre>
                        <code className="language-html">
                            {card_code.simple_grid}
                        </code>
                    </pre>
                </div>
            </div>
            <div className={styles.container}>
                <h5 className={styles.heading}>Example 2) :-</h5>
                <div className={styles.container}>
                    <h5 className={styles.heading}>Laptop View :- </h5>
                    <div className={styles.nbn_row}>
                        <div className={styles.nbn_col_4}><h5 className={styles.nbn_text}>.nbn-col-s-12  .nbn-col-m-4</h5></div>
                        <div className={styles.nbn_col_4}><h5 className={styles.nbn_text}>.nbn-col-s-12  .nbn-col-m-4</h5></div>
                        <div className={styles.nbn_col_4}><h5 className={styles.nbn_text}>.nbn-col-s-12  .nbn-col-m-4</h5></div>
                    </div>
                    <h5 className={styles.heading}>Mobile View :- </h5>
                    <div className={styles.nbn_row}>
                        <div className={styles.nbn_col_s_12}><h5 className={styles.nbn_text}>.nbn-col-s-12  .nbn-col-m-4</h5></div>
                        <div className={styles.nbn_col_s_12}><h5 className={styles.nbn_text}>.nbn-col-s-12  .nbn-col-m-4</h5></div>
                        <div className={styles.nbn_col_s_12}><h5 className={styles.nbn_text}>.nbn-col-s-12  .nbn-col-m-4</h5></div>
                    </div>
                </div>
                <div className={styles.code}>
                    <pre>
                        <code className="language-html">
                            {card_code.responsive_grid}
                        </code>
                    </pre>
                </div>
            </div>
        </>
    )
}

export default grid
