/**
 * Closure
 * 
 * A closure is the combination of the function bundled
 * together with the references to its lexical environment.
 * 
 * 
 * 
 * In other words , a closure is a funciton that remembers its outer
 * variables and can access them
 */



function x(){
    let a = 3;
    function y(){ // this funciton forms a closure with variable a
        console.log(a);
        // let b = 7;
        // function z(){
        //     console.log(b);
        // }
        // z();
    }
    return y;
}

console.log(x());