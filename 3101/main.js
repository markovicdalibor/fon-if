let list = [1,2,3,4,5,6,7,8,9]

/*function test(n){
    if(n==7){
        return;
    }
    console.log(n);
}

list.forEach(e => {
    test(e);
});*/

/*function broj(){
    list.forEach(e => {
        console.log("ovo je broj "+e);
        
    });
}
broj();*/

/*const brojanje=()=>{
    list.forEach(e => {
        console.log("ovo je broj "+e);
    });
};
brojanje();*/

/*const brojanje=()=>{
    let n= prompt('unesi br');
    for (let i = 1; i <= n; i++) {
        console.log(`brojevi su od 1 do ${n} su ${i}`);
        ;
        
    }
}
brojanje()*/
/*
let glob = 'globa';
function prva(){
    let glob="Netracno"
    console.log('maska '+glob);
    
}
function druga(){
    glob="Promena"
}
prva();
console.log('original '+glob);

druga();
console.log('promena '+glob);
*/
let a = prompt ('unesi ime');
let b = prompt ('unesi prezme')
let c = prompt ('adresu')
const fuja=(ime,prezime,prebivaliste)=>{
    console.log( `Ja ${ime} ${prezime} prebivam i obitavam na adresi ${prebivaliste}`);
};
fuja(a,b,c)