// unknown is the type-safe counterpart of any. Anything is assignable to unknown, but unknown isn’t
// assignable to anything but itself and any without a type assertion or a control flow based narrowing.
// Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.

// Only equality operators are allowed with unknown
function f10(x: unknown) {
    x == 5;
    x !== 10;
    // x >= 0; // Error
    // x + 1; // Error
    // x * 2; // Error
    // -x; // Error
    // +x; // Error
}

// No property accesses, element accesses, or function calls
function f11(x: unknown) {
    // x.foo; // Error
    // x[5]; // Error
    // x(); // Error
    // new x(); // Error
}

// unknown assignable only to itself and any
function f22(x: unknown) {
    let v1: any = x;
    let v2: unknown = x;
    // let v3: object = x; // Error
    // let v4: string = x; // Error
    // let v5: string[] = x; // Error
    // let v6: {} = x; // Error
    // let v7: {} | null | undefined = x; // Error
}