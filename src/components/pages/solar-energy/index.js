import styles from "@styles/components/pages/SolarEnergy.module.css"
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useLocales } from "@components/hooks/useLocales";
import SolarEnergySegment from "./components/SolarEnergySegment";
import SolarIndustrySegment from "./components/SolarIndustrySegment";

export default function SolarEnergy() {

    let { locale } = useRouter();
    let locales = useLocales();

    // on scroll, page-banner offset should be calculated, so that #id page-label slades slightly to bottom, to give parallax effect
    function handleScroll() {
        const banner = document.getElementById('page-banner');
        const label = document.getElementById('page-label');
        if (banner && label) {
            const offset = window.pageYOffset;
            label.style.transform = `translateY(${offset * 0.3}px)`;
        }
    }

    // add event listener to window on component mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []); 

    return (
        <div id="solar-energy" className={`${ styles.SolarEnergy }`}>
            <div id="page-banner" className="h-[100vh] flex items-center justify-center">
                <Image
                    src="/assets/images/stock/solar-energy.jpg"
                    alt="Solar Energy Banner"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <h1 id='page-label' className="text-white text-5xl md:text-6xl lg:text-6xl font-bold z-10 tracking-wider" style={{ textShadow: '0 5px 17px rgba(255, 255, 255, 0.7)' }}>{ locales[locale].solar_energy.banner.h1 }</h1>
            </div>

            <SolarEnergySegment />

            <SolarIndustrySegment />
        </div>
    );
}