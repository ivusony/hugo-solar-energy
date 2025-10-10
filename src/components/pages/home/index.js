import { useRouter } from "next/router";
import AboutIndustrySegment from "./components/AboutIndustrySegment";
import HugoInNumbersSegment from "./components/HugoInNumbersSegment";
import IntroMediaParallaxSegment from "./components/IntroMediaParallaxSegment";
import IntroductionSegment from "./components/IntroductionSegment";
import LandingSegment from "./components/LandingSegment";
import ProjectHighlightsSegment from "./components/ProjectHighlightsSegment";
import ScrollToTopButton from "./components/ScrollToTopButton";


export default function Home() {
    let { locale } = useRouter  ();
    return (
        <div className="bg-white ">
            {/* intro media video segment */}
            <IntroMediaParallaxSegment />

            <LandingSegment />

            {/* about the company segment */}
            <IntroductionSegment />

            {/* type of renewable energy segment */}
            <AboutIndustrySegment />

            {/* projects segment */}
            <ProjectHighlightsSegment />

            {/* hugo solar in figures segment */}
            <HugoInNumbersSegment />

            <ScrollToTopButton />
          
        </div>
    );
}
