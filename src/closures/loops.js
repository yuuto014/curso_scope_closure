const anotherFuncition = () =>{
    for(let i = 0; i < 10 ; i++){
        setTimeout(()=>{
            console.log(i);
        },10000)
    }
}

anotherFuncition()