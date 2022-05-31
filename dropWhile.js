function dropWhile(arr, pred) {
  // Your Kafkaesque code here, plox...
  
  let result =  [...arr]
  console.log(result);
  
  let i = 0;
  while(pred(arr[i])){
    result.shift();
    i++;
    console.log("condition met, item removed")
  }
  console.log(result);
  return result;
}

