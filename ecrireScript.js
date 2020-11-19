// 
window.addEventListener("load", function () {
    function sendData() {
      var XHR = new XMLHttpRequest();// déclaration de la variable XHR qui est une nouvelle instance XMLHttpRequest
  
      //déclaration de la variable FD qui est une nouvelle instance de FormData, avec le paramètre form est le formulaire de la page HTML
      var FD = new FormData(form);
  
      // Quant la requête HTTP c'est bien déroulé, sa lance une fenètre d'alerte dans le navigateur, qui affiche un message renvoyer par le serveur 
      XHR.addEventListener("load", function(event) {
        alert(event.target.responseText);
      });
  
      // Quant la requête HTTP c'est mal déroulé, sa lance une fenètre d'alerte dans le navigateur, qui affiche un message  d'erreur renvoyer par le serveur 

      XHR.addEventListener("error", function(event) {
        alert('Oups! Quelque chose s\'est mal passé.');
      });
  
      // Configurez la requête HTTP avec une méthode POST et avec une route "http://localhost:3000/articles"
      XHR.open("POST", "http://localhost:3000/articles");
  
      // Les données envoyées sont ce que l'utilisateur a mis dans le formulaire
      XHR.send(FD);
    }
   
    // ON déclare la variable form, elle nous renvoie au formulaire qui a l'"id=myForm" qui se trouve  dans la page HTML 
    var form = document.getElementById("myForm");
  
    //Quant j'appuie sur le button "submit" les données du formulaire sont envoyé une seul fois.
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      sendData();
    });
});

