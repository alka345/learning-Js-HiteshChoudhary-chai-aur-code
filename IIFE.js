function chai1(){
    console.log("writing IIFE code");
}
chai1();//have to explicity end line by putting semicolon at the end of function call
(function chai2(){
    console.log("writing IIFE code to avoid global scope pollution");
})();

((parameter)=>{console.log(`Writing IFFE as arrow function-define ${parameter}`)})("paradefined")
