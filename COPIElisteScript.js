console.log("bienvenue sur le blog");
//déclartion de j, qui correspond à l'ordre d'un article
let j;
//déclaration d'un tableau qui va contenir des _id, utiliser let
 let TableauId;

// on va chercher toutes les ID des articles dans la base et on va les stocker dans un tableau
function fetchAll(){
    fetch("http://localhost:3000/articles")
    .then(response => response.json())
    .then(function(all){
        //on exécute une boucle pour répéter l'opération du nombre d'article
        TableauId = [""];
        for (var a=0 ; a< all.length ; a++){
// récupérer une _id de type "2665djioefj535ejfejfej", on la stocke dans un tableau. 
       
        TableauId.push(all[a]._id);
        console.log(all[a]._id);
        console.log(a);
        console.log (TableauId);
                };
});
};
//appel de la fonction qui remplit le tableau des ID.
fetchAll();
//cette fonction permet d'afficher le contenu d'un article
function afficherArticle(j) {
//window.alert(j);
//ici utiliser la fonction fetch de Max qui récupère un article via une route qui contient son id
    //fetchID sert à aller chercher l'ID du dernier article dans le blog
//on a imbriqué la fonction "fetchArticle" dans la fonction fetchID
let index=j;
function fetchID(index){
    window.alert(index);
    fetch("http://localhost:3000/articles")
    .then(response => response.json())
    .then(function(allArticle){
        //détails du processus qu'on affiche dans la console pour plus de clarté
        console.log("le contenu de allArticle");
        console.log(allArticle);
        console.log("------");
        console.log("la longeur de mon tableau");
        console.log(allArticle.length);
        console.log("-----");
        console.log("l'index de mon dernier article");
        //déclaration de la variable qui nous permet d'afficher le dernier article 
        //en date posté sur la page, à savoir sur les articles en tout (allArticles).length et -1 pour avoir accès au dernier posté en date
        //let indexArticle = j;
          
        

        //fetchArticle sert à afficher UN article en particulier frâce à son ID, comme l'ID est variable on doit entrer dans la route
        //avec l'url la base fixe "localhost:3000/articles" pour avoir accès au tableau + la variable qui va chercher le dernier article entré
function fetchArticle(indexArticle){
    console.log(TableauId);
    console.log (TableauId[1]);
    console.log("http://localhost:3000/articles/" + TableauId[indexArticle]);
    fetch("http://localhost:3000/articles/" + TableauId[indexArticle])

    .then(response => response.json())
    .then(function(oneArticle){
                //affiche un objet défini par la route quand il y a une id
        console.log(oneArticle);   
        //concaténation données et affichage de ce qui nous intéresse    
        //document.getElementById("paragraphe"+j).innerHTML=oneArticle.contenu; 
        var test = "paragraphe1";
        document.getElementById(test).innerHTML=oneArticle.contenu; 
        //afficher ds la console les infos pour s'assurer qu'on ai le dernier article en date
        
    })
}

fetchArticle();
    })
}

fetchID();




//afficher dans le HTML, donc dans page du navigateur, les infos retournées par la fonction de Max
   // document.getElementById(paragraphe).innerHTML = objetretournéparlafonctiondemax.contenu;
}


    function fetchArticle(){
    fetch("http://localhost:3000/articles")
    .then(response => response.json())
    .then(function(allArticle){
                //affiche tout ce qu'il y a dans la base
        console.log(allArticle);
        //affiche la longueur de la base (nombre d'éléments présents dans le tableau)
        console.log(allArticle.length)
        //pour variable de 0 à la longueur de la base tu m'affiches les données correspondantes à un index.
        //for (var i = 0 ; i < allArticle.length ; i++){
           
          for (var i = 0 ; i < allArticle.length ; i++){ 
            j = i+1

            //déclaration d'une variable pour les id de paragraphe
            var paragraphe = "paragraphe"+j;

           // let bloc = "bloc"+ j;
           // let articleRef = "article"+ j;
            //let articleNb  = "article-"+ j;
           // if (allArticle[i].auteur!=null){//

                // MARIE : cette ligne va afficher dans l'id "nomauteur" du doc html toutes
                // MARIE : les valeurs des auteurs (allArticle[i].auteur), les uns à la suite des autres (ce que fait le +=)
               
                document.getElementById('main').innerHTML+='<div class="container" id="bloc'+j+'"><div class="star blue" id="article'+j+'"><img id="star" src="six-pointed-star-blue.png" alt="star"></div><div class="rectangle" id ="article-'+j+'"></div></div>';
                document.getElementById("article-"+ j).innerHTML +="<p onclick='afficherArticle("+j+")'>"+ "<br>"+"<span id ='art"+j+"'>" +j+"</span>" + "<br>" + allArticle[i].auteur + "<br>" + allArticle[i].titre + "<br>" + allArticle[i].date + "<br>" + '<div id="paragraphe'+j+'"></div>'+"</p>";
                document.getElementById('style').innerHTML+='<style>#bloc'+j+'{display:flex;text-align:center;}</style>';
                
// MARIE : affiche dans la console du navigateur, tous les auteurs, les uns après les autres
                //console.log(allArticle[i].auteur);

                // MARIE :  cette ligne va afficher dans l'id "titre" du doc html toutes
                // MARIE : les valeurs des titres (allArticle[i].titre), les uns à la suite des autres (ce que fait le +=)
                //document.getElementById("titre").innerHTML +=" "+ "<br>" + allArticle[i].titre;
                
                // MARIE : affiche dans la console du navaigteur, tous les titres, les uns après les autres
                //console.log(allArticle[i].titre);
                
                //console.log(allArticle[i].contenu);
                //document.getElementById("date").innerHTML +=" "+ "<br>" + allArticle[i].date;
                //console.log(allArticle[i].date);

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
           // }
            
        }
       
                   
        
    })
}

// appel de la fonction

fetchArticle();

/*function myFunction() {
  document.getElementById("nomauteur").innerHTML = "allArticle.auteur";
  document.getElementById("titre").innerHTML = "allArticle.titre";
  document.getElementById("date").innerHTML = "allArticle.date";
}



var ok = function(){
 
 
    function test(){
 
        alert('test !')
 
    }
 
}
 
 
window.onload = ok;*/

