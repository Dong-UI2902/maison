import React from 'react';

const About = () => {
  return (
    <div className="bg-about">
      <section className="about section container" id="about">
        <div className="about__container grid">
          <img src="assets/img/su-nhon-mui.jpg" alt="" className="about__img" />

          <div className="about__data">
            <h2 className="section__title about__title">Tiêu chí</h2>

            <p className="about__description">
              Chất lượng, uy tín là yếu tố then chốt để <strong>Maison De Perfume</strong> có thể
              duy trì và không ngừng phát triển trong vòng hơn 5 năm qua, tất các các sản phẩm đều
              là sản phẩm chính hãng. <strong>Maison De Perfume</strong> coi sự thành công của khách
              hàng chính là thành công của chính mình, và mong muốn được nhận thêm nhiều góp ý, đóng
              góp và những lời động viện, tin tưởng của quý khách hàng để ngày càng hoàn thiện hơn
              nữa trong tương lai.
            </p>

            <div className="about__details">
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                Sản phẩm chính hãng, đảm bảo nguồn gốc xuất xứ.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                Mức giá tốt nhất trên thị trường tại mọi thời điểm.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                Giao hàng an toàn và nhanh chóng.
              </p>
              <p className="about__details-description">
                <i className="ri-checkbox-fill about__details-icon" />
                Đền bù 200% nếu phát hiện hàng giả.
              </p>
            </div>

            <a href="/tat-ca-san-pham" className="button--link button--flex">
              Mua ngay <i className="ri-arrow-right-down-line button__icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
