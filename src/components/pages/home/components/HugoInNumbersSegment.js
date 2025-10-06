import { useLocales } from "@components/hooks/useLocales";
import styles from "@styles/components/pages/home_partials/HugoInNumbers.module.css"
import { useRouter } from "next/router";

export default function HugoInNumbersSegment() {
    let { locale } = useRouter();
    let locales = useLocales();

    return (
        <div className={`mt-20 ${styles.HugoInNumbersSegment}`}>
            <h2 className={`sm:text-xl md:text-4xl font-bold text-center sm:mb-3 md:mb-10`}>{locales[locale].home.components.HugoInNumbersSegment.title}</h2>
            <p className={`sm:text-xl md:text-2xl text-center leading-normal`}>{locales[locale].home.components.HugoInNumbersSegment.description}</p>
        </div>
    );
}