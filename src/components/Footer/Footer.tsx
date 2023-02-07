import React from 'react';
import styles from "./Footer.module.css";

const Footer: React.FC<{}> = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; Hack the Break 2023. <br className="lineBreak" /> All rights reserved. <a className={styles.mlh_link} href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" title="Link to MLH Code of Conduct" target="_blank">MLH Code of Conduct</a></p>
        </footer>
    )
}

export default Footer;