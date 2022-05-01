var hello = 'Hello';
let world = 'Hello world';
const _helloWorld = 'Hello world!';

const anotherFuncition = () => {
    console.log(hello);
    console.log(world);
    console.log(_helloWorld);
}

anotherFuncition();

const helloWorld = () => {
    globalVar =  'im global';
}

helloWorld();
console.log(globalVar);

const anotherFuncition2 = () => {
    var localVar = globalVar = 'Im global'
}

anotherFuncition2();
console.log(globalVar);

