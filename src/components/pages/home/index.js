import AboutIndustrySegment from "./components/AboutIndustrySegment";
import HugoInNumbersSegment from "./components/HugoInNumbersSegment";
import IntroMediaSegment from "./components/IntroMediaSegment";
import IntroductionSegment from "./components/IntroductionSegment";
import ProjectHighlightsSegment from "./components/ProjectHighlightsSegment";


export default function Home() {
    return (
        <div>
            {/* intro media video segment */}
            <IntroMediaSegment />

            {/* about the company segment */}
            <IntroductionSegment />

            {/* type of renewable energy segment */}
            <AboutIndustrySegment />

            {/* projects segment */}
            <ProjectHighlightsSegment />

            {/* hugo solar in figures segment */}
            <HugoInNumbersSegment />

            {/* news from hugo solar segment */}
            <div>news from hugo solar segment</div>
        </div>
    );
}
