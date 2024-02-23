function countVowels(str) {
    let vowelsCount = 0;

    for (const char of str) {
        if ('aeiouAEIOU'.includes(char)) {
            vowelsCount++;
            console.log(char);
        }
    }

    // return vowelsCount;
    console.log(vowelsCount);
}

// console.log(countVowels("onion")); // Output: 3
countVowels("onion")