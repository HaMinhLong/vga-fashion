import React from "react";
import BreadCrumb from "../layouts/BreadCrumb";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import article1 from "../static/images/home/articles-1.jpg";
import article2 from "../static/images/home/articles-2.jpg";
import article3 from "../static/images/home/articles-3.jpeg";
import article4 from "../static/images/home/articles-4.jpg";
import { Pagination } from "antd";
const Articles = () => {
  return (
    <>
      <BreadCrumb node1={"Tin tức"} />
      <section className="articles_page container">
        <Row gutter={[32, 32]}>
          <Col xl={16} lg={16} md={12} xs={12} className="articles_container">
            <Row gutter={[32, 32]}>
              <Col xl={24} lg={24} md={24} xs={24}>
                <div className="article first">
                  <div className="image_box">
                    <img src={article1} alt="" />
                    <div className="overlay"></div>
                  </div>

                  <div className="content">
                    <Link to="/article-details" className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </Link>
                    <p className="date">05/05/2021</p>
                    <p className="article_short_description">
                      Bỏ qua những ý kiến trái chiều về phần nội dung thì yếu tố
                      phục trang trong phim Vincenzo là một điểm sáng với những
                      bộ cánh được tổng hoà từ
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={12} lg={12} md={24} xs={24}>
                <div className="article">
                  <div className="image_box">
                    <img src={article2} alt="" />
                    <div className="overlay"></div>
                  </div>
                  <div className="content">
                    <Link to="/article-details" className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </Link>
                    <p className="date">05/05/2021</p>
                    <p className="article_short_description">
                      Bỏ qua những ý kiến trái chiều về phần nội dung thì yếu tố
                      phục trang trong phim Vincenzo là một điểm sáng với những
                      bộ cánh được tổng hoà từ
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={12} lg={12} md={24} xs={24}>
                <div className="article">
                  <div className="image_box">
                    <img src={article3} alt="" />
                    <div className="overlay"></div>
                  </div>

                  <div className="content">
                    <Link to="/article-details" className="article_title">
                      Ngắm nhìn thời trang thảm đỏ ấn tượng tại Oscar 2021
                    </Link>
                    <p className="date">05/05/2021</p>
                    <p className="article_short_description">
                      Những ngôi sao hàng đầu thế giới đã diện trang phục như
                      thế nào khi tham gia lễ trao giải Oscar năm 2021? Hãy cùng
                      Mew Fashion điểm qua
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
                />
              </Col>
            </Row>
          </Col>
          <Col xl={8} lg={8} md={12} xs={12}>
            <div className="part_one">
              <p className="articles_page_title">Tin tức {"&"} sự kiện</p>
              <div className="divider"></div>
              <div className="articles_box">
                <div className="article one">
                  <div className="image_box"></div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
                <div className="article two">
                  <div className="image_box"></div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
                <div className="article three">
                  <div className="image_box"></div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
                <div className="article four">
                  <div className="image_box"></div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
                <div className="article five">
                  <div className="image_box"></div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
              </div>
              <Link to="/">Xem thêm</Link>
            </div>
            <div className="part_two">
              <p className="articles_page_title">Bài viết nổi bật</p>
              <div className="divider"></div>
              <div className="articles_box">
                <div className="article">
                  <div className="image_box">
                    <img src={article4} alt="" />
                  </div>
                  <div className="content">
                    <div className="article_title">
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
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
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
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
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
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
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
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
                      Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý
                      và Hàn
                    </div>
                    <p className="date">Ngày đăng: 05/05/2021</p>
                  </div>
                </div>
              </div>
              <Link to="/">Xem thêm</Link>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Articles;
