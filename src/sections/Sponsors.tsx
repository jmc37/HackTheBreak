import React from 'react';
import styles from '../styles/Sponsors.module.css';
import sponsorLogo1 from '../assets/hackthebreak2022_logo.png';

function Sponsors() {

    return(
        <section id="sponsors">
            <h2>Event Sponsors</h2>
            <div className={styles.sponsorBox}>
                <img 
                    className={styles.sponsorLogo}
                    src={sponsorLogo1}
                    alt='Sponsor Logo'
                />
                <img 
                    className={styles.sponsorLogo}
                    src={sponsorLogo1}
                    alt='Sponsor Logo'
                />
                <img 
                    className={styles.sponsorLogo}
                    src={sponsorLogo1}
                    alt='Sponsor Logo'
                />
            </div>
            <button className={styles.sponsorBtn}>
                <a 
                    href="https://hack-the-break-2022.devpost.com/" 
                    target={"_blank"} 
                    title="Link to BCIT Hack the Break Devpost">
                        Find full details about us on Devpost!
                    </a>
            </button>
        </section>
    );
}

export default Sponsors;