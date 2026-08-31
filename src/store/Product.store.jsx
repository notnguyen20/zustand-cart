import { create } from 'zustand'

const ProductStore = create((set) => ({
    products: [
        { id: 1, name: "Bàn phím cơ AULA F75", price: 800000, quantity: 1 },
        { id: 2, name: "Tai nghe Moondrop Chu II", price: 450000, quantity: 1 },
        { id: 3, name: "Chuột Logitech G102", price: 350000, quantity: 1 },
        { id: 4, name: "Màn hình Dell Ultrasharp", price: 5000000, quantity: 1 },
    ],
    cart: [],
    addProduct: (data) => set((state) => {
        const checkExistProd = state.cart.find(item => item.id === data.id);

        if (checkExistProd) {
            return {
                cart: state.cart.map((item) => {
                    return item.id === data.id ? ({ ...item, quantity: item.quantity + 1 }) : item
                })
            }
        }
        return { cart: [...state.cart, data] };
    }),
    deleteProduct: (dataId) => set((state) => {
        const checkExistProd = state.cart.find(item => item.id === dataId);
        if (checkExistProd) {
            if (checkExistProd.quantity > 1) {
                return {
                    cart: state.cart.map((item) => {
                        return item.id === dataId ? ({ ...item, quantity: item.quantity - 1 }) : item
                    })
                }
            }
            else return {
                cart: state.cart.filter(item => item.id !== dataId)
            }
        }
        return state;
    }),

}));

export default ProductStore;