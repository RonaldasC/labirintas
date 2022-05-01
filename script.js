'use strict';
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
function paliestaSiena() {
    if ('mouseover') {
        document.getElementById('img_teletubies').style.display = 'block';
        console.log('Paliesta siena');
    }
}
document.getElementById('start').addEventListener('click', pradedam);
function pradedam() {
    if ('click') {
        document.getElementById('img_teletubies').style.display = 'none';
    }
}
document.getElementById('paliesk_mane').addEventListener('mouseover', pabaiga);
function pabaiga () {
    if ('mouseover') {
        document.getElementById('cute_buny').style.display = 'block'
    } 
}
document.getElementById('cute_buny').addEventListener('click', isjungimas);
function isjungimas () {
    if ('click') {
        document.getElementById('cute_buny').style.display = 'none';
    }
    return (paliestaSiena());
}

