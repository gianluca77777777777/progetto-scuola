//1
let a = true;
let b = "ciao come va";
let c = 10;

//2
let f = 10;
if(f>=0){
    console.log("positvo")
}if(f<=0){
    console.log("negativo")
}

//3
function pn(numero){
    if(numero>=0){
        console.log("positivo")
    }
    if(numero<=0){
        console.log("negativo")
    }
}
pn(-1);

//4
function stampa(n){
    for(let i = 0;i<=n;i++){
        console.log(i)
    }
}
stampa(10);

//5
function media(num,num1,num2){
    let m = (num+num1+num2)/3;
    if(m<100){
        console.log(m*m)
    }
}
media(12,30,23);

//6
function array(arr){
    for(let i = 0;i<arr.length;i++){
        console.log(arr[i]+1)
    }
    
}
let arrayy = [1,3,4,5,677,6]
array(arrayy);

//7,8
function stampaquadrati(n,m,k){
    for(let i = n;i<=m;i++){
        console.log(i*k)
    }
}
stampaquadrati(1,10,15);
