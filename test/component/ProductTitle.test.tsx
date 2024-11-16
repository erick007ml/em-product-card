import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard, ProductTitle } from '../../src/components'

import { product1, product2 } from '../data/products'

describe('ProductTitle', () => {
  test('debe de mostrar el componente correctamente con el titulo', () => {
    const wrapper = renderer.create(<ProductTitle title={'Product Title'} />)
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
  test('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => (
          <>
            <ProductTitle />
          </>
        )}
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
  test('debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => (
          <>
            <ProductTitle />
          </>
        )}
      </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
