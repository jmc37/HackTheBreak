import styles from "../styles/Sponsors.module.css";
import bcitsaLogo from "../assets/bcitsa_logo.png";
import ilmLogo from "../assets/ilm_logo.png";
import sapLogo from "../assets/sap_logo.png";
import eaLogo from "../assets/ea_logo.png";
import mastercardLogo from "../assets/mastercard_logo.png";

function Sponsors() {
  return (
    <section id="sponsors">
      <div className="container">
        <h2>Event Sponsors</h2>
        <div className={styles.sponsorBox}>
          <a href="https://www.bcitsa.ca/">
            <img
              className={styles.sponsorLogoBCITSA}
              src={bcitsaLogo}
              alt="BCIT Student Association Logo"
            />
          </a>
          <a href="https://www.mastercard.ca/">
            <img
              className={styles.sponsorLogo}
              src={mastercardLogo}
              alt="Mastercard Logo"
            />
          </a>
          <a href="https://www.sap.com/index.html">
            <img
              className={styles.sponsorLogo}
              src={sapLogo}
              alt="SAP Software Solutions Logo"
            />
          </a>
        </div>
        <div className={styles.sponsorBox}>
          <a href="https://www.ea.com/">
            <img className={styles.sponsorLogo} src={eaLogo} alt="EA Logo" />
          </a>
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
