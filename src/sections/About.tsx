import styles from '../styles/About.module.css';

function About() {

    return(
        <section id="about" className="container">
            <div className={styles.aboutSection}>
                <h2 className={styles.aboutHeader}>About Hack<br className="headingBreak" /> the Break</h2>
                <div className={styles.statContainer}>
                    {/* Carousel  */}
                    <div className={styles.statBoxLight}>
                        <p>-3- <br /> Years</p>
                    </div>
                    <div className={styles.statBoxLight}>
                        <p>200+ <br /> Hackers</p>
                    </div>
                    <div className={styles.statBoxDark}>
                        <p>$5000+ <br /> Prizes</p>
                    </div>
                    <div className={styles.statBoxDark}>
                        <p>40+ <br /> Projects</p>
                    </div>
                </div>
                <div className={styles.writtenContainer}>
                    <p>We are a student driven code-fest brought to you by BCIT computing clubs, including the Computing Club, Women in Computing, Coding 4 All, & Part Time Computing Club.</p>
                    <p>Started in 2021, our annual hackathon has helped provide BCIT and other students a chance to try something new during Spring break.</p>
                </div>
            </div>
        </section>
    );
}

export default About;