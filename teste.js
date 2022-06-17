const main = (params) => {
    const factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
    let value = 500000;
    factorials.forEach((factorial) => value -= factorial);
    return value;
}
console.log(main());