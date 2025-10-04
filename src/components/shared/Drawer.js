import styles from "@styles/components/shared/Drawer.module.css"
import { useAppContext } from "components/hooks/useAppContext"
import { useEffect } from "react";

export default function Drawer() {

    let { state, setState, toggleDrawer } = useAppContext();
    let { drawerVisible } = state;

    // define function: if scrollY > 0 add class 'scrolled' to .mainNavi
    function handleScroll() {
        const navbarDrawerControls = document.querySelector(`.${styles.navbarDrawerControls}`);
        if (window.scrollY > 0) {
            navbarDrawerControls.classList.add(styles.scrolled);
        } else {
            navbarDrawerControls.classList.remove(styles.scrolled);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const drawer = document.querySelector(`.${styles.navbarDrawer}`);
        if (drawerVisible) {
            drawer.classList.add(styles.visible);
        } else {
            drawer.classList.remove(styles.visible);
        }
    }, [drawerVisible]);

    return (
        <div className={styles.navbarDrawer}>
            <div className={styles.navbarDrawerContainer}>
                <div className={styles.navbarDrawerControls}>
                    <button 
                        onClick={toggleDrawer} 
                        className={styles.navbarDrawerCloseButton}
                    >
                        <svg height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z" fill="#080341"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}