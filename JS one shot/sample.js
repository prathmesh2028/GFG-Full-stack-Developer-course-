



function paligram(s){
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const strtolow = s.toLowerCase();
    for(let char of alpha){
        if(!strtolow.includes(char)){
            return 0;
        }
    }
    return 1;
}



const string = "The quick brown fox jumps over the lazy dog";
console.log(paligram(string));