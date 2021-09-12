import React from 'react'
import styles from '../styles/About.module.css'
import Link from 'next/link'

const about = () => {
    return (
        <>
            <h2 className={styles.heading}>Our Contributors</h2>
            <div className={styles.container}>
                <div className={styles.container}>
                    <div className={styles.table}>
                        <div className={styles.name}>
                            Mahesh Gaikwad
                        </div>
                        <div className={styles.image}>
                            <img src="/maheshgaikwad.jpg" alt="" height="150" width="100%" />
                        </div>
                        <div className={styles.social_link}>
                            <div className={styles.linkdin}>
                                <a className={styles.linkdin_a} href="https://www.linkedin.com/in/code-with-monster-12b3521aa/" target="_blank"><i className="fab fa-linkedin"></i></a>
                            </div>
                            <div className={styles.github}>
                                <a className={styles.github_a} href="https://github.com/monstermahi982" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.name}>
                            Kunal Gunjal
                        </div>
                        <div className={styles.image}>
                            <img src="/user.jpg" alt="" height="150" width="100%" />
                        </div>
                        <div className={styles.social_link}>
                            <div className={styles.linkdin}>
                                <a className={styles.linkdin_a} href="https://www.linkedin.com/in/kunal-gunjal-3a23431ab" target="_blank"><i className="fab fa-linkedin"></i></a>

                            </div>
                            <div className={styles.github}>
                                <a className={styles.github_a} href="https://github.com/Kun0912" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.name}>
                            Anshuli Kumari
                        </div>
                        <div className={styles.image}>
                            <img src="/female_dummy.jpg" alt="" height="150" width="100%" />
                        </div>
                        <div className={styles.social_link}>
                            <div className={styles.linkdin}>
                                <a className={styles.linkdin_a} href="https://www.linkedin.com/in/anshuli-kumari-433743192" target="_blank"><i className="fab fa-linkedin"></i></a>

                            </div>
                            <div className={styles.github}>
                                <a className={styles.github_a} href="https://github.com/Anshuli21" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.name}>
                            Divya Chaprwal
                        </div>
                        <div className={styles.image}>
                            <img src="/female_dummy.jpg" alt="" height="150" width="100%" />
                        </div>
                        <div className={styles.social_link}>
                            <div className={styles.linkdin}>
                                <a className={styles.linkdin_a} href="https://www.linkedin.com/in/divya-chhaprwal-80888619b" target="_blank"><i className="fab fa-linkedin"></i></a>

                            </div>
                            <div className={styles.github}>
                                <a className={styles.github_a} href="https://github.com/Divya-ch11" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.name}>
                            Digvijaysing Rajput
                        </div>
                        <div className={styles.image}>
                            <img src="/user.jpg" alt="" height="150" width="100%" />
                        </div>
                        <div className={styles.social_link}>
                            <div className={styles.linkdin}>
                                <a className={styles.linkdin_a} href="#" target="_blank"><i className="fab fa-linkedin"></i></a>

                            </div>
                            <div className={styles.github}>
                                <a className={styles.github_a} href="#" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.name}>
                            Swati Warade
                        </div>
                        <div className={styles.image}>
                            <img src="/female_dummy.jpg" alt="" height="150" width="100%" />
                        </div>
                        <div className={styles.social_link}>
                            <div className={styles.linkdin}>
                                <a className={styles.linkdin_a} href="#" target="_blank"><i className="fab fa-linkedin"></i></a>

                            </div>
                            <div className={styles.github}>
                                <a className={styles.github_a} href="https://github.com/swati-279" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.name}>
                            Vaishnavi Gaikwad
                        </div>
                        <div className={styles.image}>
                            <img src="/female_dummy.jpg" alt="" height="150" width="100%" />
                        </div>
                        <div className={styles.social_link}>
                            <div className={styles.linkdin}>
                                <a className={styles.linkdin_a} href="https://www.linkedin.com/in/vaishnavi-gaikwad-488523202" target="_blank"><i className="fab fa-linkedin"></i></a>

                            </div>
                            <div className={styles.github}>
                                <a className={styles.github_a} href="https://github.com/VaishnaviGaikwad123" target="_blank"><i className="fab fa-github"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default about
