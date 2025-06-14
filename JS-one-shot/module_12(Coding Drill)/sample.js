const str = "Count Distinct Elements" ;
let newstr = "";
for(let char of str){
    if(char === " " || char === "-"){
        newstr+="_"
    }
    else{
        newstr+=char;
    }

}

console.log(newstr)