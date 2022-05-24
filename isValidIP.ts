
function isValidIP(IP) {
    let  result: boolean = false;

    //separate IP into octets
    //loop through octets to check validations
    let octetArray: Array<string> = [];

    let currentOctet: string = "";
    for(let i=0; i<IP.length; i++){
        //parseInt checks if its not a number
        if(IP[i] !== "." && isNaN(parseInt(IP[i]))){
            console.log("It was not a number or period")
            return result;
        }
        //check to find leading 0s
        if (IP[i] == "0"){
            if(IP[i-1] === undefined || IP[i-1] == "."){
                console.log(IP[i-1], "The preceeding character didn't exist or was a period, making this a leading 0")
                return result;
            }
        }

        //if the character is a period add the number(s) preceeding it to an array
        else if(IP[i] == "."){
            octetArray.push(currentOctet);
            currentOctet = "";
        }
        //if the character is a number, add it to the current octet
        else {
            currentOctet = currentOctet + IP[i];
            console.log({currentOctet});
            console.log({octetArray});
        }
    }
    if (currentOctet !== ""){
        octetArray.push(currentOctet)
    }

    //if array is less than 4 octets long, it is false
    if(octetArray.length !== 4){
        return result;
    }
    //loop through array
    for(let i=0; i<octetArray.length;i++){
        //determine if each octet is 0<255
        if ((0 > parseInt(octetArray[i])) || (parseInt(octetArray[i]) > 255)){
            return result;
        }
    }
    result = true;
    console.log({octetArray})
    console.log({result})
    return result;
}
