'use client'
import { createContext } from "react";


const ProductContext = createContext();

export default function ProductContextProvider({ children }){

  return <ProductContext.Provider value={{}}>{ children }</ProductContext.Provider>

}

