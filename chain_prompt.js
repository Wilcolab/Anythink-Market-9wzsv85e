/**
 * Converts a string to kebab-case.
 * Handles camelCase, snake_case, spaces, and hyphens.
 * @param {string} str
 * @returns {string}
 */
function toKebabCase(str) {
    if (str === null || str === undefined || str === '') return '';
    if (typeof str !== 'string') throw new TypeError('Input must be a string');

    // Replace camelCase with spaces before lowercasing
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    // Replace underscores and hyphens with spaces
    str = str.replace(/[_\-]+/g, ' ');
    // Trim and split by spaces, then join with hyphens
    return str
        .trim()
        .split(/\s+/)
        .map(s => s.toLowerCase())
        .join('-');
}

// Example calls:
console.log(toKebabCase("HelloWorld"));           // "hello-world"
console.log(toKebabCase("user_name-input"));      // "user-name-input"
console.log(toKebabCase("  spaced   words "));    // "spaced-words"
console.log(toKebabCase("snake_case"));           // "snake-case"
console.log(toKebabCase("hyphen-case"));          // "hyphen-case"
console.log(toKebabCase(""));                     // ""
console.log(toKebabCase(null));                   // ""
console.log(toKebabCase(undefined));              // ""
try {
    console.log(toKebabCase(123));                 // Throws error
} catch (e) {
    console.error(e.message);                      // "Input must be a string"
}