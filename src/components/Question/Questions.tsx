import { URL_FB } from 'Helper/Helper';
import React, { useRef } from 'react';

export const gotoFB = () => {
  window.open(URL_FB);
};

const Questions = () => {
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const myRef4 = useRef(null);
  const myRef5 = useRef(null);
  const myRef6 = useRef(null);

  const handleClick = (ref: any) => {
    const item = ref.current;
    // @ts-ignore
    const content = item.querySelector('.questions__content');

    // @ts-ignore
    if (item.classList.contains('accordion-open')) {
      // @ts-ignore
      item.classList.remove('accordion-open');
      content.removeAttribute('style');
    } else {
      // @ts-ignore
      item.classList.add('accordion-open');
      content.style.height = content.scrollHeight + 'px';
    }
  };

  return (
    <div>
      <section className="questions section" id="faqs">
        <h2 className="section__title-center questions__title container">
          Những câu hỏi thường gặp
        </h2>

        <div className="questions__container container grid">
          <div className="questions__group">
            <div className="questions__item" ref={myRef1} onClick={() => handleClick(myRef1)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  Tôi có cần một tài khoản để đặt hàng không?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Không, tất cả những gì bạn cần là một địa chỉ email và số điện thoại. Maison de
                  Perfume khuyên bạn nên đăng ký tài khoản để dễ dàng theo dõi và lưu trữ những sản
                  phẩm yêu thích của mình. Bên cạnh đó, việc đăng ký tài khoản sẽ giúp bạn tích lũy
                  được giá trị mua hàng để nhận được những chương trình ưu đãi dành cho thành viên
                  của Maison De Perfume.
                  <br />
                  Bạn cũng có thể đặt hàng và theo dõi các đơn đặt hàng với tư cách là khách và đăng
                  ký (click vào để đăng ký) vào thời điểm phù hợp với bạn
                </p>
              </div>
            </div>
            <div className="questions__item" ref={myRef3} onClick={() => handleClick(myRef3)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  Hàng hóa có phải là chính hãng không? Authentic không?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Chúng tôi cam kết tất cả các sản phẩm được chúng tôi bán ra chính hãng 100%,
                  Authentic 100%. Các đối tác của chúng tôi là những nhà phân phối chính ngạch trong
                  và ngoài nước, các đơn vị vận chuyển chuyên nghiệp, chúng tôi chỉ làm việc với
                  những công ty tốt nhất, giỏi nhất trong kinh doanh và luôn đặt khách hàng là trọng
                  tâm để phát triển. Với sự cố gắng của đội ngũ chúng tôi, đảm bảo cho bạn một nơi
                  tin cậy để mua sắm mà các bạn không thể tìm được ở bất kỳ nơi nào khác.
                </p>
              </div>
            </div>

            <div className="questions__item" ref={myRef2} onClick={() => handleClick(myRef2)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">
                  Sản phẩm nhận được không giống với hình ảnh trên website?
                </h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Trong trường hợp Quý khách nhận được sản phẩm không giống với hình ảnh trên
                  website vui lòng liên hệ ngay lập tức cho Maison De Perfume thông qua số Hotline:
                  0928.33.88.55, chúng tôi sẽ ngay lập tức xử lý cho Quý khách. Nếu Quý khách chưa
                  thể đặt hàng trực tuyến vì bất cứ lý do gì xin đừng ngần ngại liên hệ ngay với
                  tổng đài CSKH của Maison De Perfume để được đặt hàng và hỗ trợ tư vấn sản phẩm.
                </p>
              </div>
            </div>
          </div>

          <div className="questions__group">
            <div className="questions__item" ref={myRef4} onClick={() => handleClick(myRef4)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">Chính sách đổi trả?</h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Hàng hóa Maison de Perfume bán ra đảm bảo là hàng chính hãng 100%.Chúng tôi cam
                  kết không bán hàng giả, hàng nhái, hàng không đảm bảo chất lượng. Các trường hợp
                  được đổi lại hàng hóa:
                  <br />
                  - Với những sản phẩm lỗi kết cấu sản phẩm do quá trình sản xuất của hãng, hay lỗi
                  do vận chuyển dẫn đến việc sản phẩm bị méo mó, thay đổi hình dạng, hư hỏng bộ phận
                  vòi xịt, ống xịt, bị nứt, vỡ.
                  <br />
                  - Đối với những sản phẩm đổi vì lý do cá nhân (tặng, được tặng), sản phẩm đổi chỉ
                  được áp dụng trong thời gian 10 ngày kể từ khi sản phẩm được bán ra. Sản phẩm đổi
                  phải đảm bảo chưa được sửa.
                  <br />
                  - Đối với hàng Full seal thì phải còn nguyên seal, đối với các sản phẩm Giftset,
                  Tester phải đảm bảo còn nguyên hộp, sản phẩm chưa bị can thiệp và sử dụng.
                  <br />- Sản phẩm sẽ được chúng tôi kiểm tra lại để đảm bảo sản phẩm là hàng hóa
                  chúng tôi phân phối.
                </p>
              </div>
            </div>

            <div className="questions__item" ref={myRef5} onClick={() => handleClick(myRef5)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">Phương thức vận chuyển thế nào?</h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Đối với các đơn trong phạm vi Thành phố Hồ Chí Minh, các đơn hàng có thể chọn
                  phương thức thanh toán COD hoặc chuyển khoản Maison de Perfume cam kết các quận
                  trung tâm sẽ được ship hàng trong 3 giờ kể từ khi chốt đơn đối với những đơn hàng
                  trong ngày từ khung giờ 9.00 am đến 15.00 pm. Nếu bạn muốn ship hẹn giờ, liên hệ
                  hotline 0928.33.88.55 hoặc{' '}
                  <span style={{ fontWeight: '600', textDecoration: 'underLine' }} onClick={gotoFB}>
                    fangape facebook
                  </span>{' '}
                  chúng tôi để được hỗ trợ.
                  <br />
                  <br />
                  Đối với các đơn hàng Tỉnh (ngoài Thành phố Hồ Chí Minh), Sau khi chúng tôi xác
                  nhận đơn hàng của bạn sẽ được đóng gói và vận chuyển trong vòng 2-4 ngày (không
                  ngày lễ).
                </p>
              </div>
            </div>

            <div className="questions__item" ref={myRef6} onClick={() => handleClick(myRef6)}>
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">Các sản phẩm có sẵn không?</h3>
              </header>

              <div className="questions__content">
                <p className="questions__description">
                  Các sản phẩm hiện thị giá và size (dung tích) với thanh công cụ thanh toán màu đỏ
                  có nghĩa là hàng hóa đang có sẵn. Những sản phẩm với size bị gạch ngang và thanh
                  công cụ màu trắng hiển thị hết hàng có nghĩa là sản phẩm đang hết. Chúng tôi luôn
                  minh bạch số lượng sản phẩm và đa dạng dạng hóa có sẵn để khách hàng có thể trải
                  nghiệm mua sắm một cách an toàn và tiện lợi. Bạn cũng có thể liên hệ với chúng tôi
                  về các sản phẩm bạn đang tìm kiếm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Questions;
