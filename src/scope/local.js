const helloWorld = () => {
    const hello = 'Hello world';
    console.log(hello);
}
helloWorld();
//console.log(hello);

var scope = 'I am global';

const functionScope = () =>{
    var scope = "im just a local";
    const func = () =>{
        return scope;
    }
    console.log(func());
};

functionScope();
console.log(scope);