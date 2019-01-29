import { types, onSnapshot } from "mobx-state-tree"
import {LOCALES} from "app/constants";
import i18n from "app/i18n";
import { setKey } from "app/utils";

const App = types.model({
    theme: types.optional(types.number, 0),
    snackmsg: types.optional(types.string, ""),
    snackopen: types.optional(types.boolean, false),
    settingsOpen: types.optional(types.boolean, false),
    locale: types.optional(types.string, "en_US"),
}).actions(self => {
    const setTheme = (theme: number): void => {
        self.theme = theme
        setKey("theme", theme);
    }
    const snackOpen = (state: boolean): void => {
        self.snackopen = state
    }
    const setSnackMsg = (msg: string): void => {
        self.snackmsg = msg;
        snackOpen(true);
    }
    const toggleSettings = (): void => {
        self.settingsOpen = !self.settingsOpen;
    }
    const setLocale = (locale) => {
        self.locale = locale;
        setKey("locale", locale);
        i18n.changeLanguage(LOCALES[locale].i18n);

        //for <fbt /> later when its production
        const html = document.getElementsByTagName('html')[0];
        if (html != null) {
            html.lang = LOCALES[locale].bcp47;
        }
        document.body.className = LOCALES[locale].rtl ? 'rtl' : 'ltr';
    }

    return {
        setTheme,
        setLocale,
        snackOpen,
        setSnackMsg,
        toggleSettings,
    }
})
export default App;