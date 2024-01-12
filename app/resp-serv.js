import tables from '../data/tables.js';

// Fonction CB pour la requete serveur
export function prepareResponse(request, response) {
    const dataFound = tables.find(table => table.url === request.url);
    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html; charset=UTF-8');
        response.write(
            `
            <!DOCTYPE html>
            <html lang="fr">
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Exo maths</title>
            <link rel="stylesheet" href="/style.css">
            </head>
            <body>
            <header>
            
            <nav>
            <a href="/">Acceuil</a>
                        <a href="/table/1">Table de 1</a>
                                    <a href="/table/2">Table de 2</a>
                                    <a href="/table/3">Table de 3</a>
            <a href="/table/4">Table de 4</a>
                        <a href="/table/5">Table de 5</a>
            <a href="/table/6">Table de 6</a>
            <a href="/table/7">Table de 7</a>
            <a href="/table/8">Table de 8</a>
            <a href="/table/9">Table de 9</a>
            <a href="/table/10">Table de 10</a>
            
            </nav>
            </header>
            <main>
            <h1>Bienvenue</h1>
            <h2>Toutes les tables ici<h2>
            </main>
            </body>
            </html>

            `
        );
    }

else if(dataFound){  
    let content = `
            <h1>Table de ${dataFound.value}</h1>

    `
 let table ='';

for(let i=0;i<=10;i++){
table+=`<p>${dataFound.value} X ${i} = ${dataFound.value*i}</p>`;
}



    
    response.setHeader('Content-Type', 'text/html; charset=UTF-8');
    response.write(
    `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exo maths</title>
    <link rel="stylesheet" href="/style.css">
    </head>
    <body>
    <header>
    <nav>
    <a href="/">Acceuil</a>
    <a href="/table/1">Table de 1</a>
    <a href="/table/2">Table de 2</a>
    <a href="/table/3">Table de 3</a>
<a href="/table/4">Table de 4</a>
<a href="/table/5">Table de 5</a>
<a href="/table/6">Table de 6</a>
<a href="/table/7">Table de 7</a>
<a href="/table/8">Table de 8</a>
<a href="/table/9">Table de 9</a>
<a href="/table/10">Table de 10</a> 
    </nav>
    </header>
    <main>
    ${content}
    ${table}
    </main>
    </body>
    </html>

    `
);

}
else if (request.url === '/style.css') {
        response.setHeader('Content-Type', 'text/css; charset=utf-8');
        response.write(`    
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      @keyframes show {
        from {
          opacity: 0;
          transform: translateX(-5rem);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      html {
        text-align: center;
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 300;
      }
      
      body {
        display: grid;
        grid-template-columns: 1fr 3fr;
        align-items: center;
      }
      
      nav {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        background-color: #30384B;
        padding: 2rem;
        border-right: 2rem solid #F1EDEA;
      }
      
      nav a {
        color: white;
        text-decoration: none;
        background-color: rgba(255, 255, 255, .1);
        padding: 1rem;
        border-radius: 2rem;
        width: 100%;
      }
      
      nav a:hover {
        background-color: rgba(255, 255, 255, .2);
      }
      
      h1 {
        font-size: 4rem;
        font-weight: 900;
      }
      
      p {
        margin: 2rem 0;
      }
      
      main {
        animation: show .3s ease 0s 1;
      }
      
      main a {
        display: inline-block;
        padding: 1rem;
        border-radius: 2rem;
        min-width: 20rem;
        text-decoration: none;
        font-weight: 900;
        background-color: rgb(136, 0, 255);
        color: white;
        box-shadow: 
          rgba(136, 0, 255, 0.4) 0px 5px, 
          rgba(136, 0, 255, 0.3) 0px 10px, 
          rgba(136, 0, 255, 0.2) 0px 15px, 
          rgba(136, 0, 255, 0.1) 0px 20px, 
          rgba(136, 0, 255, 0.05) 0px 25px;
      }
      
      main a:hover {
        background-color: #50A;
      }
       `)
    } 
    
    else {
        response.statusCode = 404;
        response.write('Error 404');
    }

    response.end();
}

