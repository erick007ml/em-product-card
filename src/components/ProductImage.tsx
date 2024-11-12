import React from 'react';

import { useContext } from 'react';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface ProductImageProps {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({
  img = '',
  className,
  style,
}: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  const imgToShow = img || product.img || noImage;

  return (
    <img
      style={style}
      src={imgToShow}
      alt="Product Image"
      className={`${styles.productImg} ${className}`}
    />
  );
};
