 console.log("bienvenue sur le blog");
        function fetchArticle(){
    fetch("http://localhost:3000/articles")
    .then(response => response.json())
    .then(function(allArticle){
                //affiche tout ce qu'il y a dans la base
        console.log(allArticle);
        //affiche la longueur de la base (nombre d'éléments présents dans le tableau)
        console.log(allArticle.length)
        //pour variable de 0 à la longueur de la base tu m'affiches les données correspondantes à un index.
        for (var i = 0 ; i < allArticle.length ; i++){
            if (allArticle[i].auteur!=null){

                // MARIE : cette ligne va afficher dans l'id "nomauteur" du doc html toutes
                // MARIE : les valeurs des auteurs (allArticle[i].auteur), les uns à la suite des autres (ce que fait le +=)
                document.getElementById("nomauteur").innerHTML +=" "+ "<br>" + allArticle[i].auteur + "<br>" + allArticle[i].titre + "<br>" + allArticle[i].date + "<br>" ;
                
                // MARIE : affiche dans la console du navigateur, tous les auteurs, les uns après les autres
                console.log(allArticle[i].auteur);

                // MARIE :  cette ligne va afficher dans l'id "titre" du doc html toutes
                // MARIE : les valeurs des titres (allArticle[i].titre), les uns à la suite des autres (ce que fait le +=)
                //document.getElementById("titre").innerHTML +=" "+ "<br>" + allArticle[i].titre;
                
                // MARIE : affiche dans la console du navigateur, tous les titres, les uns après les autres
                console.log(allArticle[i].titre);
                
                console.log(allArticle[i].contenu);
                //document.getElementById("date").innerHTML +=" "+ "<br>" + allArticle[i].date;
                console.log(allArticle[i].date);

// MARIE : ce que le code fait c'est afficher
// auteur1 / auteur2 / auteur3
// titre1 / titre2 / titre3
// date1 / date2 / date3

// le résultat souhaité est plutôt de type :

// auteur1 / titre1 / date1
// auteur2 / titre2 / date2
// auteur3 / titre3 / date3



                // MARIE : ce qu'il faudrait arriver à afficher, c'est d'abord une ligne contenant
                // MARIE : allArticle[i].auteur + allArticle[i].titre + allArticle[i].date;
                // MARIE : On utilise la concaténation de variable avec l'opérateur +
                
                // MARIE : puis une fois qu'une ligne a été affichée, incrémenter le compteur i
                // MARIE : puis afficher une nouvelle ligne avec de nouvelles valeurs de auteur2 / titre2 / date2
                // MARIE : puis une fois qu'une ligne a été affichée, incrémenter le compteur i
                // MARIE : puis afficher une nouvelle ligne avec de nouvelles valeurs de auteur3 / titre3 / date3
            }
            
        }
       
                   
        
    })
}

// appel de la fonction
fetchArticle();

function myFunction() {
  document.getElementById("nomauteur").innerHTML = "allArticle.auteur";
  document.getElementById("titre").innerHTML = "allArticle.titre";
  document.getElementById("date").innerHTML = "allArticle.date";
}

var ok = function(){
 
 
    function test(){
 
        alert('test !')
 
    }
 
}
 
 
window.onload = ok;

