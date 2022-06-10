function formatDuration(seconds) {
    let remainingSeconds = seconds;
    let translation = [];
    let translationString = "";

    if (seconds == 0) {
        return "now"
    }

    //if remainder is more than a year
    if (remainingSeconds >= 31536000) {
        let years = (Math.floor(remainingSeconds / 31536000))
        remainingSeconds = (remainingSeconds % 31536000)
        if (years > 1) {
            translation.push({
                "years": years
            })
        }
        if (years == 1) {
            translation.push({
                "year": years
            })
        }
    }
    //days
    if (remainingSeconds >= 86400) {
        let days = (Math.floor(remainingSeconds / 86400))
        remainingSeconds = (remainingSeconds % 86400)
        if (days > 1) {
            translation.push({
                "days": days
            })
        }
        if (days == 1) {
            translation.push({
                "day": days
            })
        }
    }
    //hours
    if (remainingSeconds >= 3600) {
        let hours = (Math.floor(remainingSeconds / 3600))
        remainingSeconds = (remainingSeconds % 3600)
        if (hours > 1) {
            translation.push({
                "hours": hours
            })
        }
        if (hours == 1) {
            translation.push({
                "hour": hours
            })
        }
    }
    //minutes
    if (remainingSeconds >= 60) {
        let minutes = (Math.floor(remainingSeconds / 60))
        remainingSeconds = (remainingSeconds % 60)
        if (minutes > 1) {
            translation.push({
                "minutes": minutes
            })
        }
        if (minutes == 1) {
            translation.push({
                "minute": minutes
            })
        }
    }
    //seconds
    if (remainingSeconds > 1) {
        translation.push({
            "seconds": remainingSeconds
        })
    }
    if (remainingSeconds == 1) {
        translation.push({
            "second": remainingSeconds
        })
    }
    remainingSeconds = 0;
    console.log({ translation })

    //loop through translation table and turn into string
    for (let i = 0; i < translation.length; i++) {
        let currentObject = translation[i]
        let fromEndIndex = (translation.length - i)

        if (fromEndIndex > 2) {
            translationString += `${Object.values(currentObject)} ${Object.keys(currentObject)}, `
        }
        if (fromEndIndex == 2) {
            translationString += `${Object.values(currentObject)} ${Object.keys(currentObject)} and `
        }
        if (fromEndIndex == 1) {
            translationString += `${Object.values(currentObject)} ${Object.keys(currentObject)}`
        }
        console.log(translationString)
    }
    return translationString
}

formatDuration(0)