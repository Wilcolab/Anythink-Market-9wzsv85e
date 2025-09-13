/**
 * Chain Prompt: Create a JavaScript function called toKebabCase
 *
 * Step 1: Write a function that converts a string to lowercase and trims whitespace.
 * Step 2: Replace spaces, underscores, and other delimiters with hyphens ('-').
 * Step 3: Ensure multiple consecutive delimiters are replaced by a single hyphen and remove leading/trailing hyphens.
 *
 * The final function should handle edge cases and return a valid kebab-case string.
 */
/**
 * Converts a string to dot.case format.
 * Handles spaces, underscores, hyphens, camelCase, and mixed delimiters.
 * Trims leading/trailing whitespace. Returns an empty string for null, undefined, or empty string inputs.
 * Throws an error for non-string inputs.
 *
 * Examples:
 *   toDotCase('First Name')         // 'first.name'
 *   toDotCase('user_name-input')    // 'user.name.input'
 *   toDotCase('screenName')         // 'screen.name'
 *   toDotCase('  user  name  ')     // 'user.name'
 *   toDotCase(123)                  // throws Error
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} If input is not a string.
 */
function toDotCase(str) {
	if (str === null || str === undefined || (typeof str === 'string' && str.trim() === '')) {
		return '';
	}
	if (typeof str !== 'string') {
		throw new Error('Input must be a string');
	}
	str = str.trim();
	return str
		.replace(/([a-z])([A-Z])/g, '$1.$2') // camelCase to dot
		.replace(/[-_\s]+/g, '.') // delimiters to dot
		.replace(/\.+/g, '.') // multiple dots to single dot
		.toLowerCase();
}
/**
 * Converts a string to camelCase format.
 * Handles spaces, underscores, hyphens, mixed delimiters, and trims whitespace.
 * Returns an empty string for null, undefined, or empty string inputs.
 * Throws an error for non-string inputs.
 *
 * Examples:
 *   camelCase('hello world')        // 'helloWorld'
 *   camelCase(' user_name-input ')  // 'userNameInput'
 *   camelCase('SCREEN_NAME')        // 'screenName'
 *   camelCase(123)                  // throws Error
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} If input is not a string.
 */
function camelCase(str) {
	if (str === null || str === undefined || (typeof str === 'string' && str.trim() === '')) {
		return '';
	}
	if (typeof str !== 'string') {
		throw new Error('Input must be a string');
	}
	str = str.trim();
	return str
		.replace(/([A-Z]+)/g, (m) => m.toLowerCase())
		.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
		.replace(/^(.)/, (m) => m.toLowerCase());
}


function toKebabCase(input) {
  // 1. Handle invalid inputs
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }
  if (!input || input.trim() === "") {
    return "";
  }

  // 2. Convert to lowercase
  let str = input.toLowerCase();

  // 3. Replace spaces, underscores, and hyphens with a single hyphen
  str = str.replace(/[\s_-]+/g, "-");

  // 4. Trim leading and trailing hyphens
  str = str.replace(/^-+|-+$/g, "");

  return str;
}

// Examples
console.log(toKebabCase("Hello World"));        // "hello-world"
console.log(toKebabCase("  user_name--input ")); // "user-name-input"
console.log(toKebabCase("Already-Kebab"));      // "already-kebab"
console.log(toKebabCase(""));                   // ""
console.log(toKebabCase(123));                  // ❌ Throws error



// Create a JavaScript function called toKebabCase by completing the following steps:
// 1. Write a basic function outline that takes a string input and returns a modified string.
// 2. Enhance the function to handle different cases like camelCase, snake_case, spaces, and hyphens, converting all to kebab-case.
// 3. Implement error handling: if the input is not a string, throw an error; if it’s null, undefined, or empty, return an empty string.
// 4. Provide example calls demonstrating the function works correctly, including edge cases like "HelloWorld", "user_name-input", and invalid inputs like 123.
// Converts a string to camelCase (handles spaces, underscores, hyphens, and uppercase)
function toCamelCase(str) {
	if (str === null || str === undefined || (typeof str === 'string' && str.trim() === '')) {
		return '';
	}
	if (typeof str !== 'string') {
		throw new Error('Input must be a string');
	}
	str = str.trim();
	return str
		.replace(/([A-Z]+)/g, (m) => m.toLowerCase())
		.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
		.replace(/^(.)/, (m) => m.toLowerCase());
}