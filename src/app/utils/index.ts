import Storage from "react-native-storage";

export const setKey = async (key, data) => {
    await (window as any).storage.save({
        key,
        data,
    });
}
export const getKey = async (key) => {
    let res;
    try {
        res = await (window as any).storage.load({
            key,
        });
    } catch (e) {
        //throw e;
    }
    return res;
}
export const initStorage = () => {
    const storage = new Storage({
        size: 1000,
        storageBackend: window.localStorage,
        defaultExpires: null,
        enableCache: true,
        sync: {
        }
    });
    (window as any).storage = storage;
}

export const combineStyles = (...styles) => {
    return function CombineStyles(theme) {
        const outStyles = styles.map((arg) => {
            // Apply the "theme" object for style functions.
            if (typeof arg === 'function') {
                return arg(theme);
            }
            // Objects need no change.
            return arg;
        });

        return outStyles.reduce((acc, val) => Object.assign(acc, val));
    };
}