//to check whether it includes something character or string present in it or not

const message = "I am working at microsoft...!";

if(message.includes("microsoft")){
    console.log("person works at the micorsoft cmpany...!")
}


const vovels = "aeiou";
for (let char of message){
    if(vovels.includes(char)){
        console.log(`${char} is a vovel`)
    }
}