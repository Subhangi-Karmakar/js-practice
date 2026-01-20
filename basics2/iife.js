// IIFE => Immediately Invoked Function Expression
// syntax- (function definition)()
// funtions that are immediately executed, also to avoide pollution from global scope variables

(function dbConnect() {  // named iife since it has a n ame
    console.log(`DB CONNECTED`)
})(); //we need a ; at the end of iife

(() => {  // unnamed iife
    console.log(`DB CONNECTED TWO`)
})();

((name) => {  // parameter
    console.log(`DB CONNECTED THREE ${name}`)
})("Nidhi");