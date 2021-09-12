import React from 'react'
import styles from '../../styles/component/table.module.css'

const table = () => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <>
            <h1 className={styles.text_main}>NBN Tables</h1>
            <p className={styles.text_main}>Use NBN'css custom <strong>TABLES</strong> in your PROJECT</p>
            <div className={styles.container}>
                <div className={styles.table1}>
                    <table className={styles.NBNTable}>
                        <thead>
                            <tr className={styles.NBNTableTitle}>
                                <th>name</th>
                                <th>age</th>
                                <th>gender</th>
                                <th>phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={styles.NBNTableBody}>
                                <td>mahesh</td>
                                <td>21</td>
                                <td>male</td>
                                <td>234321243</td>
                            </tr>
                            <tr className={styles.NBNTableBody}>
                                <td>mahesh</td>
                                <td>21</td>
                                <td>male</td>
                                <td>234321243</td>
                            </tr>
                            <tr className={styles.NBNTableBody}>
                                <td>mahesh</td>
                                <td>21</td>
                                <td>male</td>
                                <td>234321243</td>
                            </tr>
                            <tr className={styles.NBNTableBody}>
                                <td>mahesh</td>
                                <td>21</td>
                                <td>male</td>
                                <td>234321243</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default table
