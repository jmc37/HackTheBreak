import React from 'react';
import styles from '../styles/Socials.module.css';
import computingClubLogo from '../assets/computingclub_logo.png';
import bcitWicLogo from '../assets/bcitwic_logo.png';
import coding4all from '../assets/coding4all_logo.png';

function Socials() {

    return(
        <section className={styles.socialsSection}>
            <div className="container">
                <h2 className={styles.socialsHeading}>Hack the Break 2023 <br/> brought to you by:</h2>
                <ul className={styles.socialsContainer}>
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            title="Link to Computing Club"
                        >
                            <img src={computingClubLogo} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            title="Link to BCIT Women in Computing"
                        >
                            <img src={bcitWicLogo} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            target="_blank"
                            title="Link to Coding 4 All"
                        >
                            <img src={coding4all} />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Socials;