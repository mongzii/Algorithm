function solution(phone_number) {
    // var answer = '';
    // return answer;
    //map이용하면 좋을듯
    //길이가 11이면 11-4=7   (0,7)
  let front =  phone_number.slice(0,phone_number.length-4);
    let back = phone_number.slice(phone_number.length-4, phone_number.length);
    let aaa = back.split('')
    
    let bbb =(front.split('')).map((el)=>  "*")
    
   return (String(bbb.concat(aaa).join('')))
   
}