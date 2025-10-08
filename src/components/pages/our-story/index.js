import styles from "@styles/components/pages/OurStory.module.css";
import Image from "next/image";
import AboutUsSegment from "./components/AboutUsSegment";
import OurCoreStrengths from "./components/OurCoreStrengths";
import PhotoAlbumSegment from "./components/PhotoAlbumSegment";

export default function OurStory() {
    return (
        <div className={`${ styles.OurStory }`}>
            <div className={`pt-[100px] ${styles.imageWrapper}`}>
                <div className={` relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] ${styles.banner}`}>
                    <Image
                        src="/assets/images/team/480570303_935180558805752_4526241073494104372_n.jpg"
                        alt="Our Story Banner"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
            </div>

            <AboutUsSegment />

            <OurCoreStrengths />

            <PhotoAlbumSegment />

        </div>
    );
}