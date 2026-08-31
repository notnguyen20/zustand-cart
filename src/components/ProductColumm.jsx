import ProductStore from "../store/Product.store";

const ProductColumm = () => {

    const products = ProductStore((state) => state.products);
    const addToCart = ProductStore((state) => state.addProduct);

    const handleAddCart = (prod) => {
        addToCart(prod);
    }

    return (
        <div id="product-col" className="col-card">
            <h2>Products</h2>
            <div className="list-container">
                {products.map((product) => (
                    <div key={product.id} className="item-row">
                        <div className="item-info">
                            <h4>{product.name}</h4>
                            <p>{product.price.toLocaleString()} VNĐ</p>
                        </div>
                        <button onClick={() => handleAddCart(product)} className="btn-add">Add</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductColumm;