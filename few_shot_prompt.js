// Converts a string to camelCase (handles spaces, underscores, hyphens, and uppercase)
function toCamelCase(str) {
	return str
		.replace(/([A-Z]+)/g, (m) => m.toLowerCase()) // convert all uppercase to lowercase
		.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '') // capitalize after separator
		.replace(/^(.)/, (m) => m.toLowerCase()); // ensure first letter is lowercase
}

// ...existing code...

// Additional context or functions can be added here
