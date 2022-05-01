'use strict';
/*Prologas
Palieku daug gramatikos rasybos klaidu bet jau man dzin ]:D

Prikomentavau nemazai kai pabaigiau rašyt kodą šiam projektui užtrukau 5 valandas html+css ir 
7 valandas js į tas 7 valandas įėjo nemažai laiko klaidu taisymui ieškant kaip atlikt kaaikuriuos veiksmus
pvz su audio failu ką daryt nes nei mokiausi bet reikėjo pažiūrėt kad užvestu kas ant kelio
ką toliau daryt palikau kodo artifaktus uzkomentuotus kas nesigavo ką bandžiaua etc. 
kodas tikrai gali būti optimizuotas ir geriau parašytas bet šiaim momentui bus gerai ir taip
svarbu tikslas pasiektas!!!!

/*
palieku artifaktus užkomentaves, kad matytusi kiek visko išbandžiau
iki tol kol pradėjo veikt
*/
/*
const sienos = document.getElementById('start1');
sienos.addEventListener("mouseover", funkcijosPavadinimas);
const sienos1 = document.getElementById('start');
sienos1.addEventListener("mouseover", funkcijosPavadinimas);

function funkcijosPavadinimas() {
    document.getElementById("demo").innerHTML = "Moused over!<br>"
}
*/
/*
const sienos = document.getElementsByClassName('walls_left');
sienos.addEventListener('onmouseover', paliestaSiena, false);
function paliestaSiena(i) {
    if (i.type == 'onmouseover') {
        alert('Paliesta siena');
    }
}
*/
/*
const sienos = document.getElementsByClassName('walls_left');
sienos.addEventListener('onmouseover', paliestaSiena, false);
sienos.onmouseout = logMouseOut;
document.getElementsByClassName('path').addEventListener('mouseover', paliestaSiena);
*/
/*kadangi nesigavo parašyt su klasėm teko panaudot id 
po šio komentaro esantis getElement kodas tikrina ar pelė užėjo ant labirinto sienos
kadangi labirinto sineos ir keles padaryta iš div elementu kiekvienas ju gavo id.
 šiuo atveju keles negavo jokio id*/

document.getElementById('walls_right').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_left').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_left_1').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_right_1').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_left_2').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_right_2').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_left_3').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_right_3').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_left_4').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_mid_4').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_right_4').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_mid_5').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_right_5').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_left_6').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_mid_6').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_right_6').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_left_7').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_right_7').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_left_8').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_mid_8').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_right_8').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_left_9').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_right_9').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_left_10').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_right_10').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_left_11').addEventListener('mouseover', paliestaSiena);
document.getElementById('walls_right_11').addEventListener('mouseover', paliestaSiena);
/*ši funkcija tikrina ar labirinto siena buvo paliesta
 nusiemus komentarus nuo console log galima matyt kiek kartu siena buvo paliesta ir tuo 
 pačiu kodo rašymo eigoje padėjo ištestuot kiekviena sienos bloka ar veikia*/
function paliestaSiena() {
    if ('mouseover') {
        document.getElementById('img_teletubies').style.display = 'block';
        //console.log('Paliesta siena');
    }
}
/*čia aprašoma pradžios mygrukas ir kad ji paspaudus teletabio paveiksliukas pradinksta
vieta kuri aprašo paveiksliuko dingima .style.display = 'none' kadangi css display yra block
tai po šio veiksmo padaro block i none kas ir pradangina teletabį*/
document.getElementById('start').addEventListener('click', pradedam);
function pradedam() {
    if ('click') {
        document.getElementById('img_teletubies').style.display = 'none';
    }
}
/* čia aprašomas mygtukas pabaigos ir priešingai nei pradžios mygtukas pakeičia 
paveiklsiuko css property display none į display block atsakinga vieta už tai yra
style.display = 'block'*/
document.getElementById('paliesk_mane').addEventListener('mouseover', pabaiga);
function pabaiga () {
    if ('mouseover') {
        document.getElementById('cute_buny').style.display = 'block'
    } 
}
/* funkcija apraso audio failą*/
function play() {
    const audio = document.getElementById("audio");
}
/* ši funkcija tiesiog paleidcia muzikos faila kai pelės zymekslis yra ant paveiksliuko
pirmu variantu muzika pradedavo grot uzvedus zymekly ant pabaigos myktuko tačiau norėjau pridėt
loop propertį audio failui todel pakeiciau kada audio groja ko pasekoje vistiek nesigavo
tai ko norėjau todėl si dalis galėtu ir neegzistuot o funkcija muzikaGros buti priskirta
pabaigos mygtukui */
document.getElementById('cute_buny').addEventListener('mouseover', muzikaGros);
function muzikaGros() {
    if ('mouseover'){
        audio.play();
    }
}
/* aprašoma kai paspaudus paveiksliuka paleidziama funkcija isjungimas kuri atlieka 
kelis darbus pirma paveiklsiuka padaro nematoma pakeisdama jo propertį is block i none
ir sustabdomas audio failo grojimas ir sugryzta į pradžios langa su teletabiu*/
document.getElementById('cute_buny').addEventListener('click', isjungimas);
function isjungimas () {
    if ('click') {
        document.getElementById('cute_buny').style.display = 'none';
    }
    if ('click') {
        audio.pause();
    }
    return (paliestaSiena());
}
/* nepadaryti darbai ką norėjau:
pridėti skaišiuokle kiek kartu suklysta
prideti spalvu imput laukelius kad pagal savo norus būtų galima keisti sienu ir kelio spalvas
nėra laikmačio kuris leistų labiau įsitraukt į žaidimą ir klaidų leistų žaidėjui pridaryt
buvau sumastes imput laukus su chek box sirdis sveika ar ne ir pagal tai pabaigos keistusi
*/