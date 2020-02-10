/*function reakcija() {
    document.write("<h1>Reakcija</h1>");
}

const novaReakcija = ()=>{
    document.write(`<h1>Reakcija koja sve cisti i ubacuje sliku</h1><img src='../../slike/tesla.jpg'>`);

}

const reakcijaClick =()=>{
    let user = prompt('unesi ime');
let pass= prompt('unesi password');
    if (user=="admin" && pass=="admin") {
        document.write(`Zdravo ${user}<br>Pristup odobrem`)
    }
}

function prikaziSliku() {
    document.write(`<h1>Nova slika</h1><img src='../../slike/tesla.jpg'>`);
}

function reakcija() {
    //alert("NEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
    document.write(`<h1>Sad si sve obrisao</h1>`);
}*/

function provera() {
    let lozinka=forma.lozinka.value.length
    if (lozinka<5) {
        document.getElementById('paragraf').innerHTML="lozinka je mnogo slaba"
    }
    else if (lozinka>10) {
        document.getElementById('paragraf').innerHTML="lozinka je mnogo jaka"
    }
    else{
        document.getElementById('paragraf').innerHTML="lozinka je dobra"
    }
}