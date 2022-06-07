function score(dice) {
    // array of 5 dice
    // obviously we want to make the most money/points
    let diceCopy = [...dice]
    let totalScore = 0;
    let scoringArrayThrees = [
        { 1: 1000 },
        { 6: 600 },
        { 5: 500 },
        { 4: 400 },
        { 3: 300 },
        { 2: 200 }
    ]

    let frequencyTable = [
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
        [6, 0]
    ]

    for (let i = 0; i < diceCopy.length; i++) {
        let currentDieValue = diceCopy[i]
        frequencyTable[currentDieValue - 1][1] = frequencyTable[currentDieValue - 1][1] + 1;
    }
    console.log(frequencyTable)

    // sort by largest frequency

    let mostFrequent = 0;
    let frequency = 0;
    for (let i = 0; i < frequencyTable.length; i++) {
        let frequencyAtI = (frequencyTable[i][1])
        if (frequencyAtI > frequency) {
            mostFrequent = i + 1;
            frequency = frequencyAtI;
        }
    }
    console.log({ mostFrequent }, { frequency })

    if (frequency >= 3) {
        let triples = 3;
        for (let i = 0; i < diceCopy.length; i++) {
            if (diceCopy[i] == mostFrequent && triples > 0) {
                diceCopy.splice(i, 1);
                triples -= 1;
                i -= 1;
            }
        }

        //calculate score addition based on score table
        let scoreCard = scoringArrayThrees.find(item => Object.keys(item) == mostFrequent)
        let score = parseInt(Object.values(scoreCard));
        console.log(`You rolled three ${mostFrequent}s, valued at ${score} points!`)
        totalScore += score;
    }

    //diceCopy now excludes the triplet

    for (let i = 0; i < diceCopy.length; i++) {
        if (diceCopy[i] == 1) {
            console.log("You rolled a One, valued at 100 points!")
            totalScore += 100;
            diceCopy.splice(i, 1);
            i -= 1;
        }
        if (diceCopy[i] == 5) {
            console.log("You rolled a Five, valued at 50 points!")
            totalScore += 50;
            diceCopy.splice(i, 1);
            i -= 1;
        }
    }

    console.log(`The values that did not earn you points were`, diceCopy, `and your total score is ${totalScore}`)
    return totalScore;
}

score([6, 1, 6, 1, 6, 3, 4, 6, 6, 1, 1, 1, 1])