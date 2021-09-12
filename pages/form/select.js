import React from 'react'
import styles from '../../styles/form/select.module.css'

const select = () => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);
    const select_code = {
        color_select: `
        <select class = " nbn-select ">
            <option value="0">Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </select>
        <select class = " nbn-select-danger ">
            <option value="0">Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </select>
        <select class = " nbn-select-success ">
            <option value="0">Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </select>
        <select class = " nbn-select-warning ">
            <option value="0">Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </select>
        <select class = " nbn-select-info ">
            <option value="0">Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </select>
        <select class = " nbn-select-primary ">
            <option value="0">Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </select>
        `,
        size_select: `
        <select class = " nbn-select-small ">
            <option value="0">Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </select>
        <select class = " nbn-select ">
            <option value="0">Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </select>
        <select class = " nbn-select-large ">
            <option value="0">Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </select>
        <select class = " nbn-select-rounded ">
            <option value="0">Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </select>
        <select class = " nbn-select-disabled " disabled>
            <option value="0">Select</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
        </select>
        `,

    }
    return (
        <>
            <h1 className={styles.text_main}>NBN Form Select</h1>
            <p className={styles.text_main}>Use NBN'css custom <strong>Input Select</strong> in your PROJECT</p>
            <div className={styles.container}>
                <h4 className={styles.heading}>1) Selet Colors :-</h4>
                <select className={styles.nbn_select}>
                    <option value="0">Select</option>
                    <option value="">One</option>
                    <option value="">Two</option>
                    <option value="">Three</option>
                    <option value="">Four</option>
                </select>
                <select className={styles.nbn_select_danger}>
                    <option value="0">Select</option>
                    <option value="">One</option>
                    <option value="">Two</option>
                    <option value="">Three</option>
                    <option value="">Four</option>
                </select>
                <select className={styles.nbn_select_success}>
                    <option value="0">Select</option>
                    <option value="">One</option>
                    <option value="">Two</option>
                    <option value="">Three</option>
                    <option value="">Four</option>
                </select>
                <select className={styles.nbn_select_warning}>
                    <option value="0">Select</option>
                    <option value="">One</option>
                    <option value="">Two</option>
                    <option value="">Three</option>
                    <option value="">Four</option>
                </select>
                <select className={styles.nbn_select_info}>
                    <option value="0">Select</option>
                    <option value="">One</option>
                    <option value="">Two</option>
                    <option value="">Three</option>
                    <option value="">Four</option>
                </select>
                <select className={styles.nbn_select_primary}>
                    <option value="0">Select</option>
                    <option value="">One</option>
                    <option value="">Two</option>
                    <option value="">Three</option>
                    <option value="">Four</option>
                </select>
                <div className={styles.code}>
                    <pre>
                        <code className="language-html">
                            {select_code.color_select}
                        </code>
                    </pre>
                </div>
            </div>
            <div className={styles.container}>
                <h4 className={styles.heading}>2) Selet Size :-</h4>
                <select className={styles.nbn_select_small}>
                    <option value="0">Select</option>
                    <option value="">One</option>
                    <option value="">Two</option>
                    <option value="">Three</option>
                    <option value="">Four</option>
                </select>
                <select className={styles.nbn_select}>
                    <option value="0">Select</option>
                    <option value="">One</option>
                    <option value="">Two</option>
                    <option value="">Three</option>
                    <option value="">Four</option>
                </select>
                <select className={styles.nbn_select_large}>
                    <option value="0">Select</option>
                    <option value="">One</option>
                    <option value="">Two</option>
                    <option value="">Three</option>
                    <option value="">Four</option>
                </select>
                <select className={styles.nbn_select_rounded}>
                    <option value="0">Select</option>
                    <option value="">One</option>
                    <option value="">Two</option>
                    <option value="">Three</option>
                    <option value="">Four</option>
                </select>
                <select className={styles.nbn_select_disabled} disabled>
                    <option value="0">Select</option>
                    <option value="">One</option>
                    <option value="">Two</option>
                    <option value="">Three</option>
                    <option value="">Four</option>
                </select>
                <div className={styles.code}>
                    <pre>
                        <code className="language-html">
                            {select_code.size_select}
                        </code>
                    </pre>
                </div>
            </div>
        </>
    )
}

export default select
