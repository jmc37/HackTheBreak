import React from 'react';
import styles from './Header.module.css';

import HTBlogo from '../../assets/hackthebreak2022_logo.png';
import { links } from './anchorTags.json';

type Link = {
    label: string;
    href: string;
    title: string;
};

const Header: React.FC<{}> = () => {
    return (
        <header className={styles.header}>
            <a className={styles['logo-container']} href="" title="">
                <img
                    className={styles.logo}
                    src={HTBlogo}
                    alt="Hack the Break 2023 Wordmark Logo"
                ></img>
            </a>
            {/* <button className={styles.gnTrigger}></button> */}
            <div className={styles.gn}>
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
            </div>
        </header>
    )
}

export default Header;