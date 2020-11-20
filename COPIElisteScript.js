console.log("bienvenue sur le blog");

// déclaration d'une variable, qui correspond à l'ordre d'un article, utiliser let
let articleNb;

// déclaration d'un tableau qui va contenir les _id de chaque article, utiliser let
let TableauId;

// fonction qui remplit le tableau avec les ID des articles. On va chercher toutes les ID des articles dans la base avec la route "http://localhost:3000/articles" et on va les stocker dans un tableau
function remplirTableauId(){

    // ici j'utilise la méthode fetch() qui permet de communiquer avec le serveur blog.js
    // j'utilise la route "http://localhost:3000/articles"
    // la méthode n'est pas indiquée, par défaut c'est GET
    fetch("http://localhost:3000/articles")
    .then(response => response.json())
    .then(function(all){

        // on initialise le tableau des Id, la première valeur (index 0) est nulle
        // la deuxième valeur sera donc l'article 1, d'index 1.
        TableauId = [""];

        // on exécute une boucle pour répéter l'opération autant de fois que le nombre d'articles
        for (var a=0 ; a< all.length ; a++){

            // récupérer une _id de type "2665djioefj535ejfejfej"
            // on la stocke dans un tableau en la rajoutant aux autres données déjà existantes. 
            TableauId.push(all[a]._id);
        };
    });
};

// appel de la fonction qui remplit le tableau des ID des articles.
remplirTableauId();

// cette fonction permet d'afficher le contenu d'un article, je passe comme paramètre
// la variable, qui correspond à l'ordre d'un article
function afficherUnArticle(articleNb){

    // on teste si la variable articleNb est bien la bonne valeur
    // window.alert(articleNb);

    // la méthode fetch() permet de communiquer avec le serveur blog.js sur une route spécifique
    // à chaque article, une route de type http://localhost:3000/articles/id_de_l_article
    // méthode GET, par défaut donc peut ne pas être déclarée
    fetch("http://localhost:3000/articles/" + TableauId[articleNb])
    .then(response => response.json())
    .then(function(oneArticle){

        // concaténation données et affichage de ce qui nous intéresse    
        // afficher dans le navigateur, dans l'id de type "paragraphe<numero_de_l_article>",
        // le contenu d'un article
        document.getElementById("paragraphe"+articleNb).innerHTML=oneArticle.contenu; 
    });
};

// fonction qui affiche les données titre, auteur, date de tous les articles
function afficherLesArticles(){

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
        articleNb = i+1

        // MARIE : cette ligne va afficher dans l'id "nomauteur" du doc html toutes
        // MARIE : les valeurs des auteurs (allArticle[i].auteur), les uns à la suite des autres (ce que fait le +=)
       
        document.getElementById('main').innerHTML+='<div class="container" id="bloc'+articleNb+'"><div class="star blue" id="article'+articleNb+'"><img id="star" src="six-pointed-star-blue.png" alt="star"></div><div class="rectangle" id ="article-'+articleNb+'"></div></div>';
        document.getElementById("article-"+ articleNb).innerHTML +="<p onclick='afficherUnArticle("+articleNb+")'>"+ "<br>"+"<span id ='art"+articleNb+"'>" +articleNb+"</span>" + "<br>" + allArticle[i].auteur + "<br>" + allArticle[i].titre + "<br>" + allArticle[i].date + "<br>" + '<div id="paragraphe'+articleNb+'"></div>'+"</p>";
        document.getElementById('style').innerHTML+='<style>#bloc'+articleNb+'{display:flex;text-align:center;}</style>';
        
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
        };
    });
};

// appel de la fonction qui affiche les données titre, auteur, date de tous les articles
afficherLesArticles();
