import React, { useEffect, useState } from 'react';
import About from '../components/About/About';
import Step from '../components/Step/Step';
import Questions from '../components/Question/Questions';
import Contact from '../components/Contact/Contact';
import Product from '../components/Product/Product';
import { useStore } from '../context';
import CarouselProd from '../components/Product/Carousel/CarouselProd';
import { ProductProps } from '../context/types';
import Header from 'components/Header';

const Home = () => {
  const { products } = useStore();
  const [hot, setHot] = useState<ProductProps[]>([]);
  const [newProds, setNewProds] = useState<ProductProps[]>([]);
  useEffect(() => {
    document.title = 'Maison De Perfume';
  }, []);

  useEffect(() => {
    setHot(products.filter((item) => item.isHot));
    setNewProds(products.filter((item) => item.isNew));
  }, [products]);

  return (
    <div>
      <main className="main">
        <section className="home" id="home">
          <Header />
        </section>
        <About />

        <div>
          <section className="product section container">
            <h2 className="section__title-center">Bán Chạy Nhất</h2>
            <div className="product__carousel">
              <CarouselProd products={hot} />
            </div>
          </section>
        </div>
        {/* <div>
          <section className="product section container">
            <h2 className="section__title-center">Sản Phẩm Mới</h2>
            <div className="product__carousel">
              <CarouselProd products={newProds} />
            </div>
          </section>
        </div> */}
        <div>
          <section className="product section container" id="products">
            <div className="section">
              <h2 className="section__title-center">Nước Hoa Nam</h2>
              <div className="product__container grid">
                {products?.map((item) => {
                  if (item.gender === 'nam') {
                    return <Product {...item} key={item.id} />;
                  }
                })}
              </div>
            </div>
            <div className="section">
              <h2 className="section__title-center">Nước Hoa Nữ</h2>
              <div className="product__container grid">
                {products?.map((item) => {
                  if (item.gender === 'nữ') {
                    return <Product {...item} key={item.id} />;
                  }
                })}
              </div>
            </div>
            <div className="section">
              <h2 className="section__title-center">Nước Hoa Unisex</h2>
              <div className="product__container grid">
                {products?.map((item) => {
                  if (item.gender === 'UNISEX') {
                    return <Product {...item} key={item.id} />;
                  }
                })}
              </div>
            </div>
            {/* <div className="section">
              <h2 className="section__title-center">Tất Cả Sản Phẩm</h2>

              <p className="product__description">
                Đây là một số sản phẩm tại cửa hàng, tất cả đều là hàng Authentic được chúng tôi xem
                xét và kiểm duyệt kĩ lưỡng. Mua và tận hưởng chất lượng tốt nhất từ chúng tôi.
              </p>

              <div className="product__container grid">
                {products?.map((item) => (
                  <Product {...item} key={item.id} />
                ))}
              </div>
            </div> */}
          </section>
        </div>
        <Step />
        <Questions />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
