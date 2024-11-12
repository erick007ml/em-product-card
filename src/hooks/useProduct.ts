import { useEffect, useRef, useState } from 'react'
import { OnChangeArgs } from '../components/ProductCard'
import { InitialValues, Product } from '../interfaces/productInterfaces'

interface UseProductProps {
  onChange?: (args: OnChangeArgs) => void
  product: Product
  value?: number
  initialValues?: InitialValues
}
export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: UseProductProps) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value)

  const isMounted = useRef(false)

  const increaseBy = (value: number) => {
    const newVale = Math.max(counter + value, 0)
    if (initialValues?.maxCount) {
      if (newVale > initialValues?.maxCount) return
    }
    setCounter(newVale)
    onChange?.({ product, count: newVale })
  }
  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if (!isMounted.current) return
    setCounter(value)
  }, [value])
  useEffect(() => {
    isMounted.current = true
  }, [])

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    value,

    increaseBy,
    reset,
  }
}
