import { types, onSnapshot } from "mobx-state-tree"

const App = types.model({
    theme: types.optional(types.number, 0),
    snackmsg: types.optional(types.string, ""),
    snackopen: types.optional(types.boolean, false),
    settingsOpen: types.optional(types.boolean, false),
}).actions(self => {
    const setTheme = (theme: number): void => {
        self.theme = theme
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

    return {
        setTheme,
        snackOpen,
        setSnackMsg,
        toggleSettings,
    }
})
export default App;