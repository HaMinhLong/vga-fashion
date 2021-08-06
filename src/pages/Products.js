import React, { useState } from "react";
import BreadCrumb from "../layouts/BreadCrumb";
import { Link } from "react-router-dom";
import { Row, Col, Radio, Space, Pagination } from "antd";
import article1 from "../static/images/home/articles-1.jpg";
import article2 from "../static/images/home/articles-2.jpg";
import article3 from "../static/images/home/articles-3.jpeg";
import article4 from "../static/images/home/articles-4.jpg";
import shirt11 from "../static/images/home/shirt-1-1.jpg";
import shirt12 from "../static/images/home/shirt-1-2.jpg";
import shirt21 from "../static/images/home/shirt-2-1.jpg";
import shirt22 from "../static/images/home/shirt-2-2.jpg";
import shirt31 from "../static/images/home/shirt-3-1.jpg";
import shirt32 from "../static/images/home/shirt-3-2.jpg";

const Products = () => {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [sort, setSort] = useState("");
  return (
    <>
      <BreadCrumb node1={"Sản phẩm"} />
      <section className="products_page container">
        <h1 className="page_title type_2">Sản phẩm</h1>
        <p>
          Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần sẽ
          được cập nhật liên tục tại đây. Chắc chắn bạn sẽ tìm thấy những sản
          phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách của mình.
        </p>
        <div className="categories_box">
          <div className="category">
            <p>Áo thun</p>
          </div>
          <div className="category">
            <p>Quần short</p>
          </div>
          <div className="category">
            <p>Sơ mi dài tay</p>
          </div>
          <div className="category">
            <p>Sơ mi ngắn tay</p>
          </div>
          <div className="category">
            <p>Quần dài</p>
          </div>
        </div>
        <div className="main_section">
          <div className="left_side">
            <div className="filter_box">
              <div className="brand">
                <p className="main_title">Thương hiệu</p>
                <Radio.Group
                  onChange={(e) => setBrand(e.target.value)}
                  value={brand}
                  className="filterRadio"
                >
                  <Space direction="vertical">
                    <Radio value={1}>VGA Fashion</Radio>
                  </Space>
                </Radio.Group>
              </div>

              <div className="price">
                <p className="main_title">Lọc giá</p>
                <Radio.Group
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  className="price_filter filterRadio"
                >
                  <Space direction="vertical">
                    <Radio value={1}>Giá dưới 100.000đ</Radio>
                    <Radio value={2}>100.000đ - 200.000đ</Radio>
                    <Radio value={3}>200.000đ - 500.000đ</Radio>
                    <Radio value={4}>500.000đ - 1.000.000đ</Radio>
                    <Radio value={5}>1.000.000đ - 2.000.000đ</Radio>
                    <Radio value={6}>Giá trên 2.000.000đ</Radio>
                  </Space>
                </Radio.Group>
              </div>
              <div className="type">
                <p className="main_title">Thể loại</p>
                <Radio.Group
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                  className="filterRadio"
                >
                  <Space direction="vertical">
                    <Radio value={1}>Áo thun</Radio>
                    <Radio value={2}>Quần sort</Radio>
                    <Radio value={3}>Sơ mi</Radio>
                  </Space>
                </Radio.Group>
              </div>
            </div>

            <div className="articles_box">
              <div className="main_title">BÀI VIẾT NỐI BẬT</div>
              <div className="article">
                <div className="image_box">
                  <img src={article4} alt="" />
                </div>
                <div className="content">
                  <div className="article_title">
                    Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và
                    Hàn
                  </div>
                  <p className="date">Ngày đăng: 05/05/2021</p>
                </div>
              </div>
              <div className="article">
                <div className="image_box">
                  <img src={article1} alt="" />
                </div>
                <div className="content">
                  <div className="article_title">
                    Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và
                    Hàn
                  </div>
                  <p className="date">Ngày đăng: 05/05/2021</p>
                </div>
              </div>
              <div className="article">
                <div className="image_box">
                  <img src={article3} alt="" />
                </div>
                <div className="content">
                  <div className="article_title">
                    Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và
                    Hàn
                  </div>
                  <p className="date">Ngày đăng: 05/05/2021</p>
                </div>
              </div>
              <div className="article">
                <div className="image_box">
                  <img src={article2} alt="" />
                </div>
                <div className="content">
                  <div className="article_title">
                    Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và
                    Hàn
                  </div>
                  <p className="date">Ngày đăng: 05/05/2021</p>
                </div>
              </div>
              <div className="article">
                <div className="image_box">
                  <img src={article3} alt="" />
                </div>
                <div className="content">
                  <div className="article_title">
                    Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và
                    Hàn
                  </div>
                  <p className="date">Ngày đăng: 05/05/2021</p>
                </div>
              </div>
              <Link to="/articles">Xem thêm</Link>
            </div>
          </div>

          <div className="right_side">
            <div className="sort">
              <p className="main_title">Sắp xếp: </p>
              <Radio.Group
                onChange={(e) => setSort(e.target.value)}
                value={sort}
              >
                <Radio value={1}>A ➞ Z</Radio>
                <Radio value={2}>Z ➞ A</Radio>
                <Radio value={3}>Giá tăng dần</Radio>
                <Radio value={4}>Giá giảm dần</Radio>
                <Radio value={5}>Hàng mới nhất</Radio>
                <Radio value={6}>Hàng cũ nhất</Radio>
              </Radio.Group>
            </div>
            <Row gutter={[32, 5]} className="products">
              <Col xs={24} md={6}>
                <div className="product">
                  <Link to="/product-details" className="image_box">
                    <div className="ct">Chi tiết</div>
                    <img src={shirt12} alt="" />
                    <img src={shirt11} alt="" />
                  </Link>
                  <div className="sale_box">
                    <p>-10%</p>
                  </div>
                  <div className="content">
                    <Link to="/product-details">Áo thun M-F 08 </Link>
                    <p className="price">
                      199.000₫ <del>250.000₫</del>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={6}>
                <div className="product">
                  <div className="image_box">
                    <div className="ct">Chi tiết</div>
                    <img src={shirt21} alt="" />
                    <img src={shirt22} alt="" />
                  </div>
                  <div className="sale_box">
                    <p>-10%</p>
                  </div>
                  <div className="content">
                    <Link to="/product-details">Áo thun M-F 08 </Link>
                    <p className="price">
                      199.000₫ <del>250.000₫</del>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={6}>
                <div className="product">
                  <div className="image_box">
                    <div className="ct">Chi tiết</div>
                    <img src={shirt21} alt="" />
                    <img src={shirt22} alt="" />
                  </div>
                  <div className="sale_box">
                    <p>-10%</p>
                  </div>
                  <div className="content">
                    <Link to="/product-details">Áo thun M-F 08 </Link>
                    <p className="price">
                      199.000₫ <del>250.000₫</del>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={6}>
                <div className="product">
                  <div className="image_box">
                    <div className="ct">Chi tiết</div>
                    <img src={shirt31} alt="" />
                    <img src={shirt32} alt="" />
                  </div>
                  <div className="sale_box">
                    <p>-10%</p>
                  </div>
                  <div className="content">
                    <Link to="/product-details">Áo thun M-F 08 </Link>
                    <p className="price">
                      199.000₫ <del>250.000₫</del>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={6}>
                <div className="product">
                  <div className="image_box">
                    <div className="ct">Chi tiết</div>
                    <img src={shirt22} alt="" />
                    <img src={shirt21} alt="" />
                  </div>
                  <div className="sale_box">
                    <p>-10%</p>
                  </div>
                  <div className="content">
                    <Link to="/product-details">Áo thun M-F 08 </Link>
                    <p className="price">
                      199.000₫ <del>250.000₫</del>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={6}>
                <div className="product">
                  <div className="image_box">
                    <div className="ct">Chi tiết</div>
                    <img src={shirt21} alt="" />
                    <img src={shirt22} alt="" />
                  </div>
                  <div className="sale_box">
                    <p>-10%</p>
                  </div>
                  <div className="content">
                    <Link to="/product-details">Áo thun M-F 08 </Link>
                    <p className="price">
                      199.000₫ <del>250.000₫</del>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={6}>
                <div className="product">
                  <div className="image_box">
                    <div className="ct">Chi tiết</div>
                    <img src={shirt31} alt="" />
                    <img src={shirt32} alt="" />
                  </div>
                  <div className="sale_box">
                    <p>-10%</p>
                  </div>
                  <div className="content">
                    <Link to="/product-details">Áo thun M-F 08 </Link>
                    <p className="price">
                      199.000₫ <del>250.000₫</del>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={6}>
                <div className="product">
                  <div className="image_box">
                    <div className="ct">Chi tiết</div>
                    <img src={shirt22} alt="" />
                    <img src={shirt21} alt="" />
                  </div>
                  <div className="sale_box">
                    <p>-10%</p>
                  </div>
                  <div className="content">
                    <Link to="/product-details">Áo thun M-F 08 </Link>
                    <p className="price">
                      199.000₫ <del>250.000₫</del>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={6}>
                <div className="product">
                  <div className="image_box">
                    <div className="ct">Chi tiết</div>
                    <img src={shirt11} alt="" />
                    <img src={shirt12} alt="" />
                  </div>
                  <div className="sale_box">
                    <p>-10%</p>
                  </div>
                  <div className="content">
                    <Link to="/product-details">Áo thun M-F 08 </Link>
                    <p className="price">
                      199.000₫ <del>250.000₫</del>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={6}>
                <div className="product">
                  <div className="image_box">
                    <div className="ct">Chi tiết</div>
                    <img src={shirt32} alt="" />
                    <img src={shirt31} alt="" />
                  </div>
                  <div className="sale_box">
                    <p>-10%</p>
                  </div>
                  <div className="content">
                    <Link to="/product-details">Áo thun M-F 08 </Link>
                    <p className="price">
                      199.000₫ <del>250.000₫</del>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={6}>
                <div className="product">
                  <div className="image_box">
                    <div className="ct">Chi tiết</div>
                    <img src={shirt11} alt="" />
                    <img src={shirt12} alt="" />
                  </div>
                  <div className="sale_box">
                    <p>-10%</p>
                  </div>
                  <div className="content">
                    <Link to="/product-details">Áo thun M-F 08 </Link>
                    <p className="price">
                      199.000₫ <del>250.000₫</del>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={6}>
                <div className="product">
                  <div className="image_box">
                    <div className="ct">Chi tiết</div>
                    <img src={shirt31} alt="" />
                    <img src={shirt32} alt="" />
                  </div>
                  <div className="sale_box">
                    <p>-10%</p>
                  </div>
                  <div className="content">
                    <Link to="/product-details">Áo thun M-F 08 </Link>
                    <p className="price">
                      199.000₫ <del>250.000₫</del>
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={24} lg={24} md={24} xs={24}>
                <Pagination
                  defaultCurrent={1}
                  size="default"
                  total={20}
                  className="paginationPage"
                  style={{ marginTop: "30px" }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
