import React from 'react'
import styles from '../../styles/text.module.css'

const text = () => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);
    const text_code = {
        text_color: `
        <h5 className="NBN-text-danger  text-center">Lorem ipsum dolor sit amet.</h5>
        <h5 className="NBN-text-warning  text-center">Lorem ipsum dolor sit amet.</h5>
        <h5 className="NBN-text-success  text-center">Lorem ipsum dolor sit amet.</h5>
        <h5 className="NBN-text-info  text-center">Lorem ipsum dolor sit amet.</h5>
        <h5 className="NBN-text-primary  text-center">Lorem ipsum dolor sit amet.</h5>
        <h5 className="NBN-text-secondary  text-center">Lorem ipsum dolor sit amet.</h5>
        <h5 className="NBN-text-light  text-center">Lorem ipsum dolor sit amet.</h5>
        `,

        text_align: `
        <h5 className="text-left">Lorem ipsum dolor sit amet.</h5>
        <h5 className="text-center">Lorem ipsum dolor sit amet.</h5>
        <h5 className="text-right">Lorem ipsum dolor sit amet.</h5>
        `,

        text_transform: `
        <h5 className="text-uppercase">Lorem ipsum dolor sit amet.</h5>
        <h5 className="text-lowercase">Lorem ipsum dolor sit amet.</h5>
        <h5 className="text-capitalize">Lorem ipsum dolor sit amet.</h5>
        `,

        text_size: `
        <h5 className=" ts-1 ">Lorem ipsum dolor sit amet.</h5>
        <h5 className=" ts-2 ">Lorem ipsum dolor sit amet.</h5>
        <h5 className=" ts-3 ">Lorem ipsum dolor sit amet.</h5>
        <h5 className=" ts-4 ">Lorem ipsum dolor sit amet.</h5>
        <h5 className=" ts-5 ">Lorem ipsum dolor sit amet.</h5>
        <h5 className=" ts-6 ">Lorem ipsum dolor sit amet.</h5>
        `,
    }
    return (
        <>
            <h1 className={styles.text_main}>NBN Text</h1>
            <p className={styles.text_main}>Use NBN'css custom Text in your PROJECT</p>
            <h4 className={styles.heading}>1) TEXT colors</h4>
            <div className={styles.container}>
                <h5 className={styles.ctext1}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.ctext2}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.ctext3}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.ctext4}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.ctext5}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.ctext6}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.ctext7}>Lorem ipsum dolor sit amet.</h5>
            </div>
            <div className={styles.code}>
                <pre>
                    <code className="language-html">
                        {text_code.text_color}
                    </code>
                </pre>
            </div>

            <h4 className={styles.heading}>2) TEXT alignment</h4>
            <div className={styles.container}>
                <h5 className={styles.atext1}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.atext2}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.atext3}>Lorem ipsum dolor sit amet.</h5>
            </div>
            <div className={styles.code}>
                <pre>
                    <code className="language-html">
                        {text_code.text_align}
                    </code>
                </pre>
            </div>

            <h4 className={styles.heading}>3) TEXT transform</h4>
            <div className={styles.container}>
                <h5 className={styles.ttext1}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.ttext2}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.ttext3}>Lorem ipsum dolor sit amet.</h5>
            </div>
            <div className={styles.code}>
                <pre>
                    <code className="language-html">
                        {text_code.text_transform}
                    </code>
                </pre>
            </div>

            <h4 className={styles.heading}>4) TEXT size</h4>
            <div className={styles.container}>
                <h5 className={styles.stext1}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.stext2}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.stext3}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.stext4}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.stext5}>Lorem ipsum dolor sit amet.</h5>
                <h5 className={styles.stext6}>Lorem ipsum dolor sit amet.</h5>
            </div>
            <div className={styles.code}>
                <pre>
                    <code className="language-html">
                        {text_code.text_size}
                    </code>
                </pre>
            </div>

        </>
    )
}

export default text
