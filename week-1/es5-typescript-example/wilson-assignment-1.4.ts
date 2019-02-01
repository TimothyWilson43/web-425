let firstName: string = 'Dave';
let lastName: string = 'Wilson';

// function

function nameHere(firstName: string, lastName: string): string {
    return 'Hello ' + firstName + '' + lastName;
}

console.log(nameHere(firstName, lastName));