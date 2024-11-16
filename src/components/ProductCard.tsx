import React from 'react'

import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import {
  InitialValues,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from '../interfaces/productInterfaces'
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({
  product: { id: '', title: '' },
  counter: 0,
  increaseBy: () => {},
} as ProductContextProps)
const { Provider } = ProductContext

export interface OnChangeArgs {
  product: Product
  count: number
}

export interface ProductCardProps {
  product: Product
  // children?: React.ReactElement | React.ReactElement[]
  children: (args: ProductCardHandlers) => JSX.Element
  className?: string
  style?: React.CSSProperties
  onChange?: (args: OnChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const {
    counter,
    increaseBy,
    maxCount,
    reset,
    isMaxCountReached,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  })
  return (
    <Provider value={{ product, counter, increaseBy, maxCount }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          product,
          count: counter,
          increaseBy,
          maxCount,
          isMaxCountReached,
          reset,
        })}
      </div>
    </Provider>
  )
}

export default ProductCard //ya no es necesario
