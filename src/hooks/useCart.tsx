import React, { ReducerAction, ReducerState, useReducer } from "react"
import { Book } from "../components/Product_list/ProductListv2"
import Product from "../pages/Product/Product"
export enum CartActionEnum {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}
interface CartState {
  books: Book[]
}
export interface CartAction {
  type: CartActionEnum
  payload: number
}
const incrementBook = (cart: Book[], id: number) => {
  const i = cart.findIndex((book) => book.productId === id)
  if (cart[i]) cart[i] = { ...cart[i], quantity: cart[i].quantity + 1 }
  return cart
}
const decrementBook = (cart: Book[], id: number) => {
  const i = cart.findIndex((book) => book.productId === id)
  if (cart[i]) {
    if (cart[i].quantity <= 1) return cart.filter((book) => book.productId !== id)
    cart[i] = { ...cart[i], quantity: cart[i].quantity - 1 }
    return cart
  }
  return cart
}
function cartReducer(state: CartState, action: CartAction): CartState {
  const currentBooks = [...state.books]
  switch (action.type) {
    case CartActionEnum.DECREMENT:
      return { books: decrementBook(currentBooks, action.payload) }
    case CartActionEnum.INCREMENT:
      return { books: incrementBook(currentBooks, action.payload) }
    default:
      throw new Error()
  }
}
export const useCart = (initialCart?: Book[]) => {
  const [cart, dispatchCart] = useReducer(cartReducer, { books: initialCart ?? [] })
  const getTotalPrice = () => {
    let sum = 0
    cart.books.forEach((book) => {
      sum += book.price * book.quantity
    })
    return sum
  }
  return { cart, dispatchCart, getTotalPrice }
}
