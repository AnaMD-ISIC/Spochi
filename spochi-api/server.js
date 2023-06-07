const express = require('express');
const app = express();
const port = 3000;

// Datos de ejemplo: categorías y productos
const categories = ['Electrónica', 'Ropa', 'Hogar', 'Deportes', 'Juguetes'];

const products = [
    {
      id: 21,
      name: 'Smart TV Samsung',
      category: 'Electrónica',
      price: 799.99,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
      description: 'Televisor inteligente Samsung con pantalla LED de 55 pulgadas, resolución 4K y tecnología HDR.',
    },
    {
      id: 22,
      name: 'Vestido elegante',
      category: 'Ropa',
      price: 79.99,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
      description: 'Vestido elegante y sofisticado para ocasiones especiales, con diseño ajustado y detalles en encaje.',
    },
    {
      id: 23,
      name: 'Cafetera Nespresso',
      category: 'Hogar',
      price: 149.99,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
      description: 'Cafetera Nespresso con sistema de cápsulas, prepara deliciosos cafés y es fácil de usar y limpiar.',
    },
    {
      id: 24,
      name: 'Raqueta de tenis',
      category: 'Deportes',
      price: 89.99,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
      description: 'Raqueta de tenis de alto rendimiento, fabricada con materiales ligeros y tecnología de absorción de impactos.',
    },
    {
      id: 25,
      name: 'Puzzle 1000 piezas',
      category: 'Juguetes',
      price: 24.99,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
      description: 'Puzzle de 1000 piezas con hermosa imagen de paisaje, ideal para entretenerse y relajarse.',
    },
    {
      id: 26,
      name: 'Smartphone Xiaomi',
      category: 'Electrónica',
      price: 299.99,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
      description: 'Teléfono inteligente Xiaomi con pantalla AMOLED, cámara de alta resolución y batería de larga duración.',
    },
    {
      id: 27,
      name: 'Chaqueta de cuero',
      category: 'Ropa',
      price: 159.99,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
      description: 'Chaqueta de cuero genuino con estilo moderno y duradero, perfecta para cualquier ocasión.',
    },
    {
      id: 28,
      name: 'Robot aspiradora',
      category: 'Hogar',
      price: 199.99,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
      description: 'Robot aspiradora inteligente con tecnología de mapeo, navegación autónoma y funciones de limpieza programables.',
    },
    {
      id: 29,
      name: 'Balón de baloncesto',
      category: 'Deportes',
      price: 29.99,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
      description: 'Balón de baloncesto oficial de tamaño y peso reglamentario, ideal para partidos y entrenamientos.',
    },
    {
      id: 30,
      name: 'Juego de mesa familiar',
      category: 'Juguetes',
      price: 49.99,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
      description: 'Juego de mesa divertido para toda la familia, con desafíos, estrategia y risas aseguradas.',
    },
    {
        id: 31,
        name: 'Tablet Samsung',
        category: 'Electrónica',
        price: 299.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
        description: 'Tablet Samsung con pantalla táctil de 10 pulgadas, procesador de alta velocidad y almacenamiento ampliable.',
      },
      {
        id: 32,
        name: 'Blusa de encaje',
        category: 'Ropa',
        price: 39.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
        description: 'Blusa de encaje elegante y femenina, perfecta para ocasiones casuales o formales.',
      },
      {
        id: 33,
        name: 'Aspiradora sin cables',
        category: 'Hogar',
        price: 149.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
        description: 'Aspiradora sin cables y ligera, con potente succión y batería de larga duración.',
      },
      {
        id: 34,
        name: 'Pelota de fútbol',
        category: 'Deportes',
        price: 19.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
        description: 'Pelota de fútbol de tamaño oficial, con cubierta resistente y diseño de alta visibilidad.',
      },
      {
        id: 35,
        name: 'Set de arte para niños',
        category: 'Juguetes',
        price: 29.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
        description: 'Set completo de arte para niños, que incluye crayones, acuarelas, pinceles y papel de dibujo.',
      },
      {
        id: 36,
        name: 'Auriculares inalámbricos',
        category: 'Electrónica',
        price: 79.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
        description: 'Auriculares inalámbricos con cancelación de ruido, conexión Bluetooth y sonido de alta calidad.',
      },
      {
        id: 37,
        name: 'Vestido de verano',
        category: 'Ropa',
        price: 49.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
        description: 'Vestido ligero y fresco para el verano, con estampado colorido y diseño cómodo.',
      },
      {
        id: 38,
        name: 'Cafetera programable',
        category: 'Hogar',
        price: 79.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
        description: 'Cafetera programable con temporizador, jarra térmica y capacidad para varias tazas de café.',
      },
      {
        id: 39,
        name: 'Pelota de baloncesto',
        category: 'Deportes',
        price: 24.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
        description: 'Pelota de baloncesto resistente y duradera, ideal para partidos en interiores o exteriores.',
      },
      {
        id: 40,
        name: 'Rompecabezas 3D',
        category: 'Juguetes',
        price: 34.99,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
        description: 'Rompecabezas en 3D para armar una réplica detallada de un edificio famoso, con piezas de alta calidad.',
      },
  ];
  

// Carrito de compras (inicialmente vacío)
let cart = [];

// Rutas de la API

// Obtener todas las categorías
app.get('/api/categories', (req, res) => {
  res.json(categories);
});

// Obtener todos los productos
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Agregar un producto al carrito
app.post('/api/cart/add', (req, res) => {
  const productId = req.body.productId;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  cart.push(product);
  res.json(cart);
});

// Eliminar un producto del carrito
app.post('/api/cart/remove', (req, res) => {
  const productId = req.body.productId;
  const productIndex = cart.findIndex(p => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Producto no encontrado en el carrito' });
  }

  cart.splice(productIndex, 1);
  res.json(cart);
});

// Modificar un producto en el carrito
app.post('/api/cart/update', (req, res) => {
  const productId = req.body.productId;
  const quantity = req.body.quantity;
  const productIndex = cart.findIndex(p => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Producto no encontrado en el carrito' });
  }

  cart[productIndex].quantity = quantity;
  res.json(cart);
});

// Inicio de sesión
app.post('/api/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Verificar las credenciales (en este ejemplo, simplemente verificamos que se hayan proporcionado datos)
  if (!username || !password) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  // Autenticación exitosa
  res.json({ message: 'Inicio de sesión exitoso' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
