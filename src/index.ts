/**
 * 🎯 get a property from an object with a default value if it does not exist
 * @param obj ➡️ The object from which to retrieve the property.
 * @param key ➡️ The key of the property to retrieve.
 * @param defaultValue ➡️ The default value to return if the key does not exist.
 * @returns {any} 📤 The value of the property if it exists, otherwise the default value.
 */
export const getProp = (
    obj: any,
    key: string,
    defaultValue: any = undefined
) => {
    return obj.hasOwnProperty(key) ? obj[key] : defaultValue;
};

const normalizeValue = (value: string): string => {
    return value.toLowerCase().replace(/[-_]/gi, ''); // remove seperators
};

/**
 * 🎯 sort an array of strings in ascending order, ignoring case and separators like '-' and '_'.
 * @param {string[]} array ➡️ The array of strings to be sorted.
 * @returns {string[]} 📤 The sorted array of strings in ascending order.
 */
export const sortASC = (array: string[]): string[] => {
    return array.sort((a, b) => {
        if (normalizeValue(a) < normalizeValue(b)) return -1;
        if (normalizeValue(a) > normalizeValue(b)) return 1;
        return 0; // same kind of values
    });
};
