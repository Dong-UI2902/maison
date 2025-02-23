import React, { useEffect, useState } from 'react';
import './styles/Variables.scss';
import './styles/Base.scss';
import './styles/Theme.scss';
import './styles/Layout.scss';
import './styles/Header.scss';
import './styles/Home.scss';
import './styles/Button.scss';
import './styles/About.scss';
import './styles/Step.scss';
import './styles/Product.scss';
import './styles/View.scss';
import './styles/Question.scss';
import './styles/Contact.scss';
import './styles/Footer.scss';
import './styles/Scroll.scss';
import './styles/BreakPoint.scss';
import './styles/Checkout.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'react-multi-carousel/lib/styles.css';
import ViewProduct from './pages/ViewProduct';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Provider from './pages/Provider';
import { registerOptionalParams } from './Helper/Helper';
import Search from './pages/Search';
import Checkout from './pages/Checkout';
import Submited from './pages/Submited';
import ShoppingCart from 'pages/ShoppingCart';
import AllProducts from 'pages/AllProducts';

function App() {
  const [sections, setSections] = useState<any>();
  useEffect(() => {
    setSections(document.querySelectorAll<HTMLElement>('section[id]'));
  }, []);

  const scrollActive = () => {
    const scrollY = window.pageYOffset;
    if (sections) {
      sections.forEach(
        (current: {
          offsetHeight: any;
          offsetTop: number;
          getAttribute: (arg0: string) => any;
        }) => {
          const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop,
            sectionId = current.getAttribute('id');

          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // @ts-ignore
            document
              .querySelector('.nav__menu a[href*=' + sectionId + ']')
              .classList.add('active-link');
          } else {
            // @ts-ignore
            document
              .querySelector('.nav__menu a[href*=' + sectionId + ']')
              .classList.remove('active-link');
          }
        }
      );
    }
  };

  const handleScrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 400) {
      // @ts-ignore
      scrollUp.classList.add('show-scroll');
    } else {
      // @ts-ignore
      scrollUp.classList.remove('show-scroll');
    }
  };

  window.addEventListener('scroll', scrollActive);
  window.addEventListener('scroll', handleScrollUp);

  return (
    <Provider>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={
            <>
              <Navbar />
              <ViewProduct />
            </>
          }
        />
        {registerOptionalParams(
          '/product/:page?',
          <>
            <Navbar />
            <Search />
          </>
        )}
        <Route
          path="/checkout/:id"
          element={
            <>
              <Navbar />
              <Checkout />
            </>
          }
        />
        <Route
          path="/submited"
          element={
            <>
              <Navbar />
              <Submited />
            </>
          }
        />
        <Route
          path="/gio-hang"
          element={
            <>
              <Navbar />
              <ShoppingCart />
            </>
          }
        />
        <Route
          path="/tat-ca-san-pham"
          element={
            <>
              <Navbar />
              <AllProducts />
            </>
          }
        />
        {/* <Route path="/vong-quay-may-man" element={<LuckyWheel />} /> */}
        <Route
          path="/sukienuudai/checkout/:id"
          element={
            <>
              <Navbar />
              <Checkout />
            </>
          }
        />
        <Route
          path="/sukienuudai/submited"
          element={
            <>
              <Navbar />
              <Submited />
            </>
          }
        />
      </Routes>
      <Footer />
      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line scrollup__icon" />
      </a>
      {/* <Snow /> */}
    </Provider>
  );
}

export default App;
