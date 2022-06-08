function validBraces(braces) {
    //Takes in a string of braces

    let reference = [
        {
            "open": ["[", "{", "("]
        },
        {
            "closed": ["]", "}", ")"]
        }
    ]

    let openArray = [];

    //edge cases first
    //if the first element is a closing brace, return false
    if (reference[1].closed.includes(braces[0])) {
        console.log("starting with a closed")
        return false;
    }
    //if the last element is an opening brace, return false
    if (reference[0].open.includes(braces[braces.length - 1])) {
        console.log("ending with an open")
        return false;
    }

    //iterate through the string of braces
    for (let i = 0; i < braces.length; i++) {
        let currentCharacter = braces[i];
        console.log(currentCharacter)
        //we want to assess if the character is open or close
        if (Object.values(reference[0].open).includes(currentCharacter)) {
            console.log("it's open")
            openArray.push(currentCharacter)
            console.log({ openArray })
        }
        else {
            console.log("it's closed")
            let lastOpen = openArray[openArray.length - 1];
            //if the closing brace does not match in style to the most recent open brace it fails
            if ((reference[0].open).indexOf(lastOpen) !==
                (reference[1].closed).indexOf(currentCharacter)) {
                console.log("The values were not comparable")
                return false;
            }
            else {
                openArray.pop();
                console.log(openArray)
            }
        }
    }
    return true;
}

console.log(validBraces("[]"))