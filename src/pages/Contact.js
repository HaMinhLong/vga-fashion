import React from "react";
import BreadCrumb from "../layouts/BreadCrumb";
import map from "../static/images/contact/map.png";

const Contact = () => {
  return (
    <>
      <BreadCrumb node1={"Liên hệ"} />
      <section className="contact_page container">
        <h1 className="page_title type_2">Liên hệ</h1>
        <div className="page_main">
          <div className="content">
            <p>
              VGA FASHION cửa hàng cung các mặt hàng thời trang chính hãng với
              hơn 3 năm kinh nghiệm trong lĩnh vực bán buôn , phân phối và bán
              lẻ
            </p>
            <p>
              Trong hơn 2 năm 2019-2021 chúng tôi hãnh diện là nhà phân phối ,
              bán lẻ hàng chính hãng có tiếng ở VN , đã cung cấp rất nhiều sản
              phẩm cho người nổi tiếng , các cửa hàng có tiếng và mang đến quý
              khách hàng sản phẩm chính hãng , hơn thế nữa cung cấp chế độ đổi
              theo giúp cho quý khách yên tâm sử dụng sản phẩm.
            </p>
            <p className="info">Địa chỉ: 442 Đội Cấn - Ba Đình - Hà Nội</p>
            <p className="info">
              Email: <span>support@sapo.vn</span>
            </p>
            <p className="info">
              Số điện thoại: <span>1800 6750</span>
            </p>
          </div>
          <form className="contact_form">
            <input type="text" required placeholder="Họ tên *" />
            <input type="email" required placeholder="Email *" />
            <textarea required placeholder="Lời nhắn *"></textarea>
            <p>* Thông tin bắt buộc</p>
            <button type="submit">Gửi</button>
          </form>
        </div>
        <img src={map} alt="" />
      </section>
    </>
  );
};

export default Contact;
