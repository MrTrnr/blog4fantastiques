function fetchArticle(){

fetch("https://localhost:3000/articles")
.then(response => response.json())
.then(function(allArticle){
    //affiche tout ce qu'il y a dans la database
    console.log(allArticle)
})
}
// faire appel à l'API? 







//je déclare et j'initialise toutes mes variables avec différentes valeurs
let maVariableString = '254';
let maDeuxiemeVariableString = "coucou";
let maTroisiemeVariableString = "les";
let maQuatriemeVariableString = "gens";

// je déclare ma variable idNum
let idNum;

// je l'initialise avec la valeur 5 (qui est un Number)
idNum = 5;

//j'aurais aussi pu écrire une seule ligne
//let idNum = 5;

//ici je fais afficher la valeur de ma variable maVariableString dans l'id demo1, c'est à dire 254
document.getElementById('demo1').innerHTML = maVariableString;

document.getElementById('demo2').innerHTML = maDeuxiemeVariableString;
document.getElementById('demo3').innerHTML = maTroisiemeVariableString;
document.getElementById('demo4').innerHTML = maQuatriemeVariableString;

//ici je fais une boucle avec un compteur (usuellement le compteur s'appelle i)
//la boucle commence avec "compteur" qui a une valeur de 0, elle continue tant que compteur est inférieur à 3, si compteur est égal à 3 ou plus, alors la boucle s'arrête. La boucle s'exécute pour les valeurs de compteur = 0 puis 1 puis 2; soit 3 fois.
//à chaque tour de boucle, le compteur s'incrémente de 1, c'est la notation "compteur++""
for (var compteur=0; compteur<3 ; compteur++){

//ici j'affiche un texte dynamique, c'est à dire qu'il va varier en fonction de la valeur de idNum, qui commence à 5. J'utilise la concaténation, c'est à dire le fait de rassembler plusieurs variables (ici des chaînes de caractères), on peut aussi concaténer des chaînes de caractères avec une ou plusieurs variables de type number. Attention si on met l'opérateur + entre deux variables de type Number, on aura une addition Exemple :

// let a=2;
// let b=5;
// a+b va donner 7

// let a="deux";
// let b="cinq";
// a+b va donner deuxcinq

// pour mettre de l'espace entre deux variables je peux écrire a + " " + b ce qui va donner deux cinq

document.getElementById('demo'+idNum).innerHTML = "mon idNum vaut : "+idNum;

//ici j'incrémente idNum
idNum++;
}

