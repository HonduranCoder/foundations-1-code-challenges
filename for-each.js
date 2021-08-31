// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.


/* Input
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
];


/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const justNames = [];
    arr.forEach(person => justNames.push(person.name));
    return justNames;
};

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const backwardsNames = []; 
    arr.reverse().forEach(person => backwardsNames.push(person.type));
    return backwardsNames;
}
/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spanishKeys = [];
    arr.forEach(key => spanishKeys.push({ nombre: key.name, tipo: key.type }));
    return spanishKeys; 
}


