loadScript("spochi-api/server.js", Info);

$.get("/templates/navigation.html", function (data) {
	if ($(".logout").length) {
		localStorage.clear();
	}
	$("#nav-placeholder").replaceWith(data);
	if (localStorage.getItem("user") === null) {
		$(".accountNav").html(
			'<li class="nav-item"><a class="nav-link text-white" href="/login.html">Login</a> </li>'
		);
	} else {
		$(".accountNav").html(
			'<li class="nav-item"><a class="nav-link text-white" href="/account.html">Cuenta</a></li><li class="nav-item"><a class="nav-link text-white" href="/logout.html">Log Out</a></li>'
		);
	}
});

$.get("/templates/footer.html", function (data) {
	$("#footer-placeholder").replaceWith(data);
});

var Info = function () {
	let categories = new Categories();
	categories.getAllCategories();
	if (urlParam("category")) {
		categories.getSingleCategory(decodeURIComponent(urlParam("category")));
	}
};

var Info = function () {
	let products = new Products();
	if ($(".products.new").length) {
		products.getNewProducts(8);
	}
	if (urlParam("productid")) {
		products.getSingleProduct(urlParam("productid"));
	}
};

var Info = function () {
	let user = new User();
	$("form.login").submit(function (e) {
		e.preventDefault();
		var username = $("#username").val();
		var password = $("#password").val();
		user.doLogin(username, password);
	});
	if ($(".userAccount").length) {
		var userAccount = JSON.parse(localStorage.user);
		user.getAccountInfo(userAccount);
	}
};

var Info = function () {
	let cart = new Cart();
	if (localStorage.getItem("user") != null) {
		var user = JSON.parse(localStorage.user);
		cart.getCart(user.id);
		if (localStorage.getItem("cartCount") != 0) {
			var cartItems = JSON.parse(localStorage.getItem("cart"));
			cart.getCartDisplay(cartItems);
		}
	}
};

function loadScript(url, callback) {
	var head = document.head;
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	script.onreadystatechange = callback;
	script.onload = callback;
	head.appendChild(script);
}

function toTitleCase(str) {
	return str.replace(/(?:^|\s)\w/g, function (match) {
		return match.toUpperCase();
	});
}

function urlParam(name) {
	var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
		window.location.href
	);
	if (results == null) {
		return null;
	} else {
		return results[1] || 0;
	}
}
// Consultar los productos
fetch('http://127.0.0.1:3000/api/products')
.then(response => response.json())
.then(data => {
  const productsContainer = document.querySelector('.row.products.new');
  data.forEach(product => {
    const productElement = document.createElement('div');
    // Formatear la información del producto en HTML y agregarla al contenedor
    // Puedes utilizar las propiedades del producto, como product.name, product.price, etc.
    productsContainer.appendChild(productElement);
  });
});

// Consultar los productos añadidos al carrito
fetch('http://127.0.0.1:3000/api/cart')
.then(response => response.json())
.then(data => {
  const cartCountElement = document.querySelector('.cartCount');
  cartCountElement.textContent = data.length;
});

// Consultar una categoría y sus productos
fetch('http://127.0.0.1:3000/api/categories/{category-id}')
.then(response => response.json())
.then(data => {
  const categoryTitleElement = document.querySelector('.category-name');
  categoryTitleElement.textContent = data.name;

  const productsContainer = document.querySelector('.row.products');
  data.products.forEach(product => {
    const productElement = document.createElement('div');
    // Formatear la información del producto en HTML y agregarla al contenedor
    // Puedes utilizar las propiedades del producto, como product.name, product.price, etc.
    productsContainer.appendChild(productElement);
  });
});

// Consultar los datos de un producto seleccionado
fetch('http://127.0.0.1:3000/api/products/{product-id}')
.then(response => response.json())
.then(data => {
  const productTitleElement = document.querySelector('.product_title');
  productTitleElement.textContent = data.name;

  const productImageElement = document.querySelector('.product_image');
  productImageElement.style.backgroundImage = `url(${data.image})`;

  // Formatear el resto de la información del producto en HTML y agregarla a los elementos correspondientes
  // Puedes utilizar las propiedades del producto, como data.price, data.description, etc.
});

// Enviar el formulario de inicio de sesión
const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', function(event) {
event.preventDefault();
const username = document.querySelector('#username').value;
const password = document.querySelector('#password').value;
// Enviar los datos de inicio de sesión al servidor
// y realizar las acciones necesarias con la respuesta
});