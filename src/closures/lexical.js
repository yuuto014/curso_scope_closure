const builtCount = (i) =>{
    let cout = i;
    const displayCount = () =>{
        console.log(cout++);
    }
    return displayCount;
}

const myCount = builtCount(1);
myCount();
myCount();
myCount();

const myOtherCount = builtCount(10);
myOtherCount();
myOtherCount();