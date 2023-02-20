import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { links } from './anchorTags.json';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

type Link = {
    label: string;
    href: string;
    title: string;
};

const Header: React.FC<{}> = () => {

    // Collapsible Burger Menu
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    // Sticky Nav that disappears on scroll down
    const [position, setPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            let scrolling = window.pageYOffset;
            setVisible(position > scrolling);
            setPosition(scrolling);
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    const header = visible ? "visible" : "hidden";

    return (
        <header className={header}>
            <div className="container header">
                <a className={styles.logoContainer} href="#welcome" title="Return to beginnings">
                    <svg className={styles.logo} version="1.0" xmlns="http://www.w3.org/2000/svg" width="80.000000pt" height="80.000000pt" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)"
                            fill="#102d52" stroke="none">
                            <path d="M366 755 c-3 -9 -6 -45 -6 -80 0 -66 13 -90 47 -83 16 3 18 14 18 88
                            0 84 0 85 -26 88 -17 2 -29 -3 -33 -13z"/>
                            <path d="M584 629 c-43 -41 -54 -58 -52 -78 5 -44 36 -38 94 20 58 57 66 82
                            34 99 -17 9 -28 4 -76 -41z"/>
                            <path d="M132 658 c-19 -19 -15 -26 39 -84 55 -57 82 -67 99 -34 9 17 4 28
                            -41 75 -52 55 -75 65 -97 43z"/>
                            <path d="M33 453 c-8 -3 -13 -25 -13 -59 l0 -54 180 0 c99 0 180 4 180 8 0 4
                            -24 31 -53 60 l-53 52 -114 -1 c-63 0 -121 -3 -127 -6z"/>
                            <path d="M424 449 c-3 -6 15 -33 42 -60 l49 -50 130 3 130 3 3 49 c2 32 -1 52
                            -10 57 -20 13 -336 11 -344 -2z"/>
                            <path d="M182 227 c-53 -53 -66 -90 -36 -101 23 -9 21 -10 80 45 57 55 67 82
                            35 99 -26 13 -20 17 -79 -43z"/>
                            <path d="M525 249 c-6 -17 4 -33 46 -75 56 -57 82 -65 103 -32 9 15 1 27 -44
                            73 -58 59 -94 71 -105 34z"/>
                            <path d="M371 191 c-15 -28 -14 -134 2 -155 10 -13 20 -16 36 -11 21 6 22 11
                            19 93 -3 81 -5 87 -25 90 -14 2 -26 -4 -32 -17z"/>
                            </g>
                    </svg>
                </a>
                <button 
                    className={styles.burgerNav}
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}
                > 
                    <MenuSharpIcon fontSize="large" aria-label="hamburger menu"></MenuSharpIcon>
                </button>
                <nav className={
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
                </nav>
            </div>
        </header>
    )
}

export default Header;