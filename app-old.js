/*console.log('Hola')
const http = require('http');
http.createServer((req,res) => {
    //req: request es la peticion al server
    //res: responce es la respuesta del servidor
    res.write('Hola Mundo'); // significa que como respuesta a una req sera Hola Mundo
res.end();
})
.listen(8080); //puerto por donde el servidor escuchara las peticiones
console.log('Escuchando el puerto: ', 8080);
*/



//3-in
/*const http = require('http');
http.createServer((req,res) => {
    //req: request es la peticion al server
    //res: responce es la respuesta del servidor
    console.log(req);
    res.writeHead(404) // recurso no encontrado
   
    res.write('404 |page no found'); // significa que como respuesta a una req será 404
    res.end();
})
.listen(8080); //puerto por donde el servidor escuchara las peticiones
console.log('Escuchabdo el puesto: ', 8080);
*/



//4ini
/*const http = require('http');
http.createServer((req,res) =>{
    //req: request es la peticion al server
    //res: responce es la respuesta del servidor
    console.log(req);
   // res.writeHead(201, { 'Content-Type': 'application/json'}) // recurso no encontrado
    res.setHeader('Content-Disposition', 'attachment;filename = lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv'})
   
    res.write('id,nombre\n');
    res.write('1,Fernando\n');
    res.write('2,Mariza\n');
    res.write('3,Gladys\n');
    res.end();
})
.listen(8080); //puerto por donde el servidor escuchara las peticiones
console.log('Escuchando el puerto: ', 8080);
*/



//4final
const http = require('http');
http.createServer((req,res) => {
    //req: request es la peticion al server
    //res: responce es la respuesta del servidor
    console.log(req);
   // res.writeHead(201, { 'Content-Type': 'application/json'}) // recurso no encontrado
   // res.setHeader('Content-Disposition', 'attachment;filename = lista.csv');

   // res.writeHead(200, { 'Content-Type': 'application/csv'})
   
   // res.write('id,nombre\n');
    //res.write('1,Fernando\n');
   // res.write('2,Mariza\n');
   // res.write('3,Gladys\n');
   res.write('Hola Mundo');
    res.end();
})
.listen(8080); //puerto por donde el servidor escuchara las peticiones
console.log('Escuchabdo el puesto: ', 8080);