import { useLocales } from "@components/hooks/useLocales";
import introMediaStyles from "@styles/components/pages/home_partials/IntroMediaSegment.module.css"
import { useRouter } from "next/router"


export default function IntroMediaSegment() {

    let { locale } = useRouter();
    let locales = useLocales();

    // function to scroll down to the next segment, smoothly. Determine introMediaSegment offset height, and scroll down by that height

    const scrollToNextSegment = () => {
        const introMediaSegment = document.querySelector(`.${introMediaStyles.introMediaSegment}`);
        if (!introMediaSegment) return;
        const segmentBottom = introMediaSegment.getBoundingClientRect().bottom + window.scrollY;
        const scrollDistance = segmentBottom - window.scrollY;
        window.scrollBy({
            top: scrollDistance,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className={introMediaStyles.introMediaSegment}>
            <video className={introMediaStyles.introMediaVideo} autoPlay muted loop>
                <source src="/assets/intro-media-video/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={introMediaStyles.introMediaTextBox}>
                {/* h1 should be white, big on desktop, smaller on mobile */}
                <h1>HUGO SOLAR ENERGY</h1>
                <h2>{locales[locale].home.components.IntroMediaSegment.introMediaTextBox}</h2>
            </div>
            <span
                className={introMediaStyles.scrollDownIndicator}
                onClick={scrollToNextSegment}
            >
                <svg width="40px" height="40px" viewBox="-2 -2 36 36" >
                    <g stroke="none" strokeWidth="1" fill="none" >
                        <g  transform="translate(-412.000000, -1087.000000)" fill="#fff">
                            <path stroke="white" strokeWidth="1" d="M428,1117 C420.268,1117 414,1110.73 414,1103 C414,1095.27 420.268,1089 428,1089 C435.732,1089 442,1095.27 442,1103 C442,1110.73 435.732,1117 428,1117 L428,1117 Z M428,1087 C419.163,1087 412,1094.16 412,1103 C412,1111.84 419.163,1119 428,1119 C436.837,1119 444,1111.84 444,1103 C444,1094.16 436.837,1087 428,1087 L428,1087 Z M433.121,1102.46 L429,1106.59 L429,1096 C429,1095.45 428.553,1095 428,1095 C427.448,1095 427,1095.45 427,1096 L427,1106.59 L422.879,1102.46 C422.488,1102.07 421.855,1102.07 421.465,1102.46 C421.074,1102.86 421.074,1103.49 421.465,1103.88 L427.121,1109.54 C427.361,1109.78 427.689,1109.85 428,1109.79 C428.311,1109.85 428.639,1109.78 428.879,1109.54 L434.535,1103.88 C434.926,1103.49 434.926,1102.86 434.535,1102.46 C434.146,1102.07 433.512,1102.07 433.121,1102.46 L433.121,1102.46 Z"/>
                        </g>
                    </g>
                </svg>
            </span>
        </div>
    )
}