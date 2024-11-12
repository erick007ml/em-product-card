import ProductCard, { ProductImage, ProductTitle } from '../components'
import { ProductButtons } from '../components/ProductButtons'
import { products } from '../data/products'

import '../styles/custom-styles.css'

const product = products[0]
const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div>
        <ProductCard
          key={product.id}
          product={product}
          initialValues={{ count: 1, maxCount: 10 }}
        >
          {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle title={'Styling card title'} />
              <ProductButtons />
            </>
          )}
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage
