import React, { useState } from 'react'
import styles from '../../styles/Alert.module.css'

const alerts = () => {
    const [alert_danger, setAlert_danger] = useState(true)
    const [alert_info, setAlert_info] = useState(true)
    const [alert_success, setAlert_success] = useState(true)
    const [alert_warning, setAlert_warning] = useState(true)
    const [alert_primary, setAlert_primary] = useState(true)
    const [alert_secondary, setAlert_secondary] = useState(true)
    const [alert_light, setAlert_light] = useState(true)
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);
    const text = {
        simple_alert: `
        <div class =" NBN-alert-danger  ">This is alert component</div>
        <div class =" NBN-alert-warning  ">This is alert component</div>
        <div class =" NBN-alert-success  ">This is alert component</div>
        <div class =" NBN-alert-info  ">This is alert component</div>
        <div class =" NBN-alert-primary  ">This is alert component</div>
        <div class =" NBN-alert-secondary  ">This is alert component</div>
        <div class =" NBN-alert-light  ">This is alert component</div>
        
        `,

        dissmiss_alert: `
        <div class =" NBN-alert-danger  NBN-alert-dismiss " role=" alert ">This is alert component</div>
        <div class =" NBN-alert-warning  NBN-alert-dismiss" role=" alert ">This is alert component</div>
        <div class =" NBN-alert-success  NBN-alert-dismiss" role=" alert ">This is alert component</div>
        <div class =" NBN-alert-info  NBN-alert-dismiss" role=" alert ">This is alert component</div>
        <div class =" NBN-alert-primary  NBN-alert-dismiss" role=" alert ">This is alert component</div>
        <div class =" NBN-alert-secondary  NBN-alert-dismiss" role=" alert ">This is alert component</div>
        <div class =" NBN-alert-light  NBN-alert-dismiss" role=" alert ">This is alert component</div>
        `
    }
    return (
        <>
            <h1 className={styles.text_main}>NBN Text</h1>
            <p className={styles.text_main}>Use NBN'css custom Text in your PROJECT</p>
            <h4 className={styles.heading}>1) NBN Simple Alerts</h4>
            <div className={styles.container}>
                <div className={styles.s_alert_danger}>This is alert component</div>
                <div className={styles.s_alert_warning}>This is alert component</div>
                <div className={styles.s_alert_success}>This is alert component</div>
                <div className={styles.s_alert_info}>This is alert component</div>
                <div className={styles.s_alert_primary}>This is alert component</div>
                <div className={styles.s_alert_secondary}>This is alert component</div>
                <div className={styles.s_alert_light}>This is alert component</div>
            </div>
            <div className={styles.code}>
                <pre>
                    <code className="language-html">
                        {text.simple_alert}
                    </code>
                </pre>
            </div>

            <h4 className={styles.heading}>2) NBN Dismissable Alerts</h4>
            <div className={styles.container}>
                {alert_danger ? <div className={styles.s_alert_danger}>This is alert component <button onClick={() => setAlert_danger(false)} className={styles.closebtn}>&times;</button></div> : ""}
                {alert_info ? <div className={styles.s_alert_info}>This is alert component <button onClick={() => setAlert_info(false)} className={styles.closebtn}>&times;</button></div> : ""}
                {alert_warning ? <div className={styles.s_alert_warning}>This is alert component <button onClick={() => setAlert_warning(false)} className={styles.closebtn}>&times;</button></div> : ""}
                {alert_primary ? <div className={styles.s_alert_primary}>This is alert component <button onClick={() => setAlert_primary(false)} className={styles.closebtn}>&times;</button></div> : ""}
                {alert_secondary ? <div className={styles.s_alert_secondary}>This is alert component <button onClick={() => setAlert_secondary(false)} className={styles.closebtn}>&times;</button></div> : ""}
                {alert_light ? <div className={styles.s_alert_light}>This is alert component <button onClick={() => setAlert_light(false)} className={styles.closebtn}>&times;</button></div> : ""}
                {alert_success ? <div className={styles.s_alert_success}>This is alert component <button onClick={() => setAlert_success(false)} className={styles.closebtn}>&times;</button></div> : ""}
            </div>
            <div className={styles.code}>
                <pre>
                    <code className="language-html">
                        {text.dissmiss_alert}
                    </code>
                </pre>
            </div>
        </>
    )
}

export default alerts
