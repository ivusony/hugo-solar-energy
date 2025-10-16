import { useRouter } from "next/router";
import { useEffect } from "react";

import Drawer from "./Drawer";

import styles from "@styles/components/shared/MainNavi.module.css";
import { useAppContext } from "components/hooks/useAppContext";

export default function MainNavi() {

    let router = useRouter();
    let { state, setState, toggleDrawer } = useAppContext();
    let { locale } = router;


    // define function: if scrollY > 0 add class 'scrolled' to .mainNavi
    function handleScroll() {
        const mainNavi = document.querySelector(`.${styles.mainNavi}`);
        const navbarBrandName = document.querySelector(`#navbar-brand-name`);
        const languageSelect = document.querySelector(`.${styles.languageSelect}`);
        if (window.scrollY > 0) {
            mainNavi.classList.add(styles.scrolled);
            languageSelect.classList.add(styles.scrolled);
        } else {
            mainNavi.classList.remove(styles.scrolled);
            languageSelect.classList.remove(styles.scrolled);
        }
        // if scrollY > viewport height add class 'opacity-100' to #navbar-brand-name, else remove it
        if (window.scrollY > window.innerHeight) {
            navbarBrandName.classList.add("opacity-100");
            navbarBrandName.classList.remove("opacity-0");
        } else {
            navbarBrandName.classList.remove("opacity-100");
            navbarBrandName.classList.add("opacity-0");
        }

    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <nav className={styles.mainNavi}>
            
            <div className={styles.navbarContainer}>
                <div className={styles.navbarMain}>
                    <button
                        className={styles.navbarToggler}
                        onClick={
                            e => {
                                e.stopPropagation();
                                toggleDrawer();
                            }
                        }
                    >   
                        <span
                            className={styles.navbarTogglerIconContainer}
                        >
                            <svg height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                    <span className={styles.contactInfo}>
                        <svg height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <a className={styles.contactInfo} href="mailto:info@example.com">
                        {/* import svg icon from assets/icons/mail.svg */}
                        <svg  height="17px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>

                    {/* language select dropdown with SR and EN, with SR as default, select component styled with tailwind, next Link implementation, floated right. Simple implementation */}
                    <div className={styles.languageSelect}>
                        <select
                            value={locale}
                            onChange={(e) => {
                                const locale = e.target.value;
                                const path = router.asPath;
                                router.push(path, path, { locale });
                            }}
                        >
                            <option value="sr">SR</option>
                            <option value="en">EN</option>
                        </select>
                    </div>
                </div>
                <div className={ `font-bold text-lg flex justify-end items-center w-[30%] text-white tracking-wider     ${styles.navbarBrand}`}>
                    <span id="navbar-brand-name" className="mr-5 hidden md:block opacity-0 transition-opacity duration-900 text-[var(--color)]">HUGO SOLAR ENERGY</span>
                    <img className={ styles.mainNaviLogo } src="/assets/hugo_logo.png" alt="Hugo Solar Energy Logo" />
                </div>
            </div>

            <Drawer />
            
        </nav>
    );
}
