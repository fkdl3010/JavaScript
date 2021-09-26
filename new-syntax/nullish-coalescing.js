// Nullish coalescing operator

// Bad Code
function printMessageBad(text) {
    let message = text;
    if (text === null || text === undefined) {
        message = 'Nothing to display';
    }
    console.log(message)
}

// Good Code
function printMessageGood(text) {
    const message = text ?? 'Nothing to display';
    console.log(message)
}

// Default parameter is only for undefined
function printMessageDefault(text = 'Nothing to display'){
    console.log(text)
}

printMessageGood('박상기리');
printMessageGood(null);
printMessageGood(undefined);
console.log('---------------------')
printMessageDefault('박상기리');
printMessageDefault(undefined);
printMessageDefault(null);
