import React, { useState } from 'react';
import styles from './Header.module.css';

import HTBlogo from '../../assets/hackthebreak_logo.png';
import { links } from './anchorTags.json';

type Link = {
    label: string;
    href: string;
    title: string;
};

const Header: React.FC<{}> = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <header>
            <div className="container">
                <nav className={styles.header}>
                    <a className={styles['logo-container']} href="#welcome" title="Return to beginnings">
                        <img
                            className={styles.logo}
                            src={HTBlogo}
                            alt="Hack the Break Logo"
                        ></img>
                    </a>
                    <button 
                        className={styles.burgerNav}
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                        }}
                    > 
                        <svg width="35" height="27" viewBox="0 0 35 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="35" height="3" rx="1.5" fill="#2B2B2B"/>
                            <rect y="12" width="35" height="3" rx="1.5" fill="#2B2B2B"/>
                            <rect y="24" width="35" height="3" rx="1.5" fill="#2B2B2B"/>
                        </svg>
                    </button>
                    <div className={
                        isNavExpanded ? styles.gnExpanded : styles.gn
                    }>
                        <ul>
                            {links.map((link: Link) => {
                                return (
                                    <li key={link.href}>
                                        <a
                                            href={link.href} 
                                            title={link.title}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={
                            isNavExpanded ? styles.bannerBtnContainer : styles.bannerBtnClosed
                        }>
                            <button className={styles.bannerBtns}><a href="#signupform" title="Link to Register">Register now</a></button>
                            <button className={styles.bannerBtns}><a href="#about" title="Link to Sponsor us">Sponsor Us</a></button>
                    </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;