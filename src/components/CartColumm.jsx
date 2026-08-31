import ProductStore from "../store/Product.store";

function CartColumm() {

    const cart = ProductStore((state) => state.cart);
    const deleteProduct = ProductStore((state) => state.deleteProduct);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    return (
        <div id="cart-col" className="col-card">
            <h2>Your cart</h2>
            <div className="list-container">
                {cart.length === 0 ? (
                    <p
                        style={{
                            textAlign: "center",
                            color: "#888",
                            marginTop: "20px"
                        }}
                    >
                        Empty
                    </p>
                ) : (
                    cart.map((cartItem) => (
                        <div key={cartItem.id} className="item-row">
                            <div className="item-info">
                                <h4>{cartItem.name}</h4>
                                <p>
                                    {cartItem.price.toLocaleString()} VNĐ x{" "}
                                    <strong>{cartItem.quantity}</strong>
                                </p>
                            </div>

                            <button onClick={() => deleteProduct(cartItem.id)} className="btn-remove">
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>

            <div className="total-price">
                <h3>Total price: {totalPrice.toLocaleString()} VNĐ</h3>
            </div>
        </div>
    )
}

export default CartColumm