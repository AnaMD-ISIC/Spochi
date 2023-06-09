const express = require('express');
const app = express();
const morgan = require('morgan');

//sql connection
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'AnaMejia-1975',
    database: 'products'  
});

//configuración
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes

    //Seleccionar todos los productos
    app.get('/api/products', (req, res) => {
        connection.query('SELECT * FROM products', (err, results, fields) => {
            res.send(results);
        });
    });

    //Seleccionar un producto por su ID
    app.get('/api/products/:id', (req, res) => {
        const id = req.params.id;
        connection.query('SELECT * FROM products WHERE productID = ?', [id], (err, results, fields) => {
            res.send(results);
        });
    });

    //Insertar un nuevo producto
    app.post('/api/products/', (req, res) => {
        const {name, category, price}= req.body;
        connection.query('INSERT INTO products (productName, productCategory, productPrice) VALUES (?,?,?)', [name, category, price], (err, results, fields) => {
            res.send("Producto agregado correctamente:D");
        });
    });

    //Eliminar un producto por su ID
    app.delete('/api/products/:id', (req, res) => {
        const id = req.params.id;
        connection.query('DELETE FROM products WHERE productID = ?', [id], (err, results, fields) => {
            res.send("Producto eliminado correctamente:D");
        });
    });

    //Actualizar un producto
    app.put('/api/products/:id', (req, res) => {
        const id = req.params.id;
        const {name, category, price}= req.body;
        connection.query('UPDATE products SET productName = ?, productCategory = ?, productPrice = ? WHERE productID = ?', [name, category, price, id], (err, results, fields) => {
            res.send("Producto actualizado correctamente:D");
        });
    });


//iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor iniciado en el puerto ${app.get('port')} :D`);
});