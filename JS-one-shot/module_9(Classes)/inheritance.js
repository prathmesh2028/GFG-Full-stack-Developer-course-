//parent
class Laptop {
    constructor (ram,processor,generation){
        this.ram = ram;
        this.processor = processor;
        this.generation = generation;
    }

    displayMessage(){
        console.log(`laptop specifications : RAM ${this.ram} , processor ${this.processor} Generation ${this.generation}`);
    }

}

//child

class Dell extends Laptop {
    constructor(ram , processor, generation){
        super(ram,processor,generation);
    }
}


const Dell1 = new Dell("ABCD", "intel","16");
console.log(Dell1)
Dell1.displayMessage();