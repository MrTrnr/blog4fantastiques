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
                document.getElementById("nomauteur").innerHTML +=" "+ "<br>" + allArticle[i].auteur;
                console.log(allArticle[i].auteur);
                console.log(allArticle[i].auteur);
                console.log(allArticle[i].titre);
                console.log(allArticle[i].contenu);
                console.log(allArticle[i].date);
            }
            
        }
        
        
    })
}

// appel de la fonction
fetchArticle();

function myFunction() {
  document.getElementById("nomauteur").innerHTML = "allArticle.auteur";
}

var ok = function(){
 
 
    function test(){
 
        alert('test !')
 
    }
 
}
 
 
window.onload = ok;

