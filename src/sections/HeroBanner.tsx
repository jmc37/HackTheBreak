import styles from "../styles/HeroBanner.module.css";

function HeroBanner() {
  return (
    <section className={styles.banner} id="welcome">
      <div className="container">
        <h1>Hack the Break 2023</h1>
        <p className={styles.tagline}>
          A student driven code-fest to ignite <br className="lineBreak" />
          your brains during reading break!
        </p>
        <div className={styles.eventDetails}>
          <p>March 11-12th</p>
          <p>"Hybrid Event"</p>
        </div>
        <div className={styles.countdown}>
          {/* countdown here */}
          <p>Until Registration Closes</p>
        </div>
        <div className={styles.bannerBtnContainer}>
          <button className={styles.bannerBtns}>
            <a href="#signupform" title="Link to Register">
              Register now
            </a>
          </button>
          <button className={styles.bannerBtns}>
            <a href="#about" title="Link to Sponsor us">
              Sponsor us
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
