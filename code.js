// Recursively calculate factorial of n for denominator
function factorial(n) {
    let result = 1;

    if (n == 0) {
        return result;
    } else {
        return (n * factorial(n - 1));
    }
}

// Approximate Euler's number using n terms of series
function e(n) {
    let sum = 1;
    let factorial = 1;

    // Compute i! iteratively
    for (let i = 1; i <= n; i++) {
        factorial *= i;
        sum += (1 / factorial);
    }

    return sum;
}
