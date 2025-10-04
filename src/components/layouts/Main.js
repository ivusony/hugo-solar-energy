import Header from "components/shared/Header";
import Footer from "components/shared/Footer";

export default function MainLayout({ children }) {
    return (
        <div>
            <Header/>
                {children}
            <Footer/>
        </div>
    );
}