import React from 'react';
import Product from './Product';
import { useStore } from '../../context';
import CarouselProd from './Carousel/CarouselProd';

const Products: React.FC = () => {
  const { products } = useStore();

  return (
    <div>
      <section className="product section container" id="products">
        <div className="product__carousel">
          <CarouselProd products={products} />
        </div>

        <div className="section">
          <h2 className="section__title-center">Tất Cả Sản Phẩm</h2>

          <p className="product__description">
            Đây là một số sản phẩm tại cửa hàng, tất cả đều là hàng Authentic được chúng tôi xem xét
            và kiểm duyệt kĩ lưỡng. Mua và tận hưởng chất lượng tốt nhất từ chúng tôi.
          </p>

          <div className="product__container grid">
            {products?.map((item) => (
              <Product {...item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
