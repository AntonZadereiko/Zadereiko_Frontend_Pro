function toCamelCase(input) {
    const matches = input.match(/_([a-z])/g);

    if (!matches) {
        return input;
    }

    for (const match of matches) {
        input = input.replace(match, match.charAt(1).toUpperCase());
    }

    return input;
}

console.log(toCamelCase('hello_world'));
console.log(toCamelCase('very_long_property_name'));
console.log(toCamelCase('kebab-case-key'));

