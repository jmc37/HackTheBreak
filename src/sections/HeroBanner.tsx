import React from "react";
import styles from "../styles/HeroBanner.module.css";

function HeroBanner() {

    return(
        <section className={styles.banner}>
            <h1>Hack the Break 2023</h1>
            <p className={styles.tagline}>tagline</p>
            <div className={styles.eventDetails}>
                <p>March 11-12th</p>
                <p>"Hybrid Event"</p>
            </div>
            <div className={styles.countdown}>
                {/* countdown here */}
                <p>Until Registration Closes</p>
            </div>
            <div className={styles.bannerBtnContainer}>
                <button><a href="#" title="Link to Register">Register</a></button>
                <button><a href="#" title="Link to Learn more">Learn more</a></button>
            </div>
        </section>
    );
}

export default HeroBanner;