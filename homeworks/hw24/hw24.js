function toCamelCase(input) {
    return input.replace(/_([a-z])/g, function (match, group) {
        return group.toUpperCase();
    } );
}


console.log(toCamelCase('hello_world_its_me'));
console.log(toCamelCase('very_long_property_name'));
console.log(toCamelCase('kebab-case-key'));

const response = {
    user_id: 'abc123',
    company_name: 'Hillel',
    contract_expiration_date: '22/11/2013',
    'secret-token' : 'unique$ecret',
};

let camelCasedResponse = {};

for (let key in response) {
    const newKey = toCamelCase(key);
    camelCasedResponse[newKey] = response[key];
}

console.log(camelCasedResponse);
