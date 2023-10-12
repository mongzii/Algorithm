function solution(absolutes, signs) {
    //양수끼리 더하고 음수끼리 더하고 마지막에 빼면 어떤가
    let plusArr= [];
    let minusArr= [];
    let plusSum = 0;
    let minusSum = 0;
    for(let i=0; i<signs.length; i++){
        if(signs[i] === true){
            plusArr.push(absolutes[i])
        } else if(signs[i] === false){
            minusArr.push(absolutes[i])
        }
    }
    for(let i=0; i<plusArr.length; i++){
        plusSum += plusArr[i]
    }
     for(let i=0; i<minusArr.length; i++){
        minusSum += minusArr[i]
    }
    return (plusSum - minusSum);
}