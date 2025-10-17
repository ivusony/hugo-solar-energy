import "@styles/globals.css"

import MainLayout from "components/layouts/Main";
import { AppProvider } from "components/contexts/AppContext"; 
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
    const router = useRouter();
    const baseUrl = "https://hugosolarenergy.rs"; // Your site's base URL
    const canonicalUrl = `${baseUrl}${router.asPath === "/" ? "" : router.asPath}`;
    return(
        <AppProvider>
            
            <MainLayout>
                <Head>
                    <title>Hugo Solar Energy</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Hugo Solar Energy - Renewable Energy Solutions" />
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <Component {...pageProps} />
            </MainLayout>
        </AppProvider>
    )
}
