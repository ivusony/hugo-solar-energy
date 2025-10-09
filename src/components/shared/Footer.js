import { useLocales } from "@components/hooks/useLocales";
import styles from "@styles/components/shared/Footer.module.css"
import Link from "next/link";
import { useRouter } from "next/router";


export default function Footer(){

    const { locale, pathname } = useRouter();
    const locales = useLocales();

    function scrollToTop(e) {
        if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }


    return (
        <div className={`pb-5 ${styles.Footer}`}>
            <div className={styles.FooterContent}>
                {/* two even columns, stackabe on small screens - grid with 1 column on small screens, 2 columns on medium and larger screens.  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 pb-5 border-b-1 border-blue-900">
                    <div id="social" className={`flex justify-center md:justify-start`}>
                        <a 
                            href="https://www.facebook.com/hugo.solar.energy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className=" p-3 md:pl-0"
                        >
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" >
                                <path fillRule="evenodd" clipRule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#fff"/>
                            </svg>
                        </a>
                        <a 
                            href="https://www.instagram.com/hugosolarenergy" 
                            target="_blank" 
                            rel="noopener noreferrer"   
                            className=" p-3"
                        >
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" >
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#fff"/>
                                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#fff"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#fff"/>
                            </svg>
                        </a>
                        <a 
                            href="https://www.youtube.com/@HugoSolarEnergy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3"
                        >
                            <svg fill="#fff" height="30px" width="30px" viewBox="-143 145 512 512" >
                                <g>
                                    <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
                                        M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"/>
                                    <path d="M196.9,311.2H29.1c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5
                                        C241,355.3,241,311.2,196.9,311.2z M78.9,450.3v-98.5l83.8,49.3L78.9,450.3z"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                    {/* should be hidden on mobile */}
                    <div id="quick-links" className="hidden md:flex md:justify-end ">
                        <Link href="/" locale={locale} className="mr-4 p-3 pl-0" title="Go to Home page" aria-description="Go to Home page" aria-label="Home page" onClick={scrollToTop}>{ locales[locale].menu.home }</Link>
                        <Link href="/our-story" className="mr-4 p-3" title="Learn more about our company" aria-description="Learn more about our company" aria-label="Company information">{ locales[locale].menu.company }</Link>
                        <Link href="/solar-energy" className="mr-4 p-3" title="Learn more about solar energy" aria-description="Learn more about solar energy" aria-label="Solar Energy">{ locales[locale].menu.solar_energy }</Link>
                        <Link href="/services" className="mr-4 p-3" title="View our services" aria-description="View our services" aria-label="Services">{ locales[locale].menu.services.main }</Link>
                        <Link href="/projects" className="mr-4 p-3" title="See our projects" aria-description="See our projects" aria-label="Projects">{ locales[locale].menu.projects.main }</Link>
                        <Link href="/contact" className="p-3 pr-0" title="Contact us" aria-description="Contact us" aria-label="Contact page">{ locales[locale].menu.contact }</Link>
                    </div>
                </div>

                <div id="company-info" className="relative pt-10 pb-10 sm:text-center md:text-left">
                    <h4 className="text-2xl font-semibold mb-3">Hugo Solar Energy</h4>
                    <p className="text-lg mb-3">Valjevski put 302 | 11000 Stubline | SERBIA</p>
                    <p className="text-lg ">Phone: +381 61 1823733 | Email: <a href="mailto:info@hugosolarenergy.rs">info@hugosolarenergy.rs</a></p>
                    {/* absolut position on right of the logo, only visible on larger screens */}

                    <div id="logo" className="absolute right-0 top-10 hidden lg:block">
                        <img src="/assets/hugo_logo.png" alt="Hugo Solar Energy Logo" className="h-30"/>
                    </div>
                </div>

                <div id="useful-links" className="pt-10 pb-10 border-b-1 border-blue-900">
                    <a href="https://re.jrc.ec.europa.eu" target="_blank" rel="noopener noreferrer" className="underline mr-4">PVGIS - European Commission</a>
                    <a href="https://energetskiportal.rs/" target="_blank" rel="noopener noreferrer" className="underline mr-4">Energetski Portal</a>
                    <a href="https://ems.rs/" target="_blank" rel="noopener noreferrer" className="underline mr-4">EMS</a>
                    <a href="https://elektrodistribucija.rs/" target="_blank" rel="noopener noreferrer" className="underline mr-4">EPS Distribucija</a>
                    <a href="https://aers.rs/" target="_blank" rel="noopener noreferrer" className="underline mr-4">AERS</a>
                </div>
               
                <div id="copyright_and_development" className="pt-10 pb-">
                    <p>© 2025 Hugo Solar Energy. All rights reserved.</p>
                    <p>Website by <a href="https://radevix.com" target="_blank" rel="noopener noreferrer" className="underline">RADEVIX</a></p>
                </div>
            </div>
        </div>
    );
}