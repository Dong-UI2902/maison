import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductProps } from '../context/types';
import { useStore } from '../context';
import Product from '../components/Product/Product';

const Search = () => {
  const { products } = useStore();
  const [list, setList] = useState<ProductProps[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const text = searchParams.get('search');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (text) {
      const newArr = products.filter((item) => {
        return (
          item.name.toUpperCase().search(text.toUpperCase()) >= 0 ||
          item.brand.toUpperCase().search(text.toUpperCase()) >= 0
        );
      });
      return setList(newArr);
    }
  }, [products, text]);

  return (
    <div>
      <section className="product section container" id="products">
        <div className="section" style={{ paddingTop: '10px' }}>
          <h2 className="section__title-center">- Có {list.length} Kết Quả -</h2>
          <div className="product__container grid">
            {list?.map((item) => (
              <Product {...item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
