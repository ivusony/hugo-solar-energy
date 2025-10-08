import { useLocales } from "@components/hooks/useLocales";
import styles from "@styles/components/pages/home_partials/HugoInNumbers.module.css"
import { useRouter } from "next/router";


import { Doughnut } from "react-chartjs-2";
import { CategoryScale, Chart, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip } from "chart.js";
import { useEffect, useRef, useState } from "react";


import { useInView } from "react-intersection-observer";


export default function HugoInNumbersSegment() {
    let { locale } = useRouter();
    let locales = useLocales();

    const [ref, inView] = useInView({ threshold: .6 });

    Chart.register( CategoryScale );
    Chart.register( LinearScale );
    Chart.register( PointElement );
    Chart.register( LineElement );
    Chart.register( BarElement );
    Chart.register( ArcElement );
    Chart.register( Tooltip );

    let dataRef = useRef({
        years_active: 10,
        megawatts_delivered: 60,
        experts_in_team: {
            men : 30,
            women : 20,
        },
        number_of_projects: 130,
        solar_panels_installed: 146000,
    });

    let [data, setData] = useState({
        years_active: 0,
        megawatts_delivered: 0,
        experts_in_team: {
            men: 0,
            women: 0,
        },
        number_of_projects: 0,
        solar_panels_installed: 0,
    });

    

    useEffect(() => {
        if(inView) {
            setData(dataRef.current);
        }
    }, [inView]);

    return (
        <div ref={ref} className={`mt-20 ${styles.HugoInNumbersSegment}`}>
            <h2 className={`text-3xl md:text-4xl font-bold mt-5 mb-10 text-center flex justify-center`}>{locales[locale].home.components.HugoInNumbersSegment.title}</h2>
            <p className={`text-xl md:text-2xl font-normal mb-10 text-justify  font-italic`}>{locales[locale].home.components.HugoInNumbersSegment.description}</p>

            {/* five column grid, stackable on mobile: years active, megawatts of power delivered, experts in team,number of projects,  solar panels installed */}
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-20 mb-20 text-center`}>
                <div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <h3 aria-description="Years active" className={`absolute text-5xl font-bold`}>{data.years_active}+</h3>
                        <Doughnut 
                            data={{
                                datasets: [{
                                    data: [data.years_active, 0],
                                    backgroundColor: [
                                        '#00366C',
                                    ],
                                    
                                    borderWidth: 0,
                                }],
                            }} 
                            options={{
                                responsive: true,
                                cutout: '70%',
                                plugins: {
                                tooltip: {
                                    enabled: false,
                                },
                            },
                            }} 
                        />
                    </div>
                    <p className={`text-2xl mt-5`}>{ locale == 'sr' ? 'GODINA' : 'YEARS' }</p>
                </div>
                <div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <h3 aria-description="Megawatts delivered" className={`text-5xl font-bold absolute`}>50+</h3>
                        <Doughnut 
                            data={{
                                datasets: [{
                                    data: [data.megawatts_delivered, 0],
                                    backgroundColor: [
                                        '#00366C',
                                    ],
                                    
                                    borderWidth: 0,
                                }],
                            }} 
                            options={{
                                responsive: true,
                                cutout: '70%',
                                plugins: {
                                tooltip: {
                                    enabled: false,
                                },
                            },
                            }} 
                        />
                    </div>
                   <p className={`text-2xl mt-5`}>{ locale == 'sr' ? 'MEGAWATI' : 'MEGAWATTS' }</p>
                </div>
                <div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                        }}
                    >
                        <h3 aria-description="Experts in team" className={`text-5xl font-bold absolute`}>{data.experts_in_team.men + data.experts_in_team.women}+</h3>  
                        <Doughnut 
                            data={{
                                datasets: [{
                                    data: [data.experts_in_team.men, data.experts_in_team.women],
                                    backgroundColor: [
                                        '#00366C',
                                        '#00A3FF',
                                    ],
                                    borderWidth: 0,
                                }],
                            }} 
                            options={{
                                responsive: true,
                                cutout: '70%',
                                plugins: {
                                    tooltip: {
                                        enabled: false,
                                    },
                                },
                            }} 
                        />
                    </div>
                    <p className={`text-2xl mt-5`}>{ locale == 'sr' ? 'STRUČNJAKA' : 'EXPERTS' }</p>
                    <small className={`text-xs`}>({data.experts_in_team.men} {  locale == 'sr' ? 'muškaraca' : 'men'}, {data.experts_in_team.women} {  locale == 'sr' ? 'žena' : 'women'})</small>
                </div>
                <div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <h3 aria-description="Number of projects" className={`text-5xl font-bold absolute`}>{data.number_of_projects}+</h3>
                        <Doughnut 
                            data={{
                                datasets: [{
                                    data: [data.number_of_projects, 0],
                                    backgroundColor: [
                                        '#00366C',
                                    ],
                                    
                                    borderWidth: 0,
                                }],
                            }} 
                            options={{
                                responsive: true,
                                cutout: '70%',
                                plugins: {
                                tooltip: {
                                    enabled: false,
                                },
                            },
                            }} 
                        />
                    </div>
                    <p className={`text-2xl mt-5`}>{ locale == 'sr' ? 'PROJEKATA' : 'PROJECTS' }</p>
                </div>
                <div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <h3 aria-description="Solar panels installed" className={`xs:text-sm md:text-2xl lg:text-5xl font-bold absolute `}>{data.solar_panels_installed.toLocaleString()}+</h3>
                        <Doughnut 
                            data={{
                                datasets: [{
                                    data: [data.solar_panels_installed, 0],
                                    backgroundColor: [
                                        '#00366C',
                                    ],
                                    
                                    borderWidth: 0,
                                }],
                            }} 
                            options={{
                                responsive: true,
                                cutout: '70%',
                                plugins: {
                                tooltip: {
                                    enabled: false,
                                },
                            },
                            }} 
                        />
                    </div>
                    <p className={`text-2xl mt-5`}>{ locale == 'sr' ? 'SOLARNIH PANELA' : 'SOLAR PANELS' }</p>
                </div>
            </div>
        </div>
    );
}