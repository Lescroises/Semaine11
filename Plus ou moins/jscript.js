$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "Trop bas";
    }
    if ($proposition.value == reponse) {
        $resultat.innerHTML = "Exact";
    }
    if ($proposition.value > reponse) {
        $resultat.innerHTML = "Trop haut";
    }
}

$bouton.onclick = verifier;