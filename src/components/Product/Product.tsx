import React from 'react';
import { ProductProps } from '../../context/types';
import { FormatMoney } from '../../Helper/Helper';
import { Link } from 'react-router-dom';

const Product: React.FC<ProductProps> = (prod) => {
  const { id, name, prices } = prod;

  return (
    <Link type="button" to={`/product/${id}`}>
      <article className="product__card" style={{ textAlign: 'center' }}>
        {prices[0].salePrice && (
          <>
            <div className="title uudai">ưu đãi giới hạn</div>
            <div className="sale">Sale</div>
          </>
        )}
        <img
          src={'https://lh3.googleusercontent.com/d/' + prices[0].image}
          alt=""
          className="product__img"
          loading="lazy"
        />

        <h3 className="product__title">{name}</h3>
        <span className="product__price">
          {<FormatMoney price={prices[0].salePrice ? prices[0].salePrice : prices[0].price} />}
        </span>

        {/*<button className="button--flex product__button">*/}
        {/*  <i className="ri-shopping-bag-line" />*/}
        {/*</button>*/}
      </article>
    </Link>
  );
};

export default Product;
