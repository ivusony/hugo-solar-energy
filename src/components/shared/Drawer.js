import { useRouter } from "next/router";
import { useAppContext } from "components/hooks/useAppContext";
import { useEffect, useState } from "react";
import styles from "@styles/components/shared/Drawer.module.css";
import routes from "@lib/routes";

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


    // if document is clicked outside of drawer and drawer is open, close the drawer
    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         const drawer = document.querySelector(`#navbarDrawer`);
    //         if (drawerVisible && !drawer.contains(event.target)) {
    //             console.log('Clicked outside of drawer' + Date.now());
    //             toggleDrawer();
    //         }
    //     }
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [drawerVisible, toggleDrawer]);

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
            className="h-inherit"
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
    </div>
  );
}
