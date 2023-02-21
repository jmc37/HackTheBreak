import styles from "../styles/HeroBanner.module.css";
import React, { useEffect, useState } from "react";

const HeroBanner: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`03/11/2023`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: any[] = [];

  Object.keys(timeLeft).forEach((interval: string) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <p className={styles.countdownValues}>
        {timeLeft[interval as keyof typeof timeLeft]} <br /> {interval} <br />
      </p>
    );
  });

  return (
    <section className={styles.bannerSection} id="welcome">
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
          <div className={styles.countdownValuesBox}>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </div>
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
};

export default HeroBanner;
