import en_home from "@locales/en/home.json"
import sr_home from "@locales/sr/home.json"
import en_menu from "@locales/en/menu.json"
import sr_menu from "@locales/sr/menu.json"
import sr_our_story from "@locales/sr/our_story.json"
import en_our_story from "@locales/en/our_story.json"


export function useLocales() {
    let locales = {
        en: {
            menu: en_menu,
            home: en_home,
            our_story: en_our_story,
        },
        sr: {
            menu: sr_menu,
            home: sr_home,
            our_story: sr_our_story,
        }
    }

    return locales;
}