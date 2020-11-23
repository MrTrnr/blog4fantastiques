//Commentaires et pistes MARIE sur COPIElisteS -ne pas utiliser la fonction remplirTableauId() de création de tableau recensant les _id,

//-dans la génération de HTML via le javascript :

//==> changer les "id=paragraphe1", "id=paragraphe2"... par "id=l'id du premier article", "id=l'id du deuxième article"... via une propriété de type allArticle[i]._id

//==> changer le paramètre de la fonction afficherUnArticle(articleNb) par un paramètre de type (allArticle[i]._id)
 console.log("bienvenue sur le blog");
    // déclaration d'une variable, qui correspond à l'ordre d'un article, utiliser let
    let articleNb;
    //ANNE voir si cette fonction est à modifier.
    //let TableauId;
        //function remplirTableauId(){
    
   

    function afficherUnArticle(articleId){

    // on teste si la variable articleNb est bien la bonne valeur
    // window.alert(articleNb);

    // la méthode fetch() permet de communiquer avec le serveur blog.js sur une route spécifique
    // à chaque article, une route de type http://localhost:3000/articles/id_de_l_article
    // méthode GET, par défaut donc peut ne pas être déclarée
    fetch("http://localhost:3000/articles/" + articleId) 
    .then(response => response.json())
    .then(function(oneArticle){

        // concaténation données et affichage de ce qui nous intéresse    
        // afficher dans le navigateur, dans l'id de type "paragraphe<numero_de_l_article>",
        // le contenu d'un article
    document.getElementById("paragraphe"+articleId).innerHTML=oneArticle.contenu;
     });
}; 
//for (var i = 0 ; i < allArticle.length ; i++){ 
        // le numéro d'un article correspond à son index + 1
        //articleNb = i+1

        // MARIE : cette ligne va afficher dans l'id "nomauteur" du doc html toutes
        // MARIE : les valeurs des auteurs (allArticle[i].auteur), les uns à la suite des autres (ce que fait le +=)
 function afficherLesArticles(allArticle){

    // la méthode fetch() permet de communiquer avec le serveur blog.js sur une route 
    // spécifique à chaque article, une route de type http://localhost:3000/articles/id_de_l_article
    // méthode GET, par défaut donc peut ne pas être déclarée
    fetch("http://localhost:3000/articles")
    .then(response => response.json())
    .then(function(allArticle){
        // retourne tous les articles avec titre, auteur, contenu, date présents dans la base
        
        // pour variable de 0 à la longueur de la base,
        // afficher les données correspondantes à un index.
        for (var i = 0 ; i < allArticle.length ; i++){ 
        // le numéro d'un article correspond à son index + 1
        articleNb = i+1;
      
        document.getElementById('main').innerHTML+='<div class="container" id="bloc'+articleNb+'"><div class="star blue" id="article'+articleNb+'"><img id="star" src="six-pointed-star-blue.png" alt="star"></div><div class="rectangle" id ="article-'+articleNb+'"></div></div>';
        //document.getElementById("article-"+ articleNb).innerHTML +="<p onclick='afficherUnArticle("+articleNb+")'>"+ "<br>"+"<span id ='art"+articleNb+"'>" +articleNb+"</span>" + "<br>" + allArticle[i].auteur + "<br>" + allArticle[i].titre + "<br>" + allArticle[i].date + "<br>" + '<div id="paragraphe'+articleNb+'"></div>'+"</p>";
        document.getElementById("article-"+ articleNb).innerHTML +="<p onclick='afficherUnArticle(`"+allArticle[i]._id+"`)'>"+ "<br>"+"<span id ='art"+articleNb+"'>" +articleNb+"</span>" + "<br>" + allArticle[i].auteur + "<br>" + allArticle[i].titre + "<br>" + allArticle[i].date + "<br>" + "<div id='paragraphe" + allArticle[i]._id+"'"+ "></div>"+"</p>";
        document.getElementById('style').innerHTML+='<style>#bloc'+articleNb+'{display:flex;text-align:center;}</style>';
        };
    });
};
   
    //});
//};

        //pour variable de 0 à la longueur de la base tu m'affiches les données correspondantes à un index.
        //for (var i = 0 ; i < allArticle.length ; i++){
           
          
            //let j = i+1
           // let bloc = "bloc"+ j;
           // let articleRef = "article"+ j;
            //let articleNb  = "article-"+ j;
           // if (allArticle[i].auteur!=null){//

                // MARIE : cette ligne va afficher dans l'id "nomauteur" du doc html toutes
                // MARIE : les valeurs des auteurs (allArticle[i].auteur), les uns à la suite des autres (ce que fait le +=)
               
  //              document.getElementById('main').innerHTML+='<div class="container" id="bloc'+j+'"><div class="star blue" id="article'+j+'"><img id="star" src="six-pointed-star-blue.png" alt="star"></div><div class="rectangle" id ="article-'+j+'"></div></div>';
  //              document.getElementById("article-"+ j).innerHTML +=" "+ "<br>" + allArticle[i].auteur + "<br>" + allArticle[i].titre + "<br>" + allArticle[i].date + "<br>" ;
   //             document.getElementById('style').innerHTML+='<style>#bloc'+j+'{display:flex;text-align:center;}</style>';
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
            
       
                   
        
    //appel de la fonction


// appel de la fonction qui affiche les données titre, auteur, date de tous les articles
afficherLesArticles();

//fetchArticle();

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

