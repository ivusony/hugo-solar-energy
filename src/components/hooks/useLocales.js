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
import en_our_services from "@locales/en/our_services.json"
import sr_our_services from "@locales/sr/our_services.json"
import en_project_development from "@locales/en/project-development.json"
import sr_project_development from "@locales/sr/project-development.json"
import en_procurement_and_construction from "@locales/en/procurement-and-construction.json"
import sr_procurement_and_construction from "@locales/sr/procurement-and-construction.json"
import en_support_and_maintenance from "@locales/en/support_and_maintenance.json"
import sr_support_and_maintenance from "@locales/sr/support_and_maintenance.json"
import en_sales_of_equipment from "@locales/en/sales-of-equipment.json"
import sr_sales_of_equipment from "@locales/sr/sales-of-equipment.json"
import en_our_projects from "@locales/en/our_projects.json"
import sr_our_projects from "@locales/sr/our_projects.json"


export function useLocales() {
    let locales = {
        en: {
            menu: en_menu,
            home: en_home,
            our_story: en_our_story,
            solar_energy: en_solar_energy,
            industrial_solar_parks: en_industrial_solar_parks,
            commercial_solar_roofs: en_commercial_solar_roofs,
            our_services: en_our_services,
            project_development: en_project_development,
            procurement_and_construction: en_procurement_and_construction,
            support_and_maintenance: en_support_and_maintenance,
            sales_of_equipment: en_sales_of_equipment,
            our_projects: en_our_projects
        },
        sr: {
            menu: sr_menu,
            home: sr_home,
            our_story: sr_our_story,
            solar_energy: sr_solar_energy,
            industrial_solar_parks: sr_industrial_solar_parks,
            commercial_solar_roofs: sr_commercial_solar_roofs,
            our_services: sr_our_services,
            project_development: sr_project_development,
            procurement_and_construction: sr_procurement_and_construction,
            support_and_maintenance: sr_support_and_maintenance,
            sales_of_equipment: sr_sales_of_equipment,
            our_projects: sr_our_projects
        }
    }

    return locales;
}