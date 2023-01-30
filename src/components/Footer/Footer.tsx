import React from 'react';
import styles from "./Footer.module.css";

const Footer: React.FC<{}> = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; Hack the Break 2023. All rights reserved. <a>MLH Code of Conduct</a></p>
        </footer>
    )
}

export default Footer;