console.log("hello world");
document.getElementById("titreauteur").innerHTML="CACA";

function fetchArticle(){
    fetch("http://localhost:3000/articles/5fb3fa9cec236d0cc896bfd2").then(response => response.json())
    .then(function(oneArticle){
                //affiche un objet défini par la route quand il y a une id
        console.log(oneArticle);
              
                // document.getElementById("titreauteur").innerHTML=oneArticle.titre + oneArticle.auteur + oneArticle.date;
       console.log(oneArticle.titre);
       console.log(oneArticle.auteur);
       console.log(oneArticle.date);
    })
}

fetchArticle();