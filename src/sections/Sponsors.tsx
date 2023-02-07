import styles from '../styles/Sponsors.module.css';
import bcitsaLogo from '../assets/bcitsa_logo.png';
import ilmLogo from '../assets/ilm_logo.png';
import sapLogo from '../assets/sap_logo.png';
import mastercardLogo from '../assets/mastercard_logo.png';
import teckLogo from '../assets/teck_logo.png';

function Sponsors() {

    return(
        <section id="sponsors">
            <div className="container">
                <h2>Event Sponsors</h2>
                <div className={styles.sponsorBox}>
                    <img 
                        className={styles.sponsorLogo}
                        src={bcitsaLogo}
                        alt='BCIT Student Association Logo'
                    />
                    <img 
                        className={styles.sponsorLogo}
                        src={ilmLogo}
                        alt='Industrial Lights and Magic Logo'
                    />
                </div>
                <div className={styles.sponsorBox}>
                    <img 
                        className={styles.sponsorLogo}
                        src={sapLogo}
                        alt='SAP Software Solutions Logo'
                    />
                    <img 
                        className={styles.sponsorLogo}
                        src={mastercardLogo}
                        alt='Mastercard Logo'
                    />
                    <img 
                        className={styles.sponsorLogo}
                        src={teckLogo}
                        alt='Teck Resources Logo'
                    />
                </div>
                <button className={styles.sponsorBtn}>
                    <a 
                        className={styles.devpostLink}
                        href="https://hack-the-break-2022.devpost.com/" 
                        target={"_blank"} 
                        title="Link to BCIT Hack the Break Devpost">
                            Find full details about us on <span className={styles.devpostHighlight}>Devpost</span>!
                        </a>
                </button>
            </div>
        </section>
    );
}

export default Sponsors;