
/**Crear un array de objetos que contenga los datos de productos
 * Cada objeto debe tener los siguientes campos : id (que no se repita), nombre, precio, descripcion, oferta, imagen 
 * nombre y descripcion son strings
 * precio es numérico
 * oferta es boleano
 * imagen es un string con la ruta a la imagen del producto
 */

const productos = [
    {id: 1, nombre: "Camiseta manga corta mujer", precio: 20.00, descripcion: "Manga corta", oferta: false, imagen:"imagenes/manga-corta.jpg", alt:"manga-corta"},
    {id: 2, nombre: "Pantalón pitillo básico", precio: 25.00, descripcion: "pitillo", oferta: false, imagen:"imagenes/pantalon-pitillo.jpg", alt:"pantalon-pitillo"},
    {id: 3, nombre: "Gorra mujer Nike", precio: 18.00, descripcion: "Nike", oferta: false, imagen:"imagenes/gorra-nike.webp", alt:"gorra-nike"},
    {id: 4, nombre: "Bufanda de seda", precio: 10.00, descripcion: "Pura seda rectangular larga", oferta: false, imagen:"imagenes/pañuelo.webp", alt:"pañuelo"},
    {id: 5, nombre: "Tirantes finos para hombre y mujer, negro", precio: 20.00, descripcion: "de hombre para traje", oferta: false, imagen:"imagenes/tirantes.jpg", alt:"tirantes"},
    {id: 6, nombre: "Calcetines Nike", precio: 10.00, descripcion: "largos Nike", oferta: false, imagen:"imagenes/calcetines.jpg", alt:"Calcetines-Nike"},
]
productos.forEach(item => {
    document.getElementById("productos").innerHTML += `
     <div data-id="${productos.id}">

    <img src="${item.imagen}" class="imagenProducto"/>
    <h3>${item.nombre}</h3> <p>${item.precio} €</p>
    <select id="tipotalla">
        <option value="s">S</option>
        <option value="m">M</option>
        <option value="l">L</option>
        <option value="xl">XL</option>
        <p id="error"></p>
    </select>
    <button id="articulo${productos.id}" class="carrito">Añadir al carrito 🛍️</button>
    </div>`;
    document.getElementById("articulo" + productos.id).addEventListener("click", ()=>{agregarCarrito(item)});
});
 
 function agregarCarrito(producto){
    alert("Añadir al carrito" + producto.nombre);
 }
   