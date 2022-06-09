function createHashObject(createWord) {
    //establish object createWordHash to catalog properties/characters
    let createWordHash = {

    };

    //map createWord characters into the createWordHash object
    for (let i = 0; i < createWord.length; i++) {
        if (Object.keys(createWordHash).includes(createWord[i])) {
            createWordHash[`${createWord[i]}`] = createWordHash[`${createWord[i]}`] + 1;
        } else {
            createWordHash[`${createWord[i]}`] = 1
        }
    }
    return createWordHash
}

function isEqual(hash1, hash2) {
    const keys1 = Object.keys(hash1)

    for (let i = 0; i < keys1.length; i++) {
        let checker = keys1[i]
        if (hash1[checker] !== hash2[checker]) {
            return false
        }
    }
    return true;
}

function anagrams(word, words) {
    let reference = createHashObject(word)
    console.log(reference)

    for (let i = 0; i < words.length; i++) {
        let arrayWordHash = createHashObject(words[i])
        if (!isEqual(arrayWordHash, reference)) {
            words.splice(i, 1);
            i -= 1;
        } else {
            continue;
        }
    }

    console.log({ words })
    return words
}

anagrams("abba", ["abbbbba", "abbbba", "abba"])