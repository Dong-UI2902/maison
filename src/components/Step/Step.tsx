import React from 'react';
import { gotoFB } from '../Question/Questions';

const Step = () => {
  return (
    <div>
      <section className="steps section container">
        <div className="steps__bg">
          <h2 className="section__title-center steps__title">
            Các bước mua hàng <br />
          </h2>

          <div className="steps__container grid">
            <div className="steps__card">
              <div className="steps__card-number">01</div>
              <h3 className="steps__card-title">Chọn sản phẩm</h3>
              <p className="steps__card-description">
                Chọn một thương hiệu hoặc danh mục (nước hoa nam, nước hoa nữ…) từ menu của Website
                hoặc sử dụng khung tìm kiếm để khám phá một chai nước hoa cụ thể mà bạn đang tìm.
              </p>
            </div>

            <div className="steps__card">
              <div className="steps__card-number">02</div>
              <h3 className="steps__card-title">Đặt hàng</h3>
              <p className="steps__card-description">
                Sau khi lựa chọn được sản phẩm và dung tích (size) mà bạn muốn mua. Vui lòng đặt
                hàng trực tiếp trên website hoặc gửi tin nhắn về messenger trên trang web hoặc truy
                cập về địa chỉ{' '}
                <span style={{ fontWeight: '600', textDecoration: 'underLine' }} onClick={gotoFB}>
                  fangape facebook
                </span>{' '}
                để được hỗ trợ tư vấn và đặt hàng.
              </p>
            </div>

            <div className="steps__card">
              <div className="steps__card-number">03</div>
              <h3 className="steps__card-title">Xác nhận đơn hàng</h3>
              <p className="steps__card-description">
                Khi bạn đặt hàng thành công, bộ phận chăm sóc khách hàng của chúng tôi sẽ liên hệ
                xác nhận đơn hàng sớm nhất với bạn (9h – 21h) trước khi đơn hàng được vận chuyển.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Step;
