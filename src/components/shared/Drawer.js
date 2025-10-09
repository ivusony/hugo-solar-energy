import { useLocales } from "@components/hooks/useLocales";
import styles from "@styles/components/shared/Drawer.module.css"
import { useAppContext } from "components/hooks/useAppContext"
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


const navLinksData = [
    {
        nameKey: 'home',
        href: '/',
    },
    {
        nameKey: 'company', 
        href: '/our-story',
    },
    {
        nameKey: 'solar_energy_general', 
        subLinks: [
            {
                nameKey: 'solar_energy',
                href: '/solar-energy',
            },
            {
                nameKey: 'solar_roofs',
                href: '/solar-energy/commercial-solar-roofs',
            },
            {
                nameKey: 'solar_parks',
                href: '/solar-energy/industrial-solar-parks',
            },
        ]
    },
    {
        nameKey: 'our_services',
        subLinks: [
            {
                nameKey: 'our_services',
                href: '/our_services'
            },
            {
                nameKey: 'project_development',
                href: '/our_services/project-development'
            },
            {
                nameKey: 'engineering_and_build',
                href: '/our_services/engineering_and_build'
            },
            {
                nameKey: 'operation_and_maintenance',
                href: '/our_services/operation-and-maintenance'
            },
            {
                nameKey: 'sales_of_equipment',
                href: '/our_services/sales-of-equipment'
            }
        ]
    }
];


const NavLink = ({ link, locale, locales, toggleDrawer }) => (
    <li className="mb-3">
        <a
            href={locale !== 'sr' ? `/${locale}${link.href}` : link.href}
            onClick={toggleDrawer} // Close drawer on link click
            // Merged and cleaned Tailwind classes
            className="py-2 pl-0 text-xl font-semibold tracking-wider transition-colors duration-200 ease-in-out hover:text-[var(--color-secondary)]"
        >
            {`${locales[locale].menu[link.nameKey]}`.toUpperCase()}
        </a>
    </li>
);

// Component for links that open an accordion dropdown
const AccordionItem = ({ link, locale, locales, toggleDrawer }) => {
    // State to manage the open/close of the accordion
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = (e) => {
        e.preventDefault(); 
        // Toggle the accordion state, close if already open
        setIsOpen(!isOpen);
    };

    return (
        <li className="mb-3">
            {/* Accordion Header (The main clickable button) */}
            <button
                onClick={toggleAccordion}
                className="flex justify-between items-center w-full  text-xl font-semibold tracking-wider transition-colors duration-200 ease-in-out hover:text-[var(--color-secondary)]"
            >
                {`${locales[locale].menu[link.nameKey]}`.toUpperCase()}
                {/* Chevron icon for visual feedback */}
                <svg
                    className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            
            <div
                
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
            >
                {/* Visual indicator for sub-links */}
                <ul className="pl-4 border-l-2 border-[var(--color-secondary)]">
                    {link.subLinks.map((subLink, index) => (
                        <li key={index} className="mb-2">
                            <a
                                href={ locale !== 'sr' ? `/${locale}${subLink.href}` : subLink.href}
                                onClick={toggleDrawer} // Close drawer when a sub-link is clicked
                                className="block py-1 text-lg font-medium transition-colors duration-200 ease-in-out hover:text-[var(--color-secondary)]"
                            >
                                {`${locales[locale].menu[subLink.nameKey]}`.toUpperCase()}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
};


// --- Main Drawer Component ---

export default function Drawer() {

    let { locale } = useRouter();
    let locales = useLocales();
    let { state, setState, toggleDrawer } = useAppContext();
    let { drawerVisible } = state;

    // define function: if scrollY > 0 add class 'scrolled' to .mainNavi
    function handleScroll() {
        const navbarDrawerControls = document.querySelector(`.${styles.navbarDrawerControls}`);
        if (window.scrollY > 0) {
            navbarDrawerControls.classList.add(styles.scrolled);
        } else {
            navbarDrawerControls.classList.remove(styles.scrolled);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const drawer = document.querySelector(`.${styles.navbarDrawer}`);
        if (drawerVisible) {
            drawer.classList.add(styles.visible);
        } else {
            drawer.classList.remove(styles.visible);
        }
    }, [drawerVisible]);


    return (
        <div className={styles.navbarDrawer}>
            <div className={styles.navbarDrawerContainer}>
                <div className={styles.navbarDrawerControls}>
                    <button
                        onClick={toggleDrawer}
                        className={styles.navbarDrawerCloseButton}
                    >
                        <svg height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z" fill="#080341" />
                        </svg>
                    </button>
                </div>

                {/* --- MAPPED NAVIGATION LINKS (The core change) --- */}
                <ul className={styles.navbarDrawerLinks}>
                    {navLinksData.map((link, index) => {
                        // Check if the link has sub-links defined in the data
                        if (link.subLinks) {
                            return (
                                <AccordionItem
                                    key={index}
                                    link={link}
                                    locale={locale}
                                    locales={locales}
                                    toggleDrawer={toggleDrawer}
                                />
                            );
                        } else {
                            // If not, render a simple link
                            return (
                                <NavLink
                                    key={index}
                                    link={link}
                                    locale={locale}
                                    locales={locales}
                                    toggleDrawer={toggleDrawer}
                                />
                            );
                        }
                    })}
                </ul>
                {/* ------------------------------------------------ */}


            </div>
        </div>
    )
}