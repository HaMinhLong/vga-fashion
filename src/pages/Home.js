import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import bannerHome from "../static/images/home/banner-home.png";
import bgProductOne from "../static/images/home/bg-product-1.jpg";
import bgProductTwo from "../static/images/home/bg-product-2.jpg";
import bgProductThree from "../static/images/home/bg-product-3.jpg";
import bgProductFour from "../static/images/home/bg-product-4.jpg";
import brand1 from "../static/images/home/brand1.png";
import brand2 from "../static/images/home/brand2.png";
import brand3 from "../static/images/home/brand3.png";
import brand4 from "../static/images/home/brand4.png";
import brand5 from "../static/images/home/brand5.png";
import brand6 from "../static/images/home/brand6.png";
import brand7 from "../static/images/home/brand7.png";
import article1 from "../static/images/home/articles-1.jpg";
import article2 from "../static/images/home/articles-2.jpg";
import article3 from "../static/images/home/articles-3.jpeg";
import article4 from "../static/images/home/articles-4.jpg";
import somi1 from "../static/images/home/somi-1.jpg";
import somi2 from "../static/images/home/somi-2.jpg";
import somi3 from "../static/images/home/somi-3.jpg";
import sort1 from "../static/images/home/sort-1.jpg";
import sort2 from "../static/images/home/sort-2.jpg";
import sort3 from "../static/images/home/sort-3.jpg";
import shirt11 from "../static/images/home/shirt-1-1.jpg";
import shirt12 from "../static/images/home/shirt-1-2.jpg";
import shirt21 from "../static/images/home/shirt-2-1.jpg";
import shirt22 from "../static/images/home/shirt-2-2.jpg";
import shirt31 from "../static/images/home/shirt-3-1.jpg";
import shirt32 from "../static/images/home/shirt-3-2.jpg";
import hotSale from "../static/images/home/hot-sale.png";
import { ReactComponent as Time } from "../static/images/home/time.svg";

const Home = () => {
  const [date, setDate] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const date = moment().format("L");
    const day = date.split("/")[1];
    const month =
      parseInt(date.split("/")[0]) + 2 > 12
        ? parseInt(date.split("/")[0]) + 2 - 12
        : parseInt(date.split("/")[0]) + 2;
    const year =
      parseInt(date.split("/")[0]) + 2 > 12
        ? parseInt(date.split("/")[2]) + 1
        : date.split("/")[2];
    CountDownTimer(`${month}/${day}/${year}`, "count_down");
  }, []);

  const CountDownTimer = (dt, id) => {
    var end = new Date(dt);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    const showRemaining = () => {
      var now = new Date();
      var distance = end - now;
      if (distance < 0) {
        clearInterval(timer);
        document.getElementById(id).innerHTML = "ĐÃ HẾT THỜI GIAN SALE!";

        return;
      }
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      setDate(days);
      setHour(hours);
      setMinute(minutes);
      setSecond(seconds);
    };

    timer = setInterval(showRemaining, 1000);
  };
  return (
    <>
      <section className="banner_home">
        <img src={bannerHome} alt="" />
      </section>
      <section className="products_home">
        <div className="products_list">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">flash sale</p>
            </div>
          </div>
          <div id="count_down">
            <Time />
            <p>Thời gian: </p>
            <p id="date">{date} NGÀY</p>
            <p id="hour">{hour}</p>
            <p id="minute">{minute}</p>
            <p id="second">{second}</p>
          </div>
          <p style={{ marginBottom: "5px" }}>
            Hàng loạt bản mẫu. Hàng loạt cải tiến. Hàng loạt thử nghiệm.
          </p>
          <div className="list">
            <div className="product">
              <Link to="/product-details" className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={shirt11} alt="" />
                <img src={shirt12} alt="" />
              </Link>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">Áo thun M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
                <div className="status">
                  <img src={hotSale} alt="" />
                  <p>Sắp cháy hàng</p>
                  <div className="bg"></div>
                </div>
              </div>
            </div>
            <div className="product">
              <Link to="/product-details" className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={shirt21} alt="" />
                <img src={shirt22} alt="" />
              </Link>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">Áo thun M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
                <div className="status active">
                  <p>còn hàng</p>
                </div>
              </div>
            </div>
            <div className="product">
              <Link to="/product-details" className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={shirt31} alt="" />
                <img src={shirt32} alt="" />
              </Link>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">Áo thun M-F 08 </Link>
                <p className="price">199.000₫</p>
                <div className="status">
                  <img src={hotSale} alt="" />
                  <p>Sắp cháy hàng</p>
                  <div className="bg"></div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/">Xem thêm</Link>
        </div>
        <div
          className="bg_home"
          style={{ backgroundImage: `url(${bgProductOne})` }}
        >
          <div className="introduce">
            <p className="title_type_1">Sự kiện trong tuần</p>
            <p className="title_type_2">flash sale</p>
            <p className="short_description">
              Chỉ Áp dụng khi Đặt hàng qua Website
            </p>
            <Link to="/" className="btn btn_more">
              Xem thêm
            </Link>
          </div>
        </div>
      </section>

      <section className="products_home active">
        <div className="products_list">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">áo thun t-shirt</p>
            </div>
          </div>
          <div className="list">
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
                <Link to="/">Áo thun M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
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
                <Link to="/">Áo thun M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={shirt31} alt="" />
                <img src={shirt32} alt="" />
              </div>
              <div className="content">
                <Link to="/">Áo thun M-F 08 </Link>
                <p className="price">199.000₫</p>
              </div>
            </div>
          </div>
          <Link to="/">Xem thêm</Link>
        </div>
        <div
          className="bg_home"
          style={{ backgroundImage: `url(${bgProductTwo})` }}
        >
          <div className="introduce">
            <p className="title_type_1">sản phẩm mới</p>
            <p className="title_type_2">t-shirt</p>
            <p className="short_description">
              Nhập mã MEWFASHION giảm 10% với đơn hàng từ 800k
            </p>
            <Link to="/" className="btn btn_more">
              Xem thêm
            </Link>
          </div>
        </div>
      </section>

      <section className="products_home">
        <div className="products_list">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">quần sort</p>
            </div>
          </div>
          <div className="list">
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={sort1} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">Quần sort M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={sort2} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">Quần sor M-F 08 </Link>
                <p className="price">
                  199.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi tiết</div>
                <img src={sort3} alt="" />
              </div>
              <div className="content">
                <Link to="/">Quần sor M-F 08 </Link>
                <p className="price">199.000₫</p>
              </div>
            </div>
          </div>
          <Link to="/">Xem thêm</Link>
        </div>

        <div
          className="bg_home"
          style={{ backgroundImage: `url(${bgProductThree})` }}
        >
          <div className="introduce">
            <p className="title_type_1">SẢN PHẨM HOT</p>
            <p className="title_type_2">QUẦN SHORT</p>
            <p className="short_description">
              Nhập mã MEWFASHION giảm 10% với đơn hàng từ 800k
            </p>
            <Link to="/" className="btn btn_more">
              Xem thêm
            </Link>
          </div>
        </div>
      </section>
      <section className="products_home active">
        <div className="products_list">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">áo sơ mi</p>
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
                <Link to="/product-details">Sơ mi ngắn tay M-F 08 </Link>
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
                <Link to="/product-details">Sơ mi ngắn tay M-F 08 </Link>
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
              <div className="content">
                <Link to="/product-details">Sơ mi ngắn tay M-F 08 </Link>
                <p className="price">199.000₫</p>
              </div>
            </div>
          </div>
          <Link to="/">Xem thêm</Link>
        </div>
        <div
          className="bg_home"
          style={{ backgroundImage: `url(${bgProductFour})` }}
        >
          <div className="introduce">
            <p className="title_type_1">THỜI TRANG</p>
            <p className="title_type_2">ÁO SƠ MI</p>
            <p className="short_description">
              Nhập mã MEWFASHION giảm 10% với đơn hàng từ 800k
            </p>
            <Link to="/" className="btn btn_more">
              Xem thêm
            </Link>
          </div>
        </div>
      </section>

      <section className="articles_home container">
        <div className="header_box">
          <div className="title_box">
            <p className="main_title">tin tức - sự kiện</p>
          </div>
        </div>
        <div className="articles_container">
          <div className="article">
            <div className="image_box">
              <img src={article1} alt="" />
              <div className="overlay"></div>
            </div>
            <div className="date_box">
              <div className="day">05</div>
              <div className="year">05/2021</div>
            </div>

            <div className="content">
              <Link to="/" className="article_title">
                Thời trang phim Vincenzo: Bản giao hưởng
              </Link>
              <p className="article_short_description">
                Bỏ qua những ý kiến trái chiều về phần nội dung thì yếu tố phục
                trang trong phim Vincenzo là một điểm sáng với những bộ cánh
                được tổng hoà từ
              </p>
            </div>
          </div>
          <div className="article">
            <div className="image_box">
              <img src={article2} alt="" />
              <div className="overlay"></div>
            </div>
            <div className="date_box">
              <div className="day">05</div>
              <div className="year">05/2021</div>
            </div>
            <div className="content">
              <Link to="/" className="article_title">
                Thời trang phim Vincenzo: Bản giao hưởng
              </Link>
              <p className="article_short_description">
                Bỏ qua những ý kiến trái chiều về phần nội dung thì yếu tố phục
                trang trong phim Vincenzo là một điểm sáng với những bộ cánh
                được tổng hoà từ
              </p>
            </div>
          </div>
          <div className="article">
            <div className="image_box">
              <img src={article3} alt="" />
              <div className="overlay"></div>
            </div>
            <div className="date_box">
              <div className="day">05</div>
              <div className="year">05/2021</div>
            </div>
            <div className="content">
              <Link to="/" className="article_title">
                Ngắm nhìn thời trang thảm đỏ ấn tượng tại Oscar 2021
              </Link>
              <p className="article_short_description">
                Những ngôi sao hàng đầu thế giới đã diện trang phục như thế nào
                khi tham gia lễ trao giải Oscar năm 2021? Hãy cùng Mew Fashion
                điểm qua
              </p>
            </div>
          </div>
          <div className="article">
            <div className="image_box">
              <img src={article4} alt="" />
              <div className="overlay"></div>
            </div>
            <div className="date_box">
              <div className="day">05</div>
              <div className="year">05/2021</div>
            </div>
            <div className="content">
              <Link to="/" className="article_title">
                Gợi ý tips phối đồ cho người mạng Hỏa
              </Link>
              <p className="article_short_description">
                Trong quan niệm Ngũ Hành, Hoả (lửa) đại diện cho sự sống, phát
                kiến sáng tạo và nhiệt huyết. Tiếp nối hành trình khám phá tủ đồ
                Ngũ Hành, cùng Mew Fashion đến với những gợi ý phối đồ v
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand_top container">
        <div className="header_box">
          <div className="title_box">
            <p className="main_title">TOP THƯƠNG HIỆU</p>
          </div>
        </div>
        <div className="image_box">
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand4} alt="" />
          <img src={brand5} alt="" />
          <img src={brand6} alt="" />
          <img src={brand7} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
