import styles from '../styles/Themes.module.css';
import themeImage from '../assets/themes_bucket.png';

function Themes() {

    return(
        <section id="theme" className="container section-no-padding">
            <div className={styles.themeSection}>
                <div className={styles.writtenContainer}>
                    <h2>This Year's Theme: XYZ</h2>
                    <p>Blurb about the theme, our goals for it, how to relates to / can be beneficial for a portfolio, etc. Something to do with hackathon problem/challenge, and flexibility for solutions that solve real-world issues, etc.</p>
                    <button className={styles.themeBtn}>
                        <a className={styles.themeBtnLink} href="https://hack-the-break-2022.devpost.com/project-gallery" target={"_blank"} title="Link to Devpost">Check out last year's projects!</a>
                    </button>
                </div>
                <div className={styles.themeImageContainer}>
                    <img 
                        className={styles.themeImage}
                        src={themeImage} 
                        alt='Theme Image'
                    />
                </div>
            </div>
        </section>
    );
}

export default Themes;