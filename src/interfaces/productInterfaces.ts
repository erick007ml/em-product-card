import { ProductButtonsProps } from '../components/ProductButtons'
import { ProductCardProps } from '../components/ProductCard'
import { ProductImageProps } from '../components/ProductImage'
import { ProductTitleProps } from '../components/ProductTitle'

export interface Product {
  id: string
  title: string
  img?: string
}
export interface ProductContextProps {
  counter: number
  maxCount?: number
  product: Product
  increaseBy: (value: number) => void
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element
  Title: (Props: ProductTitleProps) => JSX.Element
  Image: (Props: ProductImageProps) => JSX.Element
  Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface InitialValues {
  count?: number
  maxCount?: number
}

export interface ProductCardHandlers {
  count: number
  isMaxCountReached: boolean
  maxCount?: number
  product: Product
  increaseBy: (value: number) => void
  reset: () => void
}
