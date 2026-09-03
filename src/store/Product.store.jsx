import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useProductStore = create(
    persist(
        (set) => ({
            products: [
                { id: 1, name: "Bàn phím cơ AULA F75", price: 800000 },
                { id: 2, name: "Tai nghe Moondrop Chu II", price: 450000 },
                { id: 3, name: "Chuột Logitech G102", price: 350000 },
                { id: 4, name: "Màn hình Dell Ultrasharp", price: 5000000 },
            ],
            addProduct: (data) => set((state) => {
                const checkExistProd = state.cart.find(item => item.id === data.id);

                if (checkExistProd) {
                    return {
                        cart: state.cart.map((item) =>
                            item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
                        )
                    };
                }
                return { cart: [...state.cart, { ...data, quantity: 1 }] };
            }),
            deleteProduct: (dataId) => set((state) => ({
                cart: state.cart.filter(item => item.id !== dataId)
            })),
            increaseQuantity: (dataId) => set((state) => ({
                cart: state.cart.map((item) =>
                    item.id === dataId ? { ...item, quantity: item.quantity + 1 } : item
                )
            })),
            decreaseQuantity: (dataId) => set((state) => {
                const existItem = state.cart.find(item => item.id === dataId);
                if (!existItem) return state;

                if (existItem.quantity > 1) {
                    return {
                        cart: state.cart.map((item) =>
                            item.id === dataId ? { ...item, quantity: item.quantity - 1 } : item
                        )
                    };
                } else {
                    return state;
                }
            }),
        }),
        {
            name: 'cart-storage',
            partialize: (state) => ({ cart: state.cart }),
        }
    )
);

export default useProductStore;