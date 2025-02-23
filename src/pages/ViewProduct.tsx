import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { useStore } from '../context';
import { apartFrom, FormatMoney } from '../Helper/Helper';
import { ProductProps } from '../context/types';

const ViewProduct = () => {
  const { id } = useParams();
  const { products } = useStore();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string>();
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);
  const [images, setImages] = useState<string[]>();
  const [product, setProduct] = useState<ProductProps>({
    id: '',
    name: '',
    prices: [],
    description: '',
    images: [],
    gender: '',
    brand: '',
    isNew: true,
    isHot: true
  });

  const [index, setIndex] = useState<number>(0);

  const findProduct = () => {
    const found = products.find((item) => item.id === id);
    if (found) {
      setImages([found.prices[0].image, ...found.images]);
      setProduct(found);
    }
  };

  useEffect(() => {
    // @ts-ignore
    document.getElementById('detail').innerHTML = product.description;
    document.title = product.name;
  }, [product]);

  useEffect(() => {
    findProduct();
  }, [products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(0, images.length);

      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView({
          inline: 'center',
          behavior: 'smooth',
          block: 'end'
        });
      }
    }
  };

  const handleClick = (indx: number) => {
    setIndex(indx);
    // setSelectedImage(product.prices[indx].image);
    // setSelectedImageIndex(indx);
  };

  return (
    <div className="view">
      {/* {isMobile && (
        <div className="view__btn">
          <a
            href={
              product?.prices[index]?.status
                ? '/checkout/' + product.id + '?size=' + product?.prices[index]?.capacity
                : '#'
            }
            className="button-75"
            role="button"
          >
            <span className="text">Mua ngay</span>
          </a>
        </div>
      )} */}
      <div className="view__container grid">
        {isMobile && (
          <div className="view__title">
            <div className="view__title-thuonghieu">
              <a>{product.brand}</a>
              <div>
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-half-line" />
              </div>
            </div>
            <a>
              {product.name} <span>{product.gender}</span>
            </a>
          </div>
        )}
        <div className="container__view grid">
          <div className="view__image">
            <img
              src={'https://lh3.googleusercontent.com/d/' + selectedImage}
              alt={'ảnh sản phẩm'}
            />
            <div className="carousel">
              <div className="carousel__images">
                {images &&
                  images.map((image, idx) => (
                    <div
                      onClick={() => handleSelectedImageChange(idx)}
                      style={{
                        backgroundImage: `url(https://lh3.googleusercontent.com/d/${image})`
                      }}
                      key={idx}
                      className={`carousel__image ${
                        selectedImageIndex === idx && 'carousel__image-selected'
                      }`}
                      ref={(el) => (carouselItemsRef.current[idx] = el)}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="container__detail grid">
            {!isMobile && (
              <>
                <div className="view__title">
                  <div className="view__title-thuonghieu">
                    <a>
                      {product.name} <span>{product.gender}</span>
                    </a>
                  </div>
                  <div>
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-fill" />
                    <i className="ri-star-half-line" />
                  </div>
                </div>
                <div className="view__body">
                  <div>
                    Thương hiệu:{' '}
                    <Link
                      to={'/product?search=' + product.brand}
                      className="search"
                      style={{ fontSize: '17px' }}
                    >
                      {product.brand}
                    </Link>
                  </div>
                  <div>{product.name + ' ' + product.prices[index]?.capacity}</div>
                </div>
                <div className="view__price">
                  <p>
                    Giá:{' '}
                    <span>
                      <FormatMoney
                        price={
                          product.prices[index]?.salePrice
                            ? product.prices[index]?.salePrice
                            : product.prices[index]?.price
                        }
                      />
                    </span>
                  </p>
                  {!product.prices[index]?.status && (
                    <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Hết Hàng</p>
                  )}
                  {product.prices[index]?.salePrice && (
                    <p className="view__price-thitruong">
                      Giá thị trường: <FormatMoney price={product.prices[index]?.price} /> - Tiết
                      kiệm: <FormatMoney price={apartFrom(product, index)} />
                    </p>
                  )}
                </div>
              </>
            )}
            {isMobile && (
              <div className="view__body">
                <div className="view__body-status">
                  <div>
                    <p>{product.name + ' ' + product.prices[index]?.capacity}</p>
                    <p className="title">
                      {product.prices[index]?.status ? 'còn hàng' : 'hết hàng'}
                    </p>
                  </div>
                  <div>
                    <p>
                      <FormatMoney price={product.prices[index]?.price} />
                    </p>
                    <p>
                      <FormatMoney price={product.prices[index]?.salePrice} />
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="view__policy">
              <div>
                <i className="ri-truck-line" />
                Free ship toàn quốc
              </div>
              <div>
                <i className="ri-shield-check-line" />
                Chính hãng 100%
              </div>
              <div>
                <i className="ri-archive-line" />
                Đổi trả miễn phí
              </div>
            </div>
            <div>Lựa chọn size</div>

            <div className="view__standard">
              {product.prices.map((item: any, indx) => (
                <div
                  className={`view__standard-card ${index === indx && 'active'}`}
                  key={indx}
                  onClick={() => handleClick(indx)}
                >
                  <img
                    src={`https://lh3.googleusercontent.com/d/${
                      item.capacity === '10ml' ? '12xNMfR8ok8jI0VFlyddUDcyQpTRstynq' : item.image
                    }`}
                  />
                  <div className={`${!item.status && 'outProd'}`}>
                    {product.name + ' ' + item?.capacity}
                  </div>
                </div>
              ))}
            </div>
            <div className="view__button">
              <a
                href={
                  product?.prices[index]?.status
                    ? '/checkout/' + product.id + '?size=' + product?.prices[index]?.capacity
                    : '#'
                }
                className="btn-submit"
                role="button"
              >
                Mua ngay
              </a>
            </div>
            {isMobile && (
              <div className="view__detail">
                <p>Chi tiết sản phẩm</p>
                <div id="detail"> </div>
              </div>
            )}
          </div>
        </div>
        {!isMobile && (
          <div className="view__detail">
            <p>Chi tiết sản phẩm</p>
            <div id="detail"> </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProduct;
