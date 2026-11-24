(() => {

    interface Product {
        id:   number;
        name: string;
    }

    // Se queda solo con lo relacionado al producto
    class ProductBloc {

        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos
            console.log('Guardando en base de datos', product );
        }

        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    }

    // Solo maneja el carrito
    class CartBloc {

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }


    const productBloc = new ProductBloc();
    const cartBloc    = new CartBloc(); // antes creaba un ProductBloc por error

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10); // antes se llamaba desde productBloc

})();