let score=0;
let fde=1;
let arrCout=[50,100,150,200,250,300,350,400,450,500,550,600,650];
let autoTime=[0,0,0,1000,500,333,250,200,150]
let  cout=0;
let autoC=3;
let nIntervId;
function MAJAffichage(){
    let piece=  document.getElementById('affichage');
    piece.innerText=score;
}

function augmenter(){
    score=score+fde;
    MAJAffichage();
    controle();
}
function aleatoire(){
if (score>arrCout[cout]){
    let arr = [1,2,3,4,5,6];
    fde = arr[getRandomInt(6)];
    faceDe();
    score=score-arrCout[cout];
    MAJAffichage();
    cout++;
    prixDe();
}}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);}  

function faceDe(){
    let piece=  document.getElementById('affichade');
    piece.innerText=fde;
    console.log(fde);
}
function controle(){
    if (score>arrCout[cout]){
        let piece=  document.getElementById('affichade');
        piece.style.opacity= 1;
        piece.style.color = 'red';
        piece.style.backgroundColor = 'yellow';
}
else {
        let piece=  document.getElementById('affichade');
        piece.style.opacity=0.5;
}
}
function prixDe(){
    let piece=  document.getElementById('cout');
    piece.innerText=arrCout[cout];

}
function autoClick(){
  if (score>arrCout[autoC]){
         score=score-arrCout[autoC];
            MAJAffichage();
            nIntervId=null;
    if (!nIntervId) {
        nIntervId = setInterval(augmenter,autoTime[autoC]);}
        prixauto();
        autoC++;
}}
function prixauto(){
    let piece=  document.getElementById('coutAuTC');
    piece.innerText=arrCout[autoC];}