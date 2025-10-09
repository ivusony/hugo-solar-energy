import en_home from "@locales/en/home.json"
import sr_home from "@locales/sr/home.json"
import en_menu from "@locales/en/menu.json"
import sr_menu from "@locales/sr/menu.json"
import sr_our_story from "@locales/sr/our_story.json"
import en_our_story from "@locales/en/our_story.json"
import en_solar_energy from "@locales/en/solar_energy.json"
import sr_solar_energy from "@locales/sr/solar_energy.json"
import en_industrial_solar_parks from "@locales/en/industrial_solar_parks.json"
import sr_industrial_solar_parks from "@locales/sr/industrial_solar_parks.json"
import en_commercial_solar_roofs from "@locales/en/commercial_solar_roofs.json"
import sr_commercial_solar_roofs from "@locales/sr/commercial_solar_roofs.json"


export function useLocales() {
    let locales = {
        en: {
            menu: en_menu,
            home: en_home,
            our_story: en_our_story,
            solar_energy: en_solar_energy,
            industrial_solar_parks: en_industrial_solar_parks,
            commercial_solar_roofs: en_commercial_solar_roofs
        },
        sr: {
            menu: sr_menu,
            home: sr_home,
            our_story: sr_our_story,
            solar_energy: sr_solar_energy,
            industrial_solar_parks: sr_industrial_solar_parks,
            commercial_solar_roofs: sr_commercial_solar_roofs
        }
    }

    return locales;
}