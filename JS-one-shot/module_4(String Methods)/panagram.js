// Keep a boolean array of 26 characters and whenever you encounter a character between A-Z both uppercase and lowercase, then set the value of corresponsding array index as 1. So for A or a we set arr[0]=1 and so on. At the end, all the indices of array should contain a 1 for a panagram to exist.
// You are given a string s. You need to find if the string is a panagram or not.

// A panagram contains all the letters of english alphabet at least once.

// Examples:

// Input: s = "Thequickbrownfoxjumpsoverthelazydog"
// Output: 1
// Input: s = "HeavyDuty"
// Output: 0

let s = "Thequickbrownfoxjumpsoverthelazydog";

function ispanagram(s){
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const lowerStr = s.toLowerCase();

    for(let char of alpha){
        if(!lowerStr.includes(char)){
            return -1;
        }
    }
    return 1;
}
console.log(ispanagram(s));