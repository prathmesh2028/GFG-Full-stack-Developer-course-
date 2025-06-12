//Scope and scope chain



let b = 7 ;
let c = 100;
let a =3 ;
function x(){
    console.log({ a });
    function y(){ //inner function - inside function x
        console.log({b});
        function z(){
            console.log({c});
        };
        z();
    };
    y();
    
};
x();