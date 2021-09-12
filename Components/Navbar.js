import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'


const Navbar = () => {
    const [active, setActive] = useState(true)
    const [comp, setComp] = useState(true);
    const [util, setUtil] = useState(true);
    const [lout, setLout] = useState(true);
    const [form, setForm] = useState(true);
    const change = () => {
        setActive(!active)
    }
    const compchange = () => {
        setComp(!comp)
    }
    const utilchange = () => {
        setUtil(!util)
    }
    const loutchange = () => {
        setLout(!lout)
    }
    const formchange = () => {
        setForm(!form)
    }
    return (
        <>
            <button className={active ? styles.button : styles.button_click} onClick={change}><i style={{ fontSize: 25 }} className="fas fa-bars"></i></button>
            <nav className={active ? styles.sidebar : styles.sidebar_show}>
                <div className={styles.sidebar_text}>NBN CSS</div>
                <ul className={styles.nav_ul}>
                    <li className={styles.nav_ul_li}><Link href="/"><a className={styles.nav_ul_li_a}>Getting Started</a></Link></li>
                    <li className={styles.nav_ul_li}><a className={styles.nav_ul_li_a} onClick={loutchange}>Layout
                        <span className={styles.nav_ul_li_a_span}></span>
                    </a>
                        <ul className={styles.nav_ul_ul} className={lout ? styles.layout_show : styles.layout_show_click}>
                            <li className={styles.nav_ul_ul_li}><Link href="/conatiners"><a className={styles.nav_ul_ul_li_a}>Continers</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/layout/grid"><a className={styles.nav_ul_ul_li_a}>Grid</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/columns"><a className={styles.nav_ul_ul_li_a}>Columns</a></Link></li>
                        </ul>
                    </li>
                    <li className={styles.nav_ul_li}><a className={styles.nav_ul_li_a} onClick={formchange}>Forms
                        <span className={styles.nav_ul_li_a_span}></span>
                    </a>
                        <ul className={styles.nav_ul_ul} className={form ? styles.form_show : styles.form_show_click}>
                            <li className={styles.nav_ul_ul_li}><Link href="/form/input"><a className={styles.nav_ul_ul_li_a}>Input</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/form/textarea"><a className={styles.nav_ul_ul_li_a}>Textarea</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/form/select"><a className={styles.nav_ul_ul_li_a}>Select</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/form/radio"><a className={styles.nav_ul_ul_li_a}>Radio</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/form/check"><a className={styles.nav_ul_ul_li_a}>Check</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/form/file"><a className={styles.nav_ul_ul_li_a}>File</a></Link></li>
                        </ul>
                    </li>
                    <li className={styles.nav_ul_li}><a className={styles.nav_ul_li_a} onClick={compchange}>Components
                        <span className={styles.nav_ul_li_a_span}></span>
                    </a>
                        <ul className={styles.nav_ul_ul} className={comp ? styles.component_show : styles.component_show_click}>
                            <li className={styles.nav_ul_ul_li}><Link href="/components/alerts"><a className={styles.nav_ul_ul_li_a}>Alert</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/components/buttons"><a className={styles.nav_ul_ul_li_a}>Buttons</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/components/card"><a className={styles.nav_ul_ul_li_a}>Card</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/components/table"><a className={styles.nav_ul_ul_li_a}>Table</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/components/list_group"><a className={styles.nav_ul_ul_li_a}>List Group</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/components/sidebar"><a className={styles.nav_ul_ul_li_a}>Sidebar</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/components/modal"><a className={styles.nav_ul_ul_li_a}>Modal</a></Link></li>
                        </ul>
                    </li>
                    <li className={styles.nav_ul_li}><a className={styles.nav_ul_li_a} onClick={utilchange}>Utilities
                        <span className={styles.nav_ul_li_a_span}></span>
                    </a>
                        <ul className={styles.nav_ul_ul} className={util ? styles.utility_show : styles.utility_show_click}>
                            <li className={styles.nav_ul_ul_li}><Link href="/utilities/border"><a className={styles.nav_ul_ul_li_a}>Borders</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/utilities/colors"><a className={styles.nav_ul_ul_li_a}>Colors</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/utilities/background"><a className={styles.nav_ul_ul_li_a}>Backgrounds</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/utilities/shadow"><a className={styles.nav_ul_ul_li_a}>Shadows</a></Link></li>
                            <li className={styles.nav_ul_ul_li}><Link href="/utilities/text"><a className={styles.nav_ul_ul_li_a}>Texts</a></Link></li>
                        </ul>
                    </li>
                    <li className={styles.nav_ul_li}><Link href="/about"><a className={styles.nav_ul_li_a}>ABOUT</a></Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
