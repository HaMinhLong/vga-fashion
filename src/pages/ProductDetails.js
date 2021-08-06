import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Modal, Collapse, Space } from "antd";
import BreadCrumb from "../layouts/BreadCrumb";
import somi1 from "../static/images/home/somi-1.jpg";
import somi2 from "../static/images/home/somi-2.jpg";
import somi3 from "../static/images/home/somi-3.jpg";
import product1 from "../static/images/product_details/product-1.jpg";
import product2 from "../static/images/product_details/product-2.jpg";
import product3 from "../static/images/product_details/product-3.jpg";
import product4 from "../static/images/product_details/product-4.jpg";
import product5 from "../static/images/product_details/product-5.jpg";
import product6 from "../static/images/product_details/product-6.jpg";
import product7 from "../static/images/product_details/product-7.jpg";
import product8 from "../static/images/product_details/product-8.jpg";
import product9 from "../static/images/product_details/product-9.jpg";
import { ReactComponent as Grid } from "../static/images/product_details/grid.svg";
import { ReactComponent as Search } from "../static/images/product_details/search.svg";
import { ReactComponent as Close } from "../static/images/product_details/close.svg";
import { ReactComponent as Cart } from "../static/images/home/cart.svg";
import sizeOption from "../static/images/product_details/size_option.png";
import right from "../static/images/product_details/right.svg";
import left from "../static/images/product_details/left.svg";

const SIZE_IMAGE = 6;
const { Panel } = Collapse;

const ProductDetails = () => {
  const [numberImages, setNumberImages] = useState(SIZE_IMAGE);
  const [showAllImages, setShowAllImages] = useState(false);
  const [toggleListImage, setToggleListImage] = useState(true);
  const [indexImage, setIndexImage] = useState(0);
  const [imageScale, setImageScale] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [showSize, setShowSize] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
  ];
  const changeItem = (e) => {
    const check = e.target.value;
    if ((check <= 999 && check >= 1) || check === "") {
      setQuantity(e.target.value ? Number(e.target.value) : e.target.value);
    }
  };
  const increaseItem = () => {
    if (quantity < 999) setQuantity((quantity || 1) + 1);
  };

  const decreaseItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <BreadCrumb
        node1={"Sản phẩm"}
        urlNode1={"/products"}
        node2={"Áo thun M-F 08"}
      />
      <section className="product_details container">
        <style>
          {`body{
            overflow: ${showAllImages ? "hidden" : "auto"};
          }`}
        </style>
        <div className="details">
          <Row gutter={[32, 32]} className="image_box">
            <Col xs={24} lg={14} xl={16}>
              <Row gutter={[32, 32]}>
                {images &&
                  images.length > 0 &&
                  images.map(
                    (image, index) =>
                      index < numberImages && (
                        <Col
                          xs={24}
                          md={12}
                          key={image}
                          className="product_image"
                        >
                          <img
                            src={image}
                            alt=""
                            onClick={() => {
                              setIndexImage(index);
                              setShowAllImages(true);
                            }}
                          />
                          {index === numberImages - 1 && (
                            <div
                              className="more_images"
                              onClick={() =>
                                setNumberImages(numberImages + SIZE_IMAGE)
                              }
                            >
                              <p>+{images.length - numberImages}</p>
                            </div>
                          )}
                        </Col>
                      )
                  )}
              </Row>
            </Col>
            <Col xs={24} lg={10} xl={8}>
              <p className="product_name">ÁO THUN T-SHIRT M-F 08</p>
              <p className="available">Còn hàng</p>
              <p className="brand">
                Thương hiệu:
                <span>Mew Fashion</span>
              </p>
              <p className="type">
                Loại: <span>Áo thun</span>
              </p>
              <div className="size">
                <p>Kích thước: </p>
                <ul>
                  <li className="active">
                    <p>
                      M<span>✓</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      L<span>✓</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      XL<span>✓</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="color">
                <p>Màu sắc: </p>
                <ul>
                  <li>
                    <p>Đỏ</p>
                  </li>
                  <li>
                    <p>Xanh</p>
                  </li>
                  <li className="active">
                    <p>Vàng</p>
                  </li>
                  <li>
                    <p>Hồng</p>
                  </li>
                </ul>
              </div>
              <p className="price">
                Giá: 249.000đ <del>279.000đ</del>
              </p>
              <button className="btn buy">
                <div className="bg"></div>
                <Cart />
                <span>Mua hàng</span>
                <div className="amount">
                  <div className="tru" onClick={() => decreaseItem()}>
                    -
                  </div>
                  <input
                    type="text"
                    maxLength={3}
                    value={quantity !== 0 ? quantity : 1}
                    onChange={(e) => changeItem(e)}
                  />
                  <div className="cong" onClick={() => increaseItem()}>
                    +
                  </div>
                </div>
              </button>
              <p
                className="show_size available"
                onClick={() => setShowSize(true)}
              >
                + Bạn biết chọn size chuẩn của mình chưa?
              </p>
              <Space direction="vertical" style={{ width: "100%" }}>
                <Collapse
                  defaultActiveKey={["1"]}
                  expandIconPosition="right"
                  className="collapseInfo"
                >
                  <Panel header="Thông tin chi tiết" key="1">
                    <p>
                      <span>Chất liệu: </span>
                      92% TC, 8% Spandex
                    </p>
                    <p>
                      <span>Kiểu dáng: </span>
                      Form slimfit ôm vừa người, tôn dáng
                    </p>
                    <p>
                      <span>Thiết kế: </span>
                      Cổ tròn basic dễ phối đồ
                    </p>
                    <p>
                      <span>Ưu điểm: </span>
                      Thấm hút mồ hôi tốt, bề mặt mịn, thân thiện với da
                    </p>
                  </Panel>
                </Collapse>
                <Collapse expandIconPosition="right" className="collapseInfo">
                  <Panel header="Chất liệu" key="2">
                    <p>
                      Thành phần TC là sự kết hợp của 2 chất liệu Cotton và
                      Polyester mang đến cảm giác mềm mại ngay lần đầu chạm, cho
                      bạn cảm giác thoải mái và dịu êm trên làn da khi mặc. Thấm
                      hút mồ hôi tốt và làm mát cơ thể. Giữ cho sản phẩm không
                      bị phai màu theo thời gian. Hạn chế hấp thụ chất bẩn và dễ
                      làm sạch sản phẩm{" "}
                    </p>
                    <p>
                      Chống nhăn nhàu, tiết kiệm thời gian là ủi mỗi khi sử dụng{" "}
                    </p>
                  </Panel>
                </Collapse>
              </Space>
            </Col>
          </Row>
        </div>

        <div className={showAllImages ? "show_all active" : "show_all"}>
          <div
            className={toggleListImage ? "image_slider" : "image_slider active"}
          >
            <div className="icon_group">
              <Search
                className="icon search"
                onClick={() => setImageScale(imageScale + 0.2)}
              />
              <Grid
                className="icon grid"
                onClick={() => setToggleListImage(!toggleListImage)}
              />
              <Close
                className="icon close"
                onClick={() => {
                  setImageScale(1);
                  setShowAllImages(false);
                }}
              />
            </div>
            <div
              className="to_left"
              onClick={() => {
                setImageScale(indexImage === 0 ? imageScale : 1);
                setIndexImage(indexImage === 0 ? indexImage : indexImage - 1);
              }}
            >
              <img src={left} alt="" />
            </div>
            <div
              className="to_right"
              onClick={() => {
                setImageScale(
                  indexImage === images.length - 1 ? imageScale : 1
                );
                setIndexImage(
                  indexImage === images.length - 1 ? indexImage : indexImage + 1
                );
              }}
            >
              <img src={right} alt="" />
            </div>
            <div className="image_view">
              <div className="box">
                <img
                  src={images[indexImage]}
                  alt=""
                  style={{
                    transform: `scale(${showAllImages ? imageScale : 0})`,
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className={toggleListImage ? "list_images active" : "list_images"}
          >
            <Row gutter={[4, 4]}>
              {images &&
                images.length > 0 &&
                images.map((image, index) => (
                  <Col
                    xs={24}
                    md={24}
                    lg={12}
                    key={image}
                    onClick={() => {
                      setImageScale(1);
                      setIndexImage(index);
                    }}
                  >
                    <img
                      src={image}
                      alt=""
                      className={index === indexImage ? "active" : ""}
                    />
                  </Col>
                ))}
            </Row>
          </div>
        </div>

        <div className="related_products">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">sản phẩm liên quan</p>
            </div>
          </div>
          <div className="list">
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={somi1} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/products">Sơ mi ngắn tay M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={somi2} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/products">Sơ mi ngắn tay M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={somi3} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/products">Sơ mi ngắn tay M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={somi2} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/products">Sơ mi ngắn tay M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        title="HƯỚNG DẪN CHỌN SIZE"
        width={window.innerWidth <= 1024 ? "80%" : "40%"}
        visible={showSize}
        onCancel={() => setShowSize(false)}
        footer={false}
        className="show_size_option"
        style={{ top: "20px", textAlign: "center", fontWeight: "700" }}
      >
        <img src={sizeOption} alt="" />
      </Modal>
    </>
  );
};

export default ProductDetails;
