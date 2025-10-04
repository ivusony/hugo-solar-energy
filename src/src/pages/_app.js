import "@styles/globals.css"

import MainLayout from "components/layouts/Main";
import { AppProvider } from "components/contexts/AppContext"; 

export default function App({ Component, pageProps }) {
    return(
        <AppProvider>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </AppProvider>
    )
}
