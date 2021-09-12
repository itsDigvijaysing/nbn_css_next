import React, { useState } from 'react'
import styles from '../../styles/component/sidebar.module.css'

const sidebar = () => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);
    const [leftBar, setLeftBar] = useState(false)
    const [RightBar, setRightBar] = useState(false)
    const card_code = {
        dynamic_sidebar: `
        1) LEFT SIDEBAR :-

        <button class=" nbn-btn nbn-btn-dark " id=" leftsidebar ">&#9776; Left Sidebar</button>

        <div class=" nbn-left-sidebar " id=" leftbar ">
            <button class=" nbn-close-btn " id="closebtn">&times;</button>
            <ul class=" nbn-sidebar-items ">
                <li class=" nbn-sidebar-lists ">
                    <a href="#" class=" nbn-sidebar-a ">About</a>
                </li>
                <li class=" nbn-sidebar-lists ">
                    <a href="#" class=" nbn-sidebar-a ">Products</a>
                </li>
                <li class=" nbn-sidebar-lists ">
                    <a href="#" class=" nbn-sidebar-a ">Users</a>
                </li>
                <li class=" nbn-sidebar-lists ">
                    <a href="#" class=" nbn-sidebar-a ">Contact Us</a>
                </li>
            </ul>
        </div>

        1) RIGHT SIDEBAR :- 
        
        <button class=" nbn-btn nbn-btn-dark " id=" rightsidebar ">&#9776; Left Sidebar</button>

        <div class=" nbn-right-sidebar " id=" rightbar ">
            <button class=" nbn-close-btn " id="closebtn">&times;</button>
            <ul class=" nbn-sidebar-items ">
                <li class=" nbn-sidebar-lists ">
                    <a href="#" class=" nbn-sidebar-a ">About</a>
                </li>
                <li class=" nbn-sidebar-lists ">
                    <a href="#" class=" nbn-sidebar-a ">Products</a>
                </li>
                <li class=" nbn-sidebar-lists ">
                    <a href="#" class=" nbn-sidebar-a ">Users</a>
                </li>
                <li class=" nbn-sidebar-lists ">
                    <a href="#" class=" nbn-sidebar-a ">Contact Us</a>
                </li>
            </ul>
        </div>
        `

    }
    return (
        <>
            <h1 className={styles.text_main}>NBN Sidebar</h1>
            <p className={styles.text_main}>Use NBN'css custom <strong>SIDEBAR navigation bar </strong> in your PROJECT</p>
            <div className={styles.container}>
                <button className={styles.nbn_btn_dark} onClick={() => setLeftBar(!leftBar)}>&#9776; Left Sidebar</button>
                <button className={styles.nbn_btn_dark} onClick={() => setRightBar(!RightBar)}>&#9776; Right Sidebar</button>
                <div className={styles.code}>
                    <pre>
                        <code className="language-html">
                            {card_code.dynamic_sidebar}
                        </code>
                    </pre>
                </div>
            </div>





            <div className={leftBar ? styles.nbn_leftsidebar_click : styles.nbn_leftsidebar}>
                <button className={styles.nbn_closebtn} onClick={() => setLeftBar(!leftBar)}>&times;</button>
                <ul className={styles.nbn_sidebar_items}>
                    <li className={styles.nbn_sidebar_lists}><a href="#" className={styles.nbn_sidebar_a}>About</a></li>
                    <li className={styles.nbn_sidebar_lists}><a href="#" className={styles.nbn_sidebar_a}>Products</a></li>
                    <li className={styles.nbn_sidebar_lists}><a href="#" className={styles.nbn_sidebar_a}>Users</a></li>
                    <li className={styles.nbn_sidebar_lists}><a href="#" className={styles.nbn_sidebar_a}>Contact Us</a></li>
                </ul>
            </div>
            <div className={RightBar ? styles.nbn_rightsidebar_click : styles.nbn_rightsidebar}>
                <button className={styles.nbn_closebtn} onClick={() => setRightBar(!RightBar)}>&times;</button>
                <ul className={styles.nbn_sidebar_items}>
                    <li className={styles.nbn_sidebar_lists}><a href="#" className={styles.nbn_sidebar_a}>About</a></li>
                    <li className={styles.nbn_sidebar_lists}><a href="#" className={styles.nbn_sidebar_a}>Products</a></li>
                    <li className={styles.nbn_sidebar_lists}><a href="#" className={styles.nbn_sidebar_a}>Users</a></li>
                    <li className={styles.nbn_sidebar_lists}><a href="#" className={styles.nbn_sidebar_a}>Contact Us</a></li>
                </ul>
            </div>
        </>
    )
}

export default sidebar
