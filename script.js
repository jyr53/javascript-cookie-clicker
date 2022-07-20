let score = 0;
let fde = 1;
let incre = 50;
let arrCout = [];
for (i = 0; i < 30; i++) {  // pour charger le tableau
    arrCout.push(incre);
    incre = incre + 50;
}
let autoTime = 0;
let cout = 0;
let autoC = 0;
let limitBonus = 5000;
let nIntervId;
let valBonus = 1;
let limitT = 30;
let id;
let element;
let bloqBo = true;
let tempoS;

function MAJAffichage(id, element) { //fonction affichage
    let piece = document.getElementById(id);
    piece.innerText = element;
}

function augmenter() {
    score = score + fde * valBonus;
    MAJAffichage("affichage", score);
    controleDe();
    controleAut();
    controlebonus();
}

function aleatoire() { //fonction du dé
    if (score > arrCout[cout]) {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        fde = arr[Math.floor(Math.random() * 10)];
        MAJAffichage("valde", fde);
        score = score - arrCout[cout];
        MAJAffichage("affichage", score);
        cout++;
        MAJAffichage("cout", arrCout[cout]);
    }
}
function controleAut() {//controle l'affichage de l'autoclick
    let autoCk = document.getElementById('autoCliker');
    let autoCkval = document.getElementById('NBAC');
    if (score > arrCout[autoC + 1]) {
        autoCk.style.opacity = 1;
    }
    else {
        autoCk.style.opacity = 0;
    }
}
function controleDe() {//permet de modifier l'affichage selon son id en css du dé
    let piece = document.getElementById('affichade');
    let denum = document.getElementById('deNum');

    if (score > arrCout[cout]) {
        piece.style.opacity = 1;
        denum.style.opacity = 1;
    }
    else {
        denum.style.opacity = 0;

    }
}
function controlebonus() {//permet de modifier l'affichage selon son id en css du bonus
    let piece = document.getElementById('bonus');

    if (score > limitBonus) {
        piece.style.opacity = 1;
    }
    if (score < limitBonus && bloqBo) {
        piece.style.opacity = 0;
    }
}
function autoClick() { //fonction autoclick
    if (score > arrCout[autoC + 1]) {
        score = score - arrCout[autoC + 1];
        MAJAffichage("affichage", score);
        autoC++;
        MAJAffichage("NBAC", autoC);
        MAJAffichage("coutAuTC", arrCout[autoC + 1]);
        if (!nIntervId) {
            nIntervId = setInterval(autocliker, 1000);
        }
    }
};
function autocliker() {
    score = score + (fde * valBonus * autoC);
    MAJAffichage("affichage", score);
    controleDe();
    controleAut();
    controlebonus();
}
function bonus() {
    if (score > limitBonus && bloqBo) {
        valBonus = 2;
        bloqBo = false;
        score = score - limitBonus;
        MAJAffichage("affichage", score);
        tempoS = setInterval(tempsBonus, 1000);
    }
}

function tempsBonus() {
    limitT--
    MAJAffichage("timeBonus", limitT);
    if (limitT == 0) {
        valBonus = 1;
        bloqBo = true;
        clearInterval(tempoS);
        limitT = 30;
        MAJAffichage("timeBonus", limitT);
    }
}
function reset() {
    window.location.reload();
}
