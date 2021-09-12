import React from 'react'
import styles from '../../styles/component/card.module.css'

const card = () => {
    React.useEffect(() => {
        Prism.highlightAll();
    }, []);
    const card_code = {
        simple_card: `
        <div class=" NBN_card " style= " width : 500px ">
            <h4 class=" NBN_card_title ">THis is Tiltle</h4>
            <div class=" NBN_card_body ">
                <p class=" NBN_card_text ">Lorem ipsum dolor sit amet, consecte 
                adipisicing elit. Perferendis dolorem et mollitia eligendi 
                libero, odio reiciendis porro repellat laudantium est.</p>
                <hr />
                <button class=" NBN_card_btn ">click1</button>
                <button class=" NBN_card_btn ">click2</button>
            </div>
        </div>
        `,

        image_card: `
        <div class=" NBN_card " style= " width : 500px ">
            <img src="..." alt="...." class=" NBN_card_image "/>
            <div class=" NBN_card_body ">
                <p class=" NBN_card_text ">Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Perferendis dolorem et mollitia eligendi 
                    libero, odio reiciendis porro repellat laudantium est.</p>
                <hr />
                <button class=" NBN_card_btn ">click1</button>
                <button class=" NBN_card_btn ">click2</button>
            </div>
        </div>
        `,

        flip_card: `
        <div class=" NBN_card, styles.NBN_flip_card " style= " width : 500px ">
            <div class=" NBN_flip_inner ">
                <div class=" NBN_flip_front ">
                    <img src="...." alt="..." class=" NBN_card_image " />
                </div>
                <div class=" NBN_card_body, styles.NBN_flip_back ">
                    <h4 class=" NBN_card_title ">THis is Tiltle</h4>
                    <p class=" NBN_card_text ">Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Perferendis dolorem et mollitia eligendi libero, 
                        odio reiciendis porro repellat laudantium est.</p>
                    <hr />
                    <button class=" NBN_card_btn ">click1</button>
                    <button class=" NBN_card_btn ">click2</button>
                </div>
            </div>
        </div>
        `,

    }
    return (
        <>
            <h1 className={styles.text_main}>NBN Cards</h1>
            <p className={styles.text_main}>Use NBN'css custom <strong>CARDS</strong> in your PROJECT</p>
            <div className={styles.container}>
                <h5 className={styles.heading}>1) Simple Card</h5>
                <div className={styles.NBN_card}>
                    <h4 className={styles.NBN_card_title}>THis is Tiltle</h4>
                    <div className={styles.NBN_card_body}>
                        <p className={styles.NBN_card_text}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Perferendis dolorem et mollitia eligendi libero, odio reiciendis porro repellat laudantium est.</p>
                        <hr />
                        <button className={styles.NBN_card_btn}>click1</button>
                        <button className={styles.NBN_card_btn}>click2</button>
                    </div>
                </div>
                <div className={styles.code}>
                    <pre>
                        <code className="language-html">
                            {card_code.simple_card}
                        </code>
                    </pre>
                </div>
                <h5 className={styles.heading}>2) Image Card</h5>
                <div className={styles.NBN_card}>
                    <img src="https://source.unsplash.com/1600x900/?nature,water" alt="monster" className={styles.NBN_card_image} />
                    <div className={styles.NBN_card_body}>
                        <p className={styles.NBN_card_text}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Perferendis dolorem et mollitia eligendi libero, odio reiciendis porro repellat laudantium est.</p>
                        <hr />
                        <button className={styles.NBN_card_btn}>click1</button>
                        <button className={styles.NBN_card_btn}>click2</button>
                    </div>
                </div>
                <div className={styles.code}>
                    <pre>
                        <code className="language-html">
                            {card_code.image_card}
                        </code>
                    </pre>
                </div>
                <h5 className={styles.heading}>3) Flip Card</h5>
                <div className={styles.NBN_card, styles.NBN_flip_card}>
                    <div className={styles.NBN_flip_inner}>
                        <div className={styles.NBN_flip_front}>
                            <img src="https://source.unsplash.com/1600x900/?women,men" alt="monster" className={styles.NBN_card_image} />
                        </div>
                        <div className={styles.NBN_card_body, styles.NBN_flip_back}>
                            <h4 className={styles.NBN_card_title}>THis is Tiltle</h4>
                            <p className={styles.NBN_card_text}>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Perferendis dolorem et mollitia eligendi libero, odio reiciendis porro repellat laudantium est.</p>
                            <hr />
                            <button className={styles.NBN_card_btn}>click1</button>
                            <button className={styles.NBN_card_btn}>click2</button>
                        </div>
                    </div>
                </div>
                <div className={styles.code}>
                    <pre>
                        <code className="language-html">
                            {card_code.flip_card}
                        </code>
                    </pre>
                </div>
            </div>
        </>
    )
}

export default card
