// Enums allow a developer to define a set of named constants.

enum Numbers {
    X, // if not initialized it starts with 0 and auto-increments
    Y, // 1
    Z // 2
}

enum NumbersInitialized {
    A = 10,
    B = 0,
    X = 5,
    Y, // 6
    Z // 7
}

enum StringsInitialized {
    X = 'tudo bem',
    Y = 'tudo bom'
}

function calculate(variable: Numbers): void {
    // ...
}

calculate(Numbers.X)

// even if two enum members have the same value, must be the exact enum that is expected on the function