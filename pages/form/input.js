import React from 'react'
import styles from '../../styles/form/input.module.css'

const input = () => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);
    const input_code = {
        color_input: `
        <input type="text" class = "nbn-input" placeholder="This is simple input tag" />
        <input type="text" class = "nbn-input nbn-input-danger" placeholder="This is danger input tag" />
        <input type="text" class = "nbn-input nbn-input-warning" placeholder="This is warning input tag" />
        <input type="text" class = "nbn-input nbn-input-info" placeholder="This is info input tag" />
        <input type="text" class = "nbn-input nbn-input-primary" placeholder="This is primary input tag" />
        <input type="text" class = "nbn-input nbn-input-success" placeholder="This is success input tag" />
        `,
        size_input: `
        <input type="text" class = "nbn-input nbn-input-small" placeholder="This is small input tag" />
        <input type="text" class = "nbn-input" placeholder="This is normal input tag" />
        <input type="text" class = "nbn-input nbn-input-large" placeholder="This is large input tag" />
        <input type="text" class = "nbn-input nbn-input-rounded" placeholder="This is rounded input tag" />
        <input type="text" class = "nbn-input nbn-input-disabled" placeholder="This is disabled input tag" />
        `,

    }
    return (
        <>
            <h1 className={styles.text_main}>NBN Form Input</h1>
            <p className={styles.text_main}>Use NBN'css custom <strong>Input Form</strong> in your PROJECT</p>
            <div className={styles.container}>
                <h4 className={styles.heading}>1) Color Inputs :-</h4>
                <input type="text" className={styles.nbn_input} placeholder="This is simple input tag" />
                <input type="text" className={styles.nbn_input_danger} placeholder="This is danger input tag" />
                <input type="text" className={styles.nbn_input_warning} placeholder="This is warning input tag" />
                <input type="text" className={styles.nbn_input_info} placeholder="This is info input tag" />
                <input type="text" className={styles.nbn_input_primary} placeholder="This is primary input tag" />
                <input type="text" className={styles.nbn_input_success} placeholder="This is success input tag" />
                <div className={styles.code}>
                    <pre>
                        <code className="language-html">
                            {input_code.color_input}
                        </code>
                    </pre>
                </div>
            </div>
            <div className={styles.container}>
                <h4 className={styles.heading}>2) Inputs Sizes :-</h4>
                <input type="text" className={styles.nbn_input_small} placeholder="This is small input tag" />
                <input type="text" className={styles.nbn_input} placeholder="This is normal input tag" />
                <input type="text" className={styles.nbn_input_large} placeholder="This is large input tag" />
                <input type="text" className={styles.nbn_input_rounded} placeholder="This is rounded input tag" />
                <input type="text" className={styles.nbn_input_disabled} placeholder="This is disabled input tag" disabled />
                <div className={styles.code}>
                    <pre>
                        <code className="language-html">
                            {input_code.size_input}
                        </code>
                    </pre>
                </div>
            </div>
        </>
    )
}

export default input
