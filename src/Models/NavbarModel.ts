
import {ETranslator} from "../Constants/Translator"
import {routes} from "../Constants/Routs"
export interface INavbarModel {
    name:string,
    route:string
}

export const navbarList:Array<INavbarModel> = [
{name:ETranslator.PARDIS_AND_AMPHITHEATRE, route:routes.CINEMAS},
{name:ETranslator.PROGRAMS, route:routes.PROGRAMS},
{name:ETranslator.TAGS, route:routes.TAGS},
{name:ETranslator.SCHADULES, route:routes.SCHADULES},
]