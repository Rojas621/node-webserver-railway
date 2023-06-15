/*const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.listen(8080)
*/



//6ini
/*const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('Home Page')
})
app.get('/hola-mundo', function (req, res) {
    res.send('Hola Mundo en su respectiva ruta')
  })
app.listen(8080)
*/



//6fin
/*const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send('Home Page')
})
app.get('/hola-mundo', function (req, res) {
    res.send('Hola Mundo en su respectiva ruta')
  })

  app.get('*', function (req, res) {
    res.send('404 | Page not found')
  })
app.listen(8080)
*/



//7ini
/*const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Home Page')
})
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
  })
  app.get('*', (req, res)=> {
    res.send('404 | Page not found')
  })
app.listen(8080)
*/



//7-seg-fin
/*const express = require('express')
const app = express()
const port = 8080;
app.get('/', (req, res) => {
  res.send('Home Page')
})
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
  })
  app.get('*', (req, res)=> {
    res.send('404 | Page not found')
  })

app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})
*/



//9ini
/*const express = require('express')
const hbs = require('hbs');
const app = express()
const port = 8080;
//handlebar:
app.set('view engine', 'hbs'); // para usar el handlebars para express
hbs.registerPartials(__dirname + '/views/partials'); //para usar parciales
//para servir contenido estatico
app.use(express.static('views')); //definicion de midelware express. si public esta en otro sitio


app.get('/', (req,res) => {
      res.render('home', { // estos son los argumentos
        nombre: 'Armando David',
        titulo: 'Curso de Node'
      });
    });

/*app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo en su respectiva ruta')
  });
  app.get('/generic', (req, res) => {
        res.sendFile(__dirname + '/public/generic.html')
      });
    */
/*app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
});
/*app.get('/elemment', (req, res) =>{
        res.sendFile(__dirname + '/public/elements.html')
      });
    */

    const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;
    //handlebar:
    app.set('view engine', 'hbs'); // para usar el handlebars para express
    hbs.registerPartials(__dirname + '/views/partials'); //para usar parciales
    //para servir contenido estatico
    app.use(express.static('views')); //definicion de midelware express. si public esta en otro sitio
   
    app.get('/', (req,res) => {
      res.render('home', { // estos son los argumentos
        nombre: 'Armando David',
        titulo: 'Curso de Node'
      });
    })
    app.get('/elements', (req, res) => {
        res.render('elements', {
          nombre: 'Armando David',
    
          titulo: 'Curso de Node'
        })
      });
      app.get('/generic', (req, res) => {
            res.render('generic', {
              nombre: 'Armando David',
              titulo: 'Curso de Node'
            })
          });
      app.get('*', (req, res)=> {
        res.sendFile(__dirname +'/public/404.html');
      })
    app.listen(port, () => {
        console.log(`Example app listenining al http://localhost:${port}`)
    })  

    