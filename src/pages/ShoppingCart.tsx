import React, { useEffect, useState } from 'react';
import { useStore } from '../context';
import { FormatMoney } from 'Helper/Helper';

function ShoppingCart() {
  const { products, getCart } = useStore();
  const [carts, setCarts] = useState<any[]>([]);

  const getOrdered = () => {
    const arrProductIds = getCart();

    const arr: React.SetStateAction<any[]> = [];
    arrProductIds.forEach((item) => {
      products.forEach((element) => {
        if (JSON.parse(item).id === element.id) {
          element.prices.forEach((price) => {
            if (price.capacity === JSON.parse(item).capacity) {
              arr.push({ ...element, prices: price, info: JSON.parse(item).info });
            }
          });
        }
      });
    });

    setCarts(arr);
  };

  useEffect(() => {
    getOrdered();
  }, [products]);

  return (
    <div className="cart">
      <div className="cart__title">
        <i className="ri-shopping-cart-line" />
        Các đơn hàng bạn đã mua
      </div>
      {carts.length > 0 ? (
        <div>
          {carts.map((item, index) => (
            <div key={index} style={{ borderBottom: '1px solid gray' }}>
              <div className="cart__bill">
                <img
                  src={'https://lh3.googleusercontent.com/d/' + item.images[0]}
                  alt=""
                  className="cart__bill-img"
                />
                <div>
                  <div className="cart__bill-title">{item.name}</div>
                  <div className="cart__bill-capacity">{item.prices.capacity}</div>
                </div>
                <div className="product__price cart__bill-salePrice">
                  <FormatMoney price={item.prices.salePrice || item.prices.price} />
                </div>
              </div>
              <div className="cart__bill">
                <div>Tên: {item.info.name}</div>
                <div>SĐT: {item.info.number}</div>
                <div>Địa chỉ: {item.info.address}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ marginTop: '50px' }}>
          <center>Bạn chưa có đơn đặt hàng nào</center>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
