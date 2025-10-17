import "@styles/globals.css"

import MainLayout from "components/layouts/Main";
import { AppProvider } from "components/contexts/AppContext"; 
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return(
        <AppProvider>
            
            <MainLayout>
                <Head>
                    <title>Hugo Solar Energy</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Hugo Solar Energy - Renewable Energy Solutions" />
                </Head>
                <Component {...pageProps} />
            </MainLayout>
        </AppProvider>
    )
}
