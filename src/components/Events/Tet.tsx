import React from 'react';
import '../../styles/Tet.scss';

const Tet = () => {
  return (
    <>
      <div className="tet">
        <img src="/assets/img/events/tet/cay.png" alt="" className="tet-img home__img-cay" />
        <img src="/assets/img/events/tet/cay2.png" alt="" className="tet-img home__img-cay2" />
        <img src="/assets/img/events/tet/cay2.png" alt="" className="tet-img home__img-cay3" />
        <img
          src="/assets/img/events/tet/longden.png"
          alt=""
          className="tet-img home__img-longden1"
        />
        <img
          src="/assets/img/events/tet/longden.png"
          alt=""
          className="tet-img home__img-longden2"
        />
        <img
          src="/assets/img/events/tet/longden.png"
          alt=""
          className="tet-img home__img-longden3"
        />

        {/* <img src="/assets/img/events/tet/tag.png" alt="" className="home__img-tag" /> */}
        <div
          className="home__container container grid"
          //   style={{ backgroundImage: `url("/assets/img/events/tet/phao.png")` }}
        >
          <img src="/assets/img/events/tet/tet.png" alt="" className="home__img" />
          {/* <img src="/assets/img/events/tet/rong_may.png" alt="" className="home__img-rong" /> */}

          <div className="home__data">
            {/* <h1 className="home__title">
                PERFUME for you <br /> Tạo nên sự tự tin bạn cần
              </h1> */}
            <img src="/LOGO.png" alt="" className="home__title-img" />
            <p className="home__description">
              Nước hoa tạo nên tính cách nhất định khiến người khác nhận ra mùi hương của bạn.
            </p>
            <a href="#products" className="button button--flex">
              Mua ngay <i className="ri-arrow-right-down-line button__icon" />
            </a>
          </div>

          <div className="home__social">
            <span className="home__social-follow">Follow Us</span>

            <div className="home__social-links">
              <a
                href="https://www.facebook.com/perfumeforyouvn.q9"
                target="_blank"
                className="home__social-link"
              >
                <i className="ri-facebook-fill" />
              </a>
              <a
                href="https://www.instagram.com/perfumeforyou.vn"
                target="_blank"
                className="home__social-link"
              >
                <i className="ri-instagram-line" />
              </a>
              <a
                href="https://www.tiktok.com/@perfumeforyou.vn"
                target="_blank"
                className="home__social-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-tiktok"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tet;
