var vous;
var ordi;
function Votrechoix(v){
vous=v;document.votrechoix.src='../img/choix'+v+'.png';
Choixordi();
}

function Choixordi(){
ordi=Math.round(Math.random()*2)+1;
document.choixordi.src='../img/choix'+ordi+'.png';
Pipaci();
}

function Pipaci(){
if((vous==1) && (ordi==3) || (vous==2) && (ordi==1) || (vous==3) && (ordi==2))
{alert('BRAVO !!!!');document.votrechoix.src="../img/choix.png";document.choixordi.src="../img/choix.png";}
else{Ordipipaci();}
}

function Ordipipaci(){
if((ordi==1) && (vous==3) || (ordi==2) && (vous==1) || (ordi==3) && (vous==2))
{alert('PERDU !!!!');document.votrechoix.src="../img/choix.png";document.choixordi.src="../img/choix.png";}
else{alert('Egalité !\nA REFAIRE!');document.votrechoix.src="../img/choix.png";document.choixordi.src="../img/choix.png";}
}