import React, { SyntheticEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    // @ts-ignore
    emailjs.sendForm('service_8daql0c', 'template_kpe5me9', form.current, '700DYH1NLtyLkejQe').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // @ts-ignore
    document.getElementById('myForm').reset();
  };

  return (
    <div>
      <section className="contact section container" id="contact">
        <div className="contact__container grid">
          <div className="contact__box">
            <h2 className="section__title">
              Liên hệ ngay hôm nay <br /> thông qua bất kỳ <br /> thông tin nào.
            </h2>

            <div className="contact__data">
              <div className="contact__information">
                <h3 className="contact__subtitle">Gọi hỗ trợ trực tiếp</h3>
                <span className="contact__description">
                  <i className="ri-phone-line contact__icon"></i>
                  <a href="tel:0928.338.855"> 0928.33.88.55 </a>
                </span>
              </div>

              <div className="contact__information">
                <h3 className="contact__subtitle">Gửi mail cho chúng tôi</h3>
                <span className="contact__description">
                  <i className="ri-mail-line contact__icon"></i>
                  <a href="mailto:cskh@maisonperfume.net">cskh@maisonperfume.net</a>
                </span>
              </div>
            </div>
          </div>
          {/*@ts-ignore*/}
          <form ref={form} onSubmit={sendEmail} id="myForm" className="contact__form">
            <div className="contact__inputs">
              <div className="contact__content">
                <input
                  type="email"
                  placeholder=" "
                  className="contact__input"
                  name="user_email"
                  required
                />
                <label htmlFor="" className="contact__label">
                  Email
                </label>
              </div>

              <div className="contact__content">
                <input
                  type="text"
                  placeholder=" "
                  className="contact__input"
                  name="user_name"
                  required
                />
                <label htmlFor="" className="contact__label">
                  Tiêu đề
                </label>
              </div>

              <div className="contact__content contact__area">
                <textarea name="message" placeholder=" " className="contact__input" />
                <label htmlFor="" className="contact__label">
                  Lời nhắn
                </label>
              </div>
            </div>

            <button className="button button--flex" type="submit">
              Gửi tin nhắn
              <i className="ri-arrow-right-up-line button__icon"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
