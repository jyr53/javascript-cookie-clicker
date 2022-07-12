let score=0;
let fde=1;
let arrCout=[50,100,150,200,250,300,350,400,450,500,550,600,650];
let autoTime=[0,0,0,1000,500,333,250,200,150]
let  cout=0;
let autoC=3;
let limitBonus=5000;
let nIntervId;
let valBonus=1;
let limitT=30;
let id;
let element;
let bloqBo=true;

function MAJAffichage(id,element){ //fonction affichage
    let piece=  document.getElementById(id);
    piece.innerText=element;
}

function augmenter(){
    score=score+fde*valBonus;
    MAJAffichage("affichage",score);
    controle();
}

function aleatoire(){
if (score>arrCout[cout]){
    let arr = [1,2,3,4,5,6];
    fde = arr[Math.floor(Math.random() * 6)];
    MAJAffichage("affichade",fde);
    score=score-arrCout[cout];
    MAJAffichage("affichage",score);
    cout++;
    MAJAffichage("cout",arrCout[cout]);
}}
  
function controle(){//permet de modifier l'affichage selon son id en css
    let piece=  document.getElementById('affichade');
    if (score>arrCout[cout]){
        piece.style.opacity= 1;
        piece.style.color = 'red';
        piece.style.backgroundColor = 'yellow';
}
else {
        piece.style.opacity=0;
}}

function autoClick(){ //fonction 
  if (score>arrCout[autoC]){
         score=score-arrCout[autoC];
         MAJAffichage("affichage",score);
            nIntervId=null;
    if (!nIntervId) {
        nIntervId = setInterval(augmenter,autoTime[autoC]);}
        MAJAffichage("coutAuTC",arrCout[autoC]);
        autoC++;
}}

function bonus(){
    if (score >limitBonus&&bloqBo){
        valBonus=2;
        bloqBo=false;
        score=score-5000;
        MAJAffichage("affichage",score);
        tempoS=setInterval(tempsBonus,1000);
}}

function tempsBonus(){
  limitT--
  MAJAffichage("timeBonus",limitT);
if (limitT==0)
{
 valBonus=1;
 bloqBo=true;
 clearInterval(tempoS);
 limitT=30;
 MAJAffichage("timeBonus",limitT);
}}

