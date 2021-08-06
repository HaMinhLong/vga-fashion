import React from "react";
import BreadCrumb from "../layouts/BreadCrumb";
import { Row, Col } from "antd";
import mapShop from "../static/images/contact/map-shop.png";

const ShopSystem = () => {
  return (
    <>
      <BreadCrumb node1={"Hệ thống cửa hàng"} />
      <section className="shop_system_page container">
        <h1 className="page_title">Hệ thống cửa hàng</h1>
        <p>
          MEWFASHION cửa hàng cung các mặt hàng thời trang chính hãng với hơn 3
          năm kinh nghiệm trong lĩnh vực bán buôn , phân phối và bán lẻ
        </p>
        <p>
          Trong hơn 2 năm 2019-2021 chúng tôi hãnh diện là nhà phân phối , bán
          lẻ hàng chính hãng có tiếng ở VN , đã cung cấp rất nhiều sản phẩm cho
          người nổi tiếng , các cửa hàng có tiếng và mang đến quý khách hàng sản
          phẩm chính hãng , hơn thế nữa cung cấp chế độ đổi theo giúp cho quý
          khách yên tâm sử dụng sản phẩm.
        </p>
        <Row gutter={[32, 32]} className="shop_list">
          <Col xs={24} md={24} lg={8} xl={8} className="list_box">
            <p>Chọn cửa hàng</p>
            <div className="list">
              <div className="shop">
                <p className="name">Mew ShowRoom Long Biên</p>
                <p>Mail: mew_longbien@mew.vn</p>
                <p>Hotline: 937 079 668</p>
                <p>Số 34 Ngõ 2 Ngọc Thụy, Ngọc Thụy - Long Biên</p>
              </div>
              <div className="shop active">
                <p className="name">Mew ShowRoom Long Biên</p>
                <p>Mail: mew_longbien@mew.vn</p>
                <p>Hotline: 937 079 668</p>
                <p>Số 34 Ngõ 2 Ngọc Thụy, Ngọc Thụy - Long Biên</p>
              </div>
              <div className="shop">
                <p className="name">Mew ShowRoom Long Biên</p>
                <p>Mail: mew_longbien@mew.vn</p>
                <p>Hotline: 937 079 668</p>
                <p>Số 34 Ngõ 2 Ngọc Thụy, Ngọc Thụy - Long Biên</p>
              </div>
              <div className="shop">
                <p className="name">Mew ShowRoom Long Biên</p>
                <p>Mail: mew_longbien@mew.vn</p>
                <p>Hotline: 937 079 668</p>
                <p>Số 34 Ngõ 2 Ngọc Thụy, Ngọc Thụy - Long Biên</p>
              </div>
              <div className="shop">
                <p className="name">Mew ShowRoom Long Biên</p>
                <p>Mail: mew_longbien@mew.vn</p>
                <p>Hotline: 937 079 668</p>
                <p>Số 34 Ngõ 2 Ngọc Thụy, Ngọc Thụy - Long Biên</p>
              </div>
            </div>
          </Col>
          <Col xs={24} md={24} lg={16} xl={16} className="map">
            <img src={mapShop} alt="" />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ShopSystem;
