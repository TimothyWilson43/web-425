let firstName: string = "Dave";
let lastName: string = "Wilson";

// function

function myName(firstName: string, lastName: string): string {
    return 'Hello ' + firstName + '' + lastName;
}

console.log(myName(firstName, lastName));