const evaluar = () =>{
    const edad = prompt("cuál es tu edad?")
    if(edad>=18){
        document.write("Ya eres viejo")
    }else{
        document.write("Escuincle")
    }
};

setTimeout(evaluar,5000);