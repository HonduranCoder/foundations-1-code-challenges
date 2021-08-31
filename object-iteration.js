// user Object.values and Object.keys to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/


/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

/*
test('should return an object with screaming keys', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        NAME: 'scooter',
        AGE: 1,
        TYPE: 'puppy'
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeMoreScreamingKeys(pet);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


*/
export function makeWeirdStringFromKeys(someObject) {
    const random = Object.keys(someObject);
    //join
    return random;
}


/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    return {};
}

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    return [];
}
