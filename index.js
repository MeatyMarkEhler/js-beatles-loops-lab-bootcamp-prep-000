



function johnLennonFacts(bestbeatle){
  var n = 0;
  while (n < bestbeatle.length){
    bestbeatle[n] = bestbeatle[n] + "!!!";
    n++;
  }
  return bestbeatle
}




function theBeatlesPlay (musicians, instruments) {
  var array = 0
  for ( i = 0; i<musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}

