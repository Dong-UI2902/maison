import { URL_FB, URL_INS, URL_TIKTOK } from 'Helper/Helper';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer section">
        {/*<img className="footer__1" src="/assets/img/footer1.png" />*/}
        {/*<img className="footer__2" src="/assets/img/footer2.png" />*/}
        <div className="footer__container container grid">
          <div className="footer__content">
            <a href="/#" className="footer__logo">
              <img src="/LOGO.png" alt="logo" />
            </a>
            {/*<h3 className="footer__title">*/}
            {/*  Thiên đường nước hoa <br /> Tạo nên sự tự tin bạn cần*/}
            {/*</h3>*/}

            {/*<div className="footer__subscribe">*/}
            {/*  <input type="email" placeholder="Enter your email" className="footer__input" />*/}

            {/*  <button className="button button--flex footer__button">*/}
            {/*    Subscribe*/}
            {/*    <i className="ri-arrow-right-up-line button__icon"></i>*/}
            {/*  </button>*/}
            {/*</div>*/}
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Showroom</h3>

            <ul className="footer__data">
              <li className="footer__information">
                BE5 Khu Beverly, Long Bình, Thủ Đức , Hồ Chí Minh
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Liên hệ</h3>

            <ul className="footer__data">
              <li className="footer__information">
                <i className="ri-phone-line contact__icon"></i>
                <a href="tel:0928.33.88.55"> 0928.33.88.55 </a>
              </li>

              <li className="footer__information">
                {/*TODO*/}
                <i className="ri-mail-line contact__icon"></i>
                <a href="mailto:cskh@maisonperfume.net">cskh@maisonperfume.net</a>
              </li>

              <div className="footer__social">
                <a target="_blank" href={URL_FB} className="footer__social-link">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a target="_blank" href={URL_INS} className="footer__social-link">
                  <i className="ri-instagram-line"></i>
                </a>
                <a target="_blank" href={URL_TIKTOK} className="footer__social-link">
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
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Chấp nhận tất cả thẻ tín dụng</h3>

            <div className="footer__cards">
              <img src="/assets/img/card1.png" alt="" className="footer__card" />
              <img src="/assets/img/card2.png" alt="" className="footer__card" />
              <img src="/assets/img/card3.png" alt="" className="footer__card" />
              <img src="/assets/img/card4.png" alt="" className="footer__card" />
            </div>
          </div>
        </div>

        <p className="footer__copy">&#169; MaisonDePerfume. All rigths reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
