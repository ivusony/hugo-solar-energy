import en_home from "@locales/en/home.json"
import sr_home from "@locales/sr/home.json"


export function useLocales() {
    let locales = {
        en: {
            home: en_home,
        },
        sr: {
            home: sr_home,
        }
    }

    return locales;
}