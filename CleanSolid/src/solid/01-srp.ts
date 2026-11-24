(() => {

    interface Product {
        id:   number;
        name: string;
    }

    // Solo lo relacionado al producto
    class ProductBloc {

        loadProduct( id: number ) {
            console.log('Producto: ', { id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }

    // Solo maneja el carrito
    class CartBloc {

        onAddToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }
    }

    // Solo envia correos
    class MailService {

        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    }


    const productBloc = new ProductBloc();
    const cartBloc    = new CartBloc();
    const mailService = new MailService();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    mailService.notifyClients();
    cartBloc.onAddToCart(10);

})();