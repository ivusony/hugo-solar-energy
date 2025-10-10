import { useRouter } from "next/router";

export default function IntroMediaParallaxSegment() {
    let { locale } = useRouter();
    return (
        <div id="intro-media-parallax-segment" className="min-h-[600px] h-[100vh] bg-grey fixed top-0 left-0 w-full overflow-hidden">
            <video className="w-full h-full object-cover" autoPlay muted loop>
                <source src="/assets/intro-media-video/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}