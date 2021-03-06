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
        node1={"S???n ph???m"}
        urlNode1={"/products"}
        node2={"??o thun M-F 08"}
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
              <p className="product_name">??O THUN T-SHIRT M-F 08</p>
              <p className="available">C??n h??ng</p>
              <p className="brand">
                Th????ng hi???u:
                <span>Mew Fashion</span>
              </p>
              <p className="type">
                Lo???i: <span>??o thun</span>
              </p>
              <div className="size">
                <p>K??ch th?????c: </p>
                <ul>
                  <li className="active">
                    <p>
                      M<span>???</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      L<span>???</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      XL<span>???</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="color">
                <p>M??u s???c: </p>
                <ul>
                  <li>
                    <p>?????</p>
                  </li>
                  <li>
                    <p>Xanh</p>
                  </li>
                  <li className="active">
                    <p>V??ng</p>
                  </li>
                  <li>
                    <p>H???ng</p>
                  </li>
                </ul>
              </div>
              <p className="price">
                Gi??: 249.000?? <del>279.000??</del>
              </p>
              <button className="btn buy">
                <div className="bg"></div>
                <Cart />
                <span>Mua h??ng</span>
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
                + B???n bi???t ch???n size chu???n c???a m??nh ch??a?
              </p>
              <Space direction="vertical" style={{ width: "100%" }}>
                <Collapse
                  defaultActiveKey={["1"]}
                  expandIconPosition="right"
                  className="collapseInfo"
                >
                  <Panel header="Th??ng tin chi ti???t" key="1">
                    <p>
                      <span>Ch???t li???u: </span>
                      92% TC, 8% Spandex
                    </p>
                    <p>
                      <span>Ki???u d??ng: </span>
                      Form slimfit ??m v???a ng?????i, t??n d??ng
                    </p>
                    <p>
                      <span>Thi???t k???: </span>
                      C??? tr??n basic d??? ph???i ?????
                    </p>
                    <p>
                      <span>??u ??i???m: </span>
                      Th???m h??t m??? h??i t???t, b??? m???t m???n, th??n thi???n v???i da
                    </p>
                  </Panel>
                </Collapse>
                <Collapse expandIconPosition="right" className="collapseInfo">
                  <Panel header="Ch???t li???u" key="2">
                    <p>
                      Th??nh ph???n TC l?? s??? k???t h???p c???a 2 ch???t li???u Cotton v??
                      Polyester mang ?????n c???m gi??c m???m m???i ngay l???n ?????u ch???m, cho
                      b???n c???m gi??c tho???i m??i v?? d???u ??m tr??n l??n da khi m???c. Th???m
                      h??t m??? h??i t???t v?? l??m m??t c?? th???. Gi??? cho s???n ph???m kh??ng
                      b??? phai m??u theo th???i gian. H???n ch??? h???p th??? ch???t b???n v?? d???
                      l??m s???ch s???n ph???m{" "}
                    </p>
                    <p>
                      Ch???ng nh??n nh??u, ti???t ki???m th???i gian l?? ???i m???i khi s??? d???ng{" "}
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
              <p className="main_title">s???n ph???m li??n quan</p>
            </div>
          </div>
          <div className="list">
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi ti???t</div>
                <img src={somi1} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/products">S?? mi ng???n tay M-F 08 </Link>
                <p className="price">
                  199.000??? <del>250.000???</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi ti???t</div>
                <img src={somi2} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/products">S?? mi ng???n tay M-F 08 </Link>
                <p className="price">
                  199.000??? <del>250.000???</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi ti???t</div>
                <img src={somi3} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/products">S?? mi ng???n tay M-F 08 </Link>
                <p className="price">
                  199.000??? <del>250.000???</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi ti???t</div>
                <img src={somi2} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/products">S?? mi ng???n tay M-F 08 </Link>
                <p className="price">
                  199.000??? <del>250.000???</del>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        title="H?????NG D???N CH???N SIZE"
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
