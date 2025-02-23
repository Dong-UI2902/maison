import React, { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Navbar = () => {
  const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
  const [input, setInput] = useState<string>('');
  const myRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const text = searchParams.get('search');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // @ts-ignore
    myRef.current.click();
  };

  const showMenu = () => {
    if (navToggle) {
      // @ts-ignore
      navMenu.classList.add('show-menu');
    }
  };

  const closeMenu = () => {
    if (navClose) {
      // @ts-ignore
      navMenu.classList.remove('show-menu');
    }
  };

  const linkAction = () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const navMenu = document.getElementById('nav-menu');
    // @ts-ignore
    navMenu.classList.remove('show-menu');
  };

  const scrollHeader = () => {
    const header = document.getElementById('header');
    if (window.pageYOffset >= 80) {
      // @ts-ignore
      header.classList.add('scroll-header');
    } else {
      // @ts-ignore
      header.classList.remove('scroll-header');
    }
  };

  useEffect(() => {
    setInput(text || '');
  }, [text]);

  window.addEventListener('scroll', scrollHeader);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <img src="/LOGO.png" className="nav__logo-icon" alt="logo" />
          {/*<i className="ri-leaf-line nav__logo-icon" /> */}
          {/*PERFUME <div style={{ textTransform: 'lowercase' }}>for you</div>*/}
        </a>
        <div className="nav__btns">
          {/*<i className="ri-moon-line change-theme" id="theme-button" />*/}

          {/* <div className="nav__toggle" id="nav-toggle" onClick={showMenu}>
            <i className="ri-menu-line" />
          </div> */}
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/#home" className="nav__link active-link" onClick={linkAction}>
                Trang Chủ
              </a>
            </li>
            <li className="nav__item">
              <a href="/#about" className="nav__link" onClick={linkAction}>
                Giới Thiệu
              </a>
            </li>
            <li className="nav__item">
              <a href="/tat-ca-san-pham" className="nav__link">
                Sản Phẩm
              </a>
            </li>
            <li className="nav__item">
              <a href="/#faqs" className="nav__link" onClick={linkAction}>
                FAQs
              </a>
            </li>
            <li className="nav__item">
              <a href="/#contact" className="nav__link" onClick={linkAction}>
                Liên Hệ
              </a>
            </li>
            <li className="nav__item">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Tìm kiếm..."
                  value={input}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                />
                <button type="submit">Search</button>
                <Link
                  to={'/product?search=' + input}
                  className="search"
                  style={{ fontSize: '17px' }}
                  ref={myRef}
                >
                  Tìm
                </Link>
              </form>
            </li>
          </ul>

          <div className="nav__close" id="nav-close" onClick={closeMenu}>
            <i className="ri-close-line" />
          </div>
        </div>
        <div className="nav__btns">
          <a
            href="/gio-hang"
            className="nav__link"
            onClick={linkAction}
            style={{ display: 'inline-flex' }}
          >
            <i className="ri-shopping-bag-3-fill shopping-card"></i>
          </a>
          <div className="nav__toggle" id="nav-toggle" onClick={showMenu}>
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
