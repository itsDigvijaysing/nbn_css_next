import React, { useState } from 'react'
import Link from 'next/link'


const Navbar = () => {
    const [active, setActive] = useState(false)
    const [comp, setComp] = useState(false);
    const [util, setUtil] = useState(false);
    const [lout, setLout] = useState(false);
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
    return (
        <>
            <button className="fas fa-bars" className={active ? "btn" : "btn clicks"} onClick={change}></button>
            {/* <div className="btn">
                <span className="fas fa-bars"></span>
            </div> */}
            <nav className="sidebar" className={active ? "sidebar" : "sidebar show"}>
                <div className="text">NBN CSS</div>
                <ul>
                    <li><Link href="/"><a>Getting Started</a></Link></li>
                    <li><a onClick={loutchange} className="util-btn">Layout
                    <span className="fas fa-caret-down second"></span>
                    </a>
                        <ul className={lout ? "lout-show show1" : "lout-show"}>
                            <li><Link href="/conatiners"><a>Continers</a></Link></li>
                            <li><Link href="/grid"><a>Grid</a></Link></li>
                            <li><Link href="/columns"><a>Columns</a></Link></li>
                        </ul>
                    </li>
                    <li><a onClick={compchange} className="feat-btn">Components
                    <span className="fas fa-caret-down first"></span>
                    </a>
                        <ul className={comp ? "comp-show show" : "comp-show"}>
                            <li><Link href="/components/alerts"><a>Alert</a></Link></li>
                            <li><Link href="/components/buttons"><a>Buttons</a></Link></li>
                            <li><Link href="/components/cards"><a>Card</a></Link></li>
                        </ul>
                    </li>
                    <li><a onClick={utilchange} className="util-btn">Utilities
                    <span className="fas fa-caret-down second"></span>
                    </a>
                        <ul className={util ? "util-show show1" : "util-show"}>
                            <li><Link href="/utilities/borders"><a>Border</a></Link></li>
                            <li><Link href="/utilities/colors"><a>Colors</a></Link></li>
                            <li><Link href="/utilities/background"><a>Background</a></Link></li>
                        </ul>
                    </li>
                    <li><Link href="/about"><a>ABOUT</a></Link></li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar
