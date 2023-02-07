import styles from "../styles/HeroBanner.module.css";

function HeroBanner() {

    return(
        <section className={styles.banner}>
            <div className="container">
                <h1>Hack the Break 2023</h1>
                <p className={styles.tagline}>A student driven code-fest to ignite <br />your brains during reading break!</p>
                <div className={styles.eventDetails}>
                    <h3>March 11-12th</h3>
                    <h3>"Hybrid Event"</h3>
                </div>
                <div className={styles.countdown}>
                    {/* countdown here */}
                    <p>Until Registration Closes</p>
                </div>
                <div className={styles.bannerBtnContainer}>
                    <button className={styles.bannerBtns}><a href="#signupform" title="Link to Register">Register now</a></button>
                    <button className={styles.bannerBtns}><a href="#about" title="Link to Learn more">Learn more</a></button>
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;