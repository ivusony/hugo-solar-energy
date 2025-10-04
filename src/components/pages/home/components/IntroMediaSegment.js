import introMediaStyles from "@styles/components/pages/partials/IntroMediaSegment.module.css"
import { useRouter } from "next/router"

export default function IntroMediaSegment() {

    let { locale } = useRouter();
    // locale can be 'sr' as default or 'en'

    return (
        <div className={introMediaStyles.introMediaSegment}>
            <video className={introMediaStyles.introMediaVideo} autoPlay muted loop>
                <source src="/assets/intro-media-video/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={introMediaStyles.introMediaTextBox}>
                <h1>HUGO SOLAR ENERGY</h1>
                <h2>{locale === 'en' ? 'Your partner in renewable energy solutions.' : 'Vaš partner u rešenjima obnovljive energije.'}</h2>
            </div>
        </div>
    )
}