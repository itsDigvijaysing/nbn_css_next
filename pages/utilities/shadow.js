import React from 'react'
import styles from '../../styles/shadow.module.css'


const shadow = () => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);

    const code = `
    <div class="NBN-shadow-sm"></div>
    <div class="NBN-shadow"></div>
    <div class="NBN-shadow-lg"></div>
     `;
    return (
        <div>
            <h1 className={styles.text_main}>NBN shadow</h1>
            <p className={styles.text_main}>Use NBN'css custom shadows in your PROJECT</p>
            <div className={styles.container}>
                <div className={styles.card2}><h4 className={styles.text}>NBN Small shadow</h4></div>
                <div className={styles.card1}><h4 className={styles.text}>NBN Regular shadow</h4></div>
                <div className={styles.card3}><h4 className={styles.text}>NBN Larger shadow</h4></div>
                <div className={styles.card4}><h4 className={styles.text}>NBN No shadow</h4></div>
            </div>
            <div className={styles.code}>
                <pre>
                    <code className="language-html" >{code}</code>
                </pre>
            </div>
        </div>
    )
}

export default shadow
