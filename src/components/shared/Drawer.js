import { useRouter } from "next/router";
import { useAppContext } from "components/hooks/useAppContext";
import { useEffect, useState } from "react";
import styles from "@styles/components/shared/Drawer.module.css";
import routes from "@lib/routes";
import { useTheme } from "@components/hooks/useTheme";

// Helper to generate href with locale
const getHref = (locale, path) => (locale !== "sr" ? `/${locale}${path}` : path);

// Accordion for nested routes
const AccordionItem = ({ mainRoute, childrenRoutes, locale, toggleDrawer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <li className="mb-3">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full text-xl font-semibold tracking-wider transition-colors duration-200 ease-in-out hover:text-[var(--color-secondary)]"
      >
        {mainRoute.name[locale].toUpperCase()}
        <svg
            className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="pl-4 border-l-2 border-[var(--color-secondary)]">
          {/* Render index page first */}
          <li className="mb-2">
            <a
              href={getHref(locale, mainRoute.path)}
              onClick={toggleDrawer}
              className="block py-1 text-lg font-medium transition-colors duration-200 ease-in-out hover:text-[var(--color-secondary)]"
            >
              {mainRoute.name[locale].toUpperCase()}
            </a>
          </li>

          {/* Render remaining children */}
          {Object.keys(childrenRoutes).map((key) => {
            const child = childrenRoutes[key];
            return (
              <li key={child.path} className="mb-2">
                <a
                  href={getHref(locale, child.path)}
                  onClick={toggleDrawer}
                  className="block py-1 text-lg font-medium transition-colors duration-200 ease-in-out hover:text-[var(--color-secondary)]"
                >
                  {child.name[locale].toUpperCase()}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

// Simple NavLink
const NavLink = ({ route, locale, toggleDrawer }) => (
  <li className="mb-3">
    <a
      href={getHref(locale, route.path)}
      onClick={toggleDrawer}
      className="py-2 pl-0 text-xl font-semibold tracking-wider transition-colors duration-200 ease-in-out hover:text-[var(--color-secondary)]"
    >
      {route.name[locale].toUpperCase()}
    </a>
  </li>
);

export default function Drawer() {
    const { locale } = useRouter();
    const { state, toggleDrawer } = useAppContext();
    const { drawerVisible } = state;

    const { color, colorDarker, colorLighter, colorSecondary, colorSecondaryDark } = useTheme ();


    useEffect(() => {
        function handleScroll() {
            const navbarDrawerControls = document.querySelector(
                `.${styles.navbarDrawerControls}`
            );
            if (window.scrollY > 0) {
                navbarDrawerControls.classList.add(styles.scrolled);
            } else {
                navbarDrawerControls.classList.remove(styles.scrolled);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const drawer = document.querySelector(`#navbarDrawer`);
        if (drawerVisible) {
            console.log('Opening drawer' + Date.now());
            drawer.classList.remove("translate-x-[-100%]");
            drawer.classList.add("translate-x-0");
        } else {
            console.log('Closing drawer' + Date.now());
            drawer.classList.remove("translate-x-0");
            drawer.classList.add("translate-x-[-100%]");
        }
    }, [drawerVisible]);

    const renderDrawerItems = (routesObj) => {
        return Object.keys(routesObj).map((key) => {
        const route = routesObj[key];

        // If object has children (like /solar-energy)
        const childrenRoutes = { ...route };
        delete childrenRoutes.path;
        delete childrenRoutes.name;

        const hasChildren = Object.keys(childrenRoutes).length > 0;

        if (hasChildren) {
            const mainRoute = childrenRoutes.index;
            delete childrenRoutes.index;
            return (
            <AccordionItem
                key={mainRoute.path}
                mainRoute={mainRoute}
                childrenRoutes={childrenRoutes}
                locale={locale}
                toggleDrawer={toggleDrawer}
            />
            );
        } else {
            return <NavLink key={route.path} route={route} locale={locale} toggleDrawer={toggleDrawer} />;
        }
        });
    };

  return (
    <div
        className="fixed top-0 left-0 h-[100vh] w-full md:w-[400px] z-[100] bg-[#EEF1F3] translate-x-[-100%] transition-transform duration-300 ease"
        id="navbarDrawer"
    >
        <div
            className="h-inherit relative z-10 bg-[var(--foreground)]"
        >
            <div
                className={`h-[100px] flex items-center transition-height duration-300 ease bg-[#fff] pl-[var(--segment-padding-left)] pr-[var(--segment-padding-right)] ${styles.navbarDrawerControls}`}
            >
                <button 
                    onClick={toggleDrawer} 
                    className="cursor-pointer"
                >
                    <svg
                        height="35px"
                        stroke="var(--color-secondary)"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        fill="none"
                        className="hover:stroke-[var(--color)] transition-colors duration-200 ease-in-out"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z"
                        />
                    </svg>
                </button>
            </div>

            <ul className="pl-5 md:pl-[var(--segment-padding-left)] pr-10 md:pr-[var(--segment-padding-right)] pt-10 ">
            {renderDrawerItems(routes)}
            </ul>
        </div>

        <div className="w-full absolute bottom-0 left flex justify-center p-4 pb-15 md:pb-2">
            <svg 
                width="200px" 
                height="200px" 
                viewBox="0 0 886.11499 652.3825" // Keep the original viewBox for proper scaling
            >
                <path d="M911,774.062v-72.34S939.19167,753.008,911,774.062Z" transform="translate(-156.9425 -123.80875)" fill="#f1f1f1"/>
                <path d="M912.74147,774.0493l-53.28963-48.92125S916.297,739.04359,912.74147,774.0493Z" transform="translate(-156.9425 -123.80875)" fill="#f1f1f1"/>
                
                <g id="menuSvgBox1">
                    <polygon points="191.188 0 63.729 0 0 110.382 63.729 220.765 191.188 220.765 254.917 110.382 191.188 0" fill="#e6e6e6"/>
                    <path d="M227.825,332.18352H340.977l56.576-97.99246L340.977,136.1986H227.825l-56.576,97.99246Z" transform="translate(-156.9425 -123.80875)" fill="#fff"/>
                    <circle cx="69.51589" cy="81.14999" r="5.22006" fill="#e2e2e2"/>
                    <circle cx="69.51589" cy="110.38231" r="5.22006" fill="#e2e2e2"/>
                    <circle cx="69.51589" cy="139.61462" r="5.22006" fill="#e2e2e2"/>
                    <rect x="91.44012" y="76.97395" width="99.18107" height="8.35209" fill="#e2e2e2"/>
                    <rect x="91.44012" y="106.20626" width="99.18107" height="8.35209" fill="#e2e2e2"/>
                    <rect x="91.44012" y="135.43858" width="99.18107" height="8.3521" fill="#e2e2e2"/>
                </g>

                <g id="menuSvgBox3">
                    <polygon points="822.386 0 694.927 0 631.198 110.382 694.927 220.765 822.386 220.765 886.115 110.382 822.386 0" fill="#e6e6e6"/>
                    <path d="M859.0228,332.18352h113.152l56.576-97.99246-56.576-97.99246H859.0228l-56.576,97.99246Z" transform="translate(-156.9425 -123.80875)" fill="#fff"/>
                    <circle cx="700.71368" cy="81.14999" r="5.22005" fill="#e2e2e2"/>
                    <circle cx="700.71368" cy="110.38231" r="5.22005" fill="#e2e2e2"/>
                    <circle cx="700.71368" cy="139.61462" r="5.22005" fill="#e2e2e2"/>
                    <rect x="722.63794" y="76.97395" width="99.18103" height="8.35209" fill="#e2e2e2"/>
                    <rect x="722.63794" y="106.20626" width="99.18103" height="8.35209" fill="#e2e2e2"/>
                    <rect x="722.63794" y="135.43858" width="99.18103" height="8.3521" fill="#e2e2e2"/>
                </g>

                <g id="menuSvgBox2">
                    <polygon points="506.167 1.072 379.946 1.072 316.836 110.382 379.946 219.693 506.167 219.693 569.279 110.382 506.167 1.072" fill="#e6e6e6"/>
                    <path d="M543.97324,331.23189H656.0264L712.053,234.19107,656.0264,137.15024H543.97324l-56.02655,97.04082Z" transform="translate(-156.9425 -123.80875)" fill="#fff"/>
                    <circle cx="385.6774" cy="81.43388" r="5.16936" fill={color}/>
                    <circle cx="385.6774" cy="110.38231" r="5.16936" fill={color}/>
                    <circle cx="385.6774" cy="139.33073" r="5.16936" fill={color}/>
                    <rect x="407.3887" y="77.29839" width="98.2179" height="8.27098" fill={color}/>
                    <rect x="407.3887" y="106.24682" width="98.2179" height="8.27098" fill={color}/>
                    <rect x="407.3887" y="135.19525" width="98.2179" height="8.27098" fill={color}/>
                </g>

                <polygon points="550.665 639.737 538.405 639.736 532.573 592.448 550.667 592.449 550.665 639.737" fill="#9f616a"/>
                <path d="M710.73392,775.42958l-39.53076-.00146v-.5a15.38731,15.38731,0,0,1,15.38648-15.38623h.001l24.144.001Z" transform="translate(-156.9425 -123.80875)" fill="#2f2e41"/>
                <polygon points="664.665 639.737 652.405 639.736 646.573 592.448 664.667 592.449 664.665 639.737" fill="#9f616a"/>
                <path d="M824.73392,775.42958l-39.53076-.00146v-.5a15.38731,15.38731,0,0,1,15.38648-15.38623h.001l24.144.001Z" transform="translate(-156.9425 -123.80875)" fill="#2f2e41"/>
                <path d="M702.72093,523.57062s-10.29059,27.93152-8.8205,39.69214-10.29053,94.08515-8.82049,101.43555-1.4701,44.10242,0,49.98273-4.126,12.904-1.18583,18.78433,7.06614,17.96768,7.06614,17.96768l19.111-1.47009,2.94018-16.1709s8.8205-1.47009,7.35041-10.29059,7.3504-67.62366,7.3504-67.62366l24.99133-82.32446,35.28192,74.97406s1.4701,52.92285,5.88031,58.80316-4.41021,22.05121,0,27.93152,8.8205,16.1709,8.8205,16.1709h22.05121V739.67237s13.23071-7.3504,0-29.40161l-8.94019-132.42688-8.82049-60.27326Z" transform="translate(-156.9425 -123.80875)" fill="#2f2e41"/>
                <circle cx="600.5805" cy="187.45592" r="27.45748" fill="#a0616a"/>
                <path d="M734.15719,309.37058q2.90616,7.42524,5.81249,14.85045c2.38187,6.0855,5.10983,12.59627,10.693,15.99248,6.89335,4.19321,16.09891,2.14859,22.76738-2.39371a35.55267,35.55267,0,0,0-16.0025-64.70912l-.27595,4.97045-6.09928-5.11247a5.92961,5.92961,0,0,1-9.21737,1.30354c1.6022,3.32109-.24695,7.37161-2.91728,9.91573-3.28072,3.12533-12.66394,6.88145-12.27456,12.46855C726.903,300.3849,732.64485,305.50673,734.15719,309.37058Z" transform="translate(-156.9425 -123.80875)" fill="#2f2e41"/>
                <path d="M833.10409,564.18693a11.62612,11.62612,0,0,0-4.98194-17.117l.54864-26.56207-16.06038-4.27033-.24794,37.52166a11.68914,11.68914,0,0,0,20.74162,10.42776Z" transform="translate(-156.9425 -123.80875)" fill="#9f616a"/>
                <path d="M777.91953,355.69214s-21.27734-10.63867-41.37262-3.54623-30.734,15.367-30.734,15.367l13.00281,68.56037-17.73108,92.20187s91.01984-7.09247,99.29431,0,8.27454-8.27453,8.27454-8.27453L801.561,432.527l13.00287-55.55752Z" transform="translate(-156.9425 -123.80875)" fill={colorDarker}/>
                <path d="M688.11533,565.75982a11.62611,11.62611,0,0,0,.02419-17.82727l7.98411-25.33966-14.21547-8.60767-10.77251,35.94287a11.68915,11.68915,0,0,0,16.97968,15.83173Z" transform="translate(-156.9425 -123.80875)" fill="#9f616a"/>
                <path d="M714.08744,367.51291H705.8129s-13.00284,8.27454-13.00284,20.09528-18.91317,150.12363-18.91317,150.12363l20.09527,3.5462,17.73114-96.93021,13.00287-26.00567Z" transform="translate(-156.9425 -123.80875)" fill={colorDarker}/>
                <path d="M792.10447,376.96952h22.45941s7.09247,7.09244,10.63867,23.64151,7.09247,81.5632,7.09247,81.5632L829.93088,541.278H812.19974l-2.36413-76.8349L798.01487,414.796Z" transform="translate(-156.9425 -123.80875)" fill={colorDarker}/>
                <path d="M961.78346,776.19125h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-156.9425 -123.80875)" fill="#cbcbcb"/>
            </svg>
        </div>
    </div>
  );
}
