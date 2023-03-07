import styles from "../styles/Sponsors.module.css";
import bcitsaLogo from "../assets/bcitsa_logo.png";
import sapLogo from "../assets/sap_logo.png";
import eaLogo from "../assets/ea_logo.png";
import mastercardLogo from "../assets/mastercard_logo.png";
import lululemonLogo from "../assets/lululemon_logo.png";

function Sponsors() {
  return (
    <section id="sponsors">
      <div className="container">
        <h2>Event Sponsors</h2>
        <div className={styles.sponsorBoxTier1}>
          <img
            className={`${styles.sponsorLogo} ${styles.sponsorLogoTier1}`}
            src={bcitsaLogo}
            alt="BCIT Student Association Logo"
            onClick={() => window.open("https://www.bcitsa.ca/", "_blank")}
          />

          <img
            className={`${styles.sponsorLogo} ${styles.sponsorLogoTier1}`}
            src={mastercardLogo}
            alt="Mastercard Logo"
            onClick={() => window.open("https://www.mastercard.ca/", "_blank")}
          />
        </div>
        <div className={styles.sponsorBoxTier2}>
          <img
            className={`${styles.sponsorLogo} ${styles.sponsorLogoTier2}`}
            src={sapLogo}
            alt="SAP Software Solutions Logo"
            onClick={() =>
              window.open("https://www.sap.com/canada/index.html", "_blank")
            }
          />
          <img
            className={`${styles.sponsorLogo} ${styles.sponsorLogoTier2}`}
            src={lululemonLogo}
            alt="Lululemon Logo"
            onClick={() => window.open("https://shop.lululemon.com/", "_blank")}
          />
        </div>
        <div className={styles.sponsorBoxTier3}>
          <img
            className={`${styles.sponsorLogo} ${styles.sponsorLogoTier3}`}
            src={eaLogo}
            alt="EA Logo"
            onClick={() => window.open("https://www.ea.com/", "_blank")}
          />
        </div>

        <button className={styles.sponsorBtn}>
          <a
            className={styles.devpostLink}
            href="https://hack-the-break-2023.devpost.com/?preview_token=xv4Hin%2Bqb5evDNjBNiMqTIR7BvKqh7xZt6rLEke49Co%3D"
            target="_blank"
            title="Link to BCIT Hack the Break Devpost"
          >
            Find full details about us on{" "}
            <span className={styles.devpostHighlight}>Devpost</span>!
          </a>
        </button>
      </div>
    </section>
  );
}

export default Sponsors;
