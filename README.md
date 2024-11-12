# PRODUCTO CARD

Este es un paquete de pruebas de depliegue de npm.

### ERICK

```bash
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'em-product-card';

```

```bash
<ProductCard
    product={product}
    initialValues={{ count: 1, maxCount: 10 }} >
    {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
    <>
        <ProductImage />
        <ProductTitle title={'Styling card title'} />
        <ProductButtons />
    </>
    )}
</ProductCard>

```
