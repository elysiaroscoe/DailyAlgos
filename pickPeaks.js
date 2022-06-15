function pickPeaks(arr) {
    let results = {
        pos: [],
        peaks: []
    }

    //if incline changes from positive to negative its a peak
    let positiveSlope;
    let plateauLog = []
    //dont have to check the last value since it doesn't have a trailing value to compare it to
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] == arr[i]) {
            if (!positiveSlope) {
                //if it's a negative plateau it doesn't matter
                continue;
            }
            if (positiveSlope) {
                plateauLog.push(i)
                console.log({ plateauLog })
            }
        }

        if (arr[i + 1] > arr[i]) {
            if (positiveSlope) {
                //already logged positive slope, no change in slope direction
                plateauLog = [];
            }
            if (!positiveSlope) {
                //if slope was previously negative or null
                //this is a valley or the beginning, set slope positive
                positiveSlope = true;
            }
        }
        if (arr[i + 1] < arr[i]) {
            if (positiveSlope && plateauLog[0]) {
                //if the slope was a plateau and the next array index will make it negative this is a peak
                results.pos.push(plateauLog[0]);
                results.peaks.push(arr[i])
                console.log(results)
                positiveSlope = false;
                plateauLog = [];
            }
            if (positiveSlope && !plateauLog[0]) {
                //if the slope was previously positive and the next array index will make it negative this is a peak
                results.pos.push(i);
                results.peaks.push(arr[i])
                console.log(results)
                positiveSlope = false;
            }

            if (!positiveSlope && i == 0) {
                //if slope was previously negative or null it will stay false
                //we will log negative
                positiveSlope = false;
            }
        }
    }

    //  return {pos:[],peaks:[]}
    console.log(results);
    return results;
}

pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3])