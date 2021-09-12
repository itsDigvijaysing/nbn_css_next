import React from 'react'
import styles from '../../styles/component/list_group.module.css'

const list_group = () => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <h1 className={styles.text_main}>NBN List Group</h1>
            <p className={styles.text_main}>Use NBN'css custom Text in your PROJECT</p>
            <div className={styles.container}>
                <div className={styles.list1}></div>
            </div>
        </>
    )
}

export default list_group
