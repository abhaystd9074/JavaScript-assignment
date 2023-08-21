function uniqueCharactersCheck(x) {
    const set = new Set();

    for (let i=0;i<x.length;i++) {
        if (set.has(x[i])) {
            console.log(`The input string contains duplicates`);
            return false;
        }
        set.add(x[i]);
    }
    console.log(`The input string contains only unique characters`);
    return true;
}

uniqueCharactersCheck("abhay");
uniqueCharactersCheck("Mithun");


