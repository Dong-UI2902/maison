import Product from 'components/Product/Product';
import { useStore } from 'context';
import React from 'react';

const AllProducts = () => {
  const { products } = useStore();

  return (
    <section className="product section container">
      <h2 className="section__title-center">Tất Cả Sản Phẩm</h2>
      <div className="product__container grid">
        {products?.map((item) => (
          <Product {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
