function findSequential([array]) {
    for (let i=0; i<array.length;i++){
      let arrayValue = array[i];
      let consequtiveAmount = 0;
      
      if (array[i+1] == arrayValue){
        consequtiveAmount += 1;
        array.shift();
      }
      
      if (array[i+1] !== arrayValue){
        consequtiveAmount +=1;
        console.log(consequtiveAmount)
        array.shift();
        return `${arrayValue}*${consequtiveAmount}`;
      }
    }
  }
  
  
  function compress(music) {
    const answerString="";
    
    for (let i=0;i<music.length;i++){
      let arrayValue = music[i];
      let consequtiveFollows = false;
      let equalFollows = false;
      let sequenceAscend = null;
      console.log({arrayValue});
      if (music[i+1] == arrayValue){
        equalFollows = true;
      }
      if (music[i+1] == arrayValue+1 || music[i+1] == arrayValue-1){
        consequtiveFollows = true;
        if(music[i+1] == arrayValue+1){
          sequenceAscend = true;
        }
        if(music[i+1] == arrayValue-1){
          sequenceAscend = false;
        }
      }
      console.log({consequtiveFollows}, {sequenceAscend}, {equalFollows})
      //when equalFollows is true, we need to find how many and log as number*count
      
      if(equalFollows){
        let num =  findSequential(music)
  //       answerString = answerString + ;
        console.log(answerString, music)
      }
      
      //three or more consequtive numbers shortened to first-last
  
    }
    return answerString;
  }