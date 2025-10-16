import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";
import Breadcrumb from "@components/shared/Breadcrumb";
import Image from "next/image";
import SolarCarousel from "@components/shared/SolarCarousel";

export default function Project({ project }) {

    let { locale } = useRouter();
    let locales = useLocales();

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    const ProjectDetailsTable = ({ project }) => {
        if (!project) {
            return <div className="p-6 text-gray-500">No project data available.</div>;
        }

        // Helper component for a single row
        const DetailRow = ({ label, value, className = '' }) => {
            if (!value) return null; // Do not render the row if the value is missing

            return (
                <div className={`flex flex-col md:flex-row border-b border-gray-100 last:border-b-0 ${className}`}>
                    {/* Label (Key) - Left Column */}
                    <dt className="w-full md:w-1/3 py-3 px-4 text-sm font-semibold text-gray-600 bg-gray-50/50 uppercase tracking-wider">
                        {label}
                    </dt>
                    {/* Value - Right Column */}
                    <dd className="w-full md:w-2/3 py-3 px-4 text-sm text-gray-900 break-words">
                        {value}
                    </dd>
                </div>
            );
        };

        // --- Complex Value Formatting ---

        // 1. Contractor Details
        const contractorInfo = project.contractor?.name ? (
            <>
                {project.contractor.name}
                {project.contractor.phone_number && <span className="ml-2 text-blue-500 block md:inline-block">({project.contractor.phone_number})</span>}
                {project.contractor.email && <span className="ml-2 text-blue-500 block md:inline-block">({project.contractor.email})</span>}
            </>
        ) : null;
        
        // 2. Subcontractor Details
        const subcontractorInfo = project.subcontractor?.name ? (
            <>
                {project.subcontractor.name}
                {project.subcontractor.phone_number && <span className="ml-2 text-blue-500 block md:inline-block">({project.subcontractor.phone_number})</span>}
            </>
        ) : null;

        // 3. Address Details
        const addressInfo = project.address?.place && project.address?.country 
            ? `${project.address.place}, ${project.address.country}`
            : project.address?.place || project.address?.country || null;
        
        // 4. Solar Panels (Formatted with comma separator)
        const formattedSolarPanels = project.solar_panels 
            ? new Intl.NumberFormat('en-US').format(project.solar_panels) 
            : null;

        // --- Component Rendering ---
        return (
            <div className="max-w-4xl mx-auto my-8 p-0 sm:p-4 shadow-xl rounded-xl bg-white border border-gray-200">
             
                {/* Semantic Definition List styled as a table */}
                <dl>
                    <DetailRow 
                        label={ locale == "sr" ? "Naziv projekta" : "Project Name"} 
                        value={project.name} 
                        className="md:border-t-0"
                    />
                    
                    <DetailRow 
                        label={ locale == "sr" ? "Kapacitet" : "Capacity"} 
                        value={project.solar_power_plant_capacity} 
                    />
                    
                    <DetailRow 
                        label={ locale == "sr" ? "Solarni paneli" : "Solar Panels"} 
                        value={formattedSolarPanels} 
                    />
                    
                    <DetailRow 
                        label={ locale == "sr" ? "Vrednost projekta" : "Project Value"} 
                        value={project.value} 
                    />
                    
                    <DetailRow 
                        label={ locale == "sr" ? "Period izgradnje" : "Construction Time"} 
                        value={project.work_performance_period} 
                    />

                    {/* Nested Objects */}
                    <DetailRow 
                        label={ locale == "sr" ? "Glavni izvođač" : "Contractor"} 
                        value={contractorInfo} 
                    />

                    <DetailRow 
                        label={ locale == "sr" ? "Podizvođač" : "Subcontractor"} 
                        value={subcontractorInfo} 
                    />

                    <DetailRow 
                        label={ locale == "sr" ? "Lokacija" : "Location"} 
                        value={addressInfo} 
                    />
                    
                </dl>
                
            </div>
        );
    };

    return(
        <>
            {/* this div gives background to navbar */}
            <div className="h-[100px] bg-[var(--color)]"></div>
            {/* banner image */}
                <div className="relative h-[200px] md:h-[600px] w-full mb-5 ">
                    {/* if project.imgs array has more than 1 image, render SolarCarousel: construct images array: [ { url : `/assets/images/projects/{img}, alt : "alt"` } ], esle reder one image */}
                    { project.imgs && project.imgs.length > 1 ?
                        <SolarCarousel 
                            images={ project.imgs.map((img, index) => ({
                                url: `/assets/images/projects/${img}`,
                                alt: project.name ? `${project.name} - Image ${index + 1}` : `Project Image ${index + 1}`
                            }))}
                        />
                    :
                        project.imgs && project.imgs.length === 1 ?
                        <Image
                            src={`/assets/images/projects/${project.imgs[0]}`}
                            alt="Solar Energy Banner"
                            layout="fill"
                            objectFit="cover"
                            
                        />
                        : null
                    }
                </div>

                <motion.div
                    ref={ref}
                    variants={container}
                    initial="hidden"
                    animate={controls}
                    className="bg-[var(--background)] py-5 mx-auto max-w-7xl px-2 md:px-0"
                >

                    <Breadcrumb/>

                    <motion.div
                        key={1}
                        variants={item}
                        className="max-w-7xl mx-auto text-center"
                        id="header"
                    > 
                        <h1 className="hugo-h1">{ project.name }</h1>
                        
                    </motion.div>

                    <motion.div
                        key={2}
                        variants={item}
                    >
                        <ProjectDetailsTable project={project} />
                    </motion.div>

                    <motion.div
                        key={3}
                        variants={item}
                        className="max-w-7xl mx-auto"
                    >
                        { project.about_project && 
                            <div className="max-w-7xl mx-auto my-15 p-0 sm:p-4  bg-white ">
                                <p className="hugo-p-justify">{ project.about_project }</p>
                            </div>
                        }
                    </motion.div>
                    

                </motion.div>



            {/* <EndMessageSegment /> */}
        </>
    )
}