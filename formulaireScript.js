        console.log("coucou");
        function fetchPool(){
    fetch("http://localhost:3000/articles").then(response => response.json()).then(function(allPool){
                //affiche tout ce qu'il y a dans la base
        console.log(allPool);
        //affiche la longueur de la base (nombre d'éléments présents dans le tableau)
        console.log(allPool.length)
        //pour variable de 0 à la longueur de la base tu m'affiches les données correspondantes à un index.
        for (var i = 0 ; i < allPool.length ; i++){
            if (allPool[i].auteur!=null){
                document.getElementById("nomauteur").innerHTML +=" "+ "<br>" + allPool[i].auteur;
                console.log(allPool[i].auteur);
                console.log(allPool[i].titre);
                console.log(allPool[i].contenu);
                console.log(allPool[i].date);
            }
            
        }
        
        
    })
}

// appel de la fonction
fetchPool();

function myFunction() {
  document.getElementById("nomauteur").innerHTML = "allPool.auteur";
}

//myFunction();

   