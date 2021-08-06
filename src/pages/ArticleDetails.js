import React from "react";
import BreadCrumb from "../layouts/BreadCrumb";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import article1 from "../static/images/home/articles-1.jpg";
import article2 from "../static/images/home/articles-2.jpg";
import article3 from "../static/images/home/articles-3.jpeg";
import article4 from "../static/images/home/articles-4.jpg";

const ArticleDetails = () => {
  return (
    <>
      <BreadCrumb
        node1={"Tin tức"}
        type2
        urlNode1={"/articles"}
        node2={
          "Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn"
        }
      />
      <section className="article_details_page container">
        <Row gutter={[48, 32]}>
          <Col xl={16} lg={16} md={24} xs={24} className="details">
            <p className="title_article_details">
              Thời trang phim Vincenzo: Bản giao hưởng phong cách của Ý và Hàn
            </p>
            <div className="descriptions">
              <p>
                Bỏ qua những ý kiến trái chiều về phần nội dung thì yếu tố phục
                trang trong phim Vincenzo là một điểm sáng với những bộ cánh
                được tổng hoà từ những nét ăn mặc đặc trưng của Hàn Quốc và
                Italy – hai “thế lực” trong ngành thời trang thế giới.
              </p>
              <p>
                Series phim Vincenzo ra mắt vào đầu năm 2021 trên đài tvN Hàn
                Quốc và nhanh chóng được Netflix mua lại bản quyền phát sóng.
                Cốt truyện của phim xoay quanh Vincenzo Cassano (Song Joong-ki)
                – một luật sư kiêm cố vấn chiến lược (consigliere) của một gia
                tộc mafia cộm cán tại Ý. Tuy nhiên, những biến cố ập đến khi ông
                trùm Cassano qua đời đã khiến Vincenzo quyết định từ bỏ Italy để
                trở về Hàn Quốc, để rồi từ đây anh đã vô tình bị cuốn vào một
                cuộc chiến quyền lực ngầm khác của những tập đoàn chính trị tại
                quê nhà.
              </p>
            </div>
            <div className="related_articles">
              <p>Bài viết liên quan:</p>
              <ul>
                <li>
                  <Link to="/articles">
                    Thời trang sao nam mặc đẹp tuần 4 tháng 4/2021
                  </Link>
                </li>
                <li>
                  <Link to="/articles">
                    Ngắm nhìn thời trang thảm đỏ ấn tượng tại Oscar 2021
                  </Link>
                </li>
                <li>
                  <Link to="/articles">
                    Gợi ý tips phối đồ cho người mạng Hỏa
                  </Link>
                </li>
                <li>
                  <Link to="/articles">
                    Thời trang sao nam mặc đẹp tuần đầu tháng 5/2021
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xl={8} lg={8} md={24} xs={24}>
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

export default ArticleDetails;
