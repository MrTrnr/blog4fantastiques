console.log("hello world");

//fetchID sert à aller chercher l'ID du dernier article dans le blog
//on a imbriqué la fonction "fetchArticle" dans la fonction fetchID
function fetchID(){
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
        var indexDernierArticle = allArticle.length-1;
        //retour de résultats dans la console
        console.log(indexDernierArticle);
        console.log("-----");
        console.log(allArticle[indexDernierArticle]._id);
        

        //fetchArticle sert à afficher UN article en particulier frâce à son ID, comme l'ID est variable on doit entrer dans la route
        //avec l'url la base fixe "localhost:3000/articles" pour avoir accès au tableau + la variable qui va chercher le dernier article entré
        function fetchArticle(){
            fetch("http://localhost:3000/articles/" + allArticle[indexDernierArticle]._id )
            .then(response => response.json())
            .then(function(oneArticle){
                        //affiche un objet défini par la route quand il y a une id
                console.log(oneArticle);   
                //concaténation données et affichage de ce qui nous intéresse    
                document.getElementById("titreauteur").innerHTML=oneArticle.titre + " " + oneArticle.auteur + " " + oneArticle.date + "<br>" + "<br>" + oneArticle.contenu;
               
                //afficher ds la console les infos pour s'assurer qu'on ai le dernier article en date
                console.log(oneArticle.titre);
                console.log(oneArticle.auteur);
                console.log(oneArticle.date);
            })
        }
        fetchArticle();
    })
}

fetchID();

