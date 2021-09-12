import React, { useState } from 'react'
import styles from '../../styles/component/modal.module.css'

const modal = () => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);
    const [modal1, setModal1] = useState(true)
    const [modal2, setModal2] = useState(true)
    const [modal3, setModal3] = useState(true)

    const modal_code = {
        simple_modal: `
        <button class = "nbn-btn nbn-btn-warning" >Click Me</button>
        <div class = " nbn-modal ">
            <div class = "nbn-modal-content">
                <div class = "nbn-modal-header">
                    <button class = "nbn-close-btn" >&times;</button>
                    <h2> Header</h2>
                </div>
                <hr />
                <div class = "nbn-modal-body" >
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Porro optio earum alias tempora dolore modi, animi atque dolorum?
                     Dolores excepturi numquam delectus velit perspiciatis atque corrupti 
                     similique harum? Nulla, architecto?</p>
                </div>
            </div>
        </div>
        `,
        modal_footer: `
        <button class = "nbn-btn nbn-btn-warning" >Click Me</button>
        <div class = " nbn-modal ">
            <div class = "nbn-modal-content">
                <div class = "nbn-modal-header">
                    <button class = "nbn-close-btn" >&times;</button>
                    <h2> Header</h2>
                </div>
                <hr />
                <div class = "nbn-modal-body" >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Porro optio earum alias tempora dolore modi, animi atque dolorum?
                Dolores excepturi numquam delectus velit perspiciatis atque corrupti 
                similique harum? Nulla, architecto?</p>
                </div>
                <hr />
                <div class= " nbn-modal-footer ">
                    <button class= "nbn-btn nbn-btn-outline-danger" >Close</button>
                    <button class= "nbn-btn nbn-btn-outline-danger" >Submit</button>
                </div>
            </div>
        </div>
        `,
        animate_modal: `
        <div class = " nbn-modal ">
            <div class = "nbn-modal-content-animate">
                <div class = "nbn-modal-header">
                    <button class = "nbn-close-btn" >&times;</button>
                    <h2> Header</h2>
                </div>
                <hr />
                <div class = "nbn-modal-body" >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Porro optio earum alias tempora dolore modi, animi atque dolorum?
                Dolores excepturi numquam delectus velit perspiciatis atque corrupti 
                similique harum? Nulla, architecto?</p>
                </div>
            </div>
        </div>
        `
    }

    return (
        <div>
            <h1 className={styles.text_main}>NBN Modal</h1>
            <p className={styles.text_main}>Use NBN'css custom <strong>Modal</strong> in your PROJECT</p>
            <div className={styles.container}>
                <h4>1) Simple Modal :-</h4>
                <button className={styles.modal_btn} onClick={() => setModal1(!modal1)}>Click Me</button>
                <div className={modal1 ? styles.simple_modal : styles.simple_modal_click}>
                    <div className={styles.simple_modal_content}>
                        <div className={styles.modal_header}>
                            <button className={styles.modal_closebtn} onClick={() => setModal1(!modal1)}>&times;</button>
                            <h2> Header</h2>
                        </div>
                        <hr />
                        <div className={styles.modal_body}>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro optio earum alias tempora dolore modi, animi atque dolorum? Dolores excepturi numquam delectus velit perspiciatis atque corrupti similique harum? Nulla, architecto?</p>
                        </div>
                    </div>
                </div>
                <div className={styles.code}>
                    <pre>
                        <code className="language-html">
                            {modal_code.simple_modal}
                        </code>
                    </pre>
                </div>
                <br />
                <h4>2) Modal with Footer :-</h4>
                <button className={styles.modal_btn} onClick={() => setModal2(!modal2)}>Click Me</button>

                <div className={modal2 ? styles.simple_modal : styles.simple_modal_click}>
                    <div className={styles.simple_modal_content}>
                        <div className={styles.modal_header}>
                            <button className={styles.modal_closebtn} onClick={() => setModal2(!modal2)}>&times;</button>
                            <h2> Header</h2>
                        </div>
                        <hr />
                        <div className={styles.modal_body}>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quo, eum, porro ipsum accusantium eveniet dolorem atque laudantium suscipit illum vitae debitis est doloribus error. Facere dolor aspernatur quo provident!</p>
                        </div>
                        <hr />
                        <div className={styles.modal_footer}>
                            <button className={styles.nbn_btn} onClick={() => setModal2(!modal2)}>Close</button>
                            <button className={styles.nbn_btn}>Submit</button>
                        </div>
                    </div>
                </div>
                <div className={styles.code}>
                    <pre>
                        <code className="language-html">
                            {modal_code.modal_footer}
                        </code>
                    </pre>
                </div>
                <br />
                <h4>3) Animate Modal :-</h4>
                <button className={styles.modal_btn} onClick={() => setModal3(!modal3)}>Click Me</button>
                <div className={modal3 ? styles.simple_modal : styles.simple_modal_click}>
                    <div className={styles.simple_modal_content_animate}>
                        <div className={styles.modal_header}>
                            <button className={styles.modal_closebtn} onClick={() => setModal3(!modal3)}>&times;</button>
                            <h2> Header</h2>
                        </div>
                        <hr />
                        <div className={styles.modal_body}>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro optio earum alias tempora dolore modi, animi atque dolorum? Dolores excepturi numquam delectus velit perspiciatis atque corrupti similique harum? Nulla, architecto?</p>
                        </div>
                    </div>
                </div>
                <div className={styles.code}>
                    <pre>
                        <code className="language-html">
                            {modal_code.animate_modal}
                        </code>
                    </pre>
                </div>

            </div>
        </div >
    )
}

export default modal
