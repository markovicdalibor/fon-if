//boble sort
//let niz=[1,8,15,9,4,25,3,81,2,110,11];
/*let duzina = niz.length;
for (let i = 0; i < duzina-1; i++) {
    for (let j = i+1; j < duzina; j++) {
       if (niz[i]>niz[j]) {
           let x=niz[i];
           niz[i]=niz[j];
           niz[j]=x;
           
       }
        
    }
    
}
console.log(niz);*/
/*1
niz.forEach(i=>{
    if(i%2==0){
        i=0;
    }
    console.log(i);
});

(i)=>{

}

//2
let povrce=['lubenica','sargarema','keleraba','kupus','kelj','luk'];
let x =0;

povrce.forEach(i=>{
    if(i=="cvekla"){
        x =1;
       
    }
});
if(x==0){
    povrce.push('cvekla');
    console.log(povrce);
}
else{
    alert('ghghf')
}
*/
//3
let dan = prompt('unesi dan: ')
switch(dan){
    case "ponedeljak":
        alert ('Mrzim ponedeljke')
        break;
    case "utorak":
        alert ('Mrzim utorak')
        break;
        case "sreda":
    alert ('Mrzim sreda')
    break;
    case "cetvrtak":
    alert ('Mrzim cetvrtak')
    break;
    case "petak":
    alert ('Mrzim petak')
    break;
    case "subota":
    alert ('volim subotu')
    break;
    case "nedelja":
    alert ('Volim nedelju')
    break;
    default:
    alert('greska')
}



