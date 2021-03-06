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
        document.getElementById(id).innerHTML = "???? H???T TH???I GIAN SALE!";

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
        <div className="products_list sale">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">flash sale</p>
            </div>
          </div>
          <div id="count_down">
            <Time />
            <p id="text_time">Th???i gian: </p>
            <p id="date">{date} NG??Y</p>
            <p id="hour">{hour}</p>
            <p id="minute">{minute}</p>
            <p id="second">{second}</p>
          </div>
          <p style={{ marginBottom: "5px", textAlign: "center" }}>
            H??ng lo???t b???n m???u. H??ng lo???t c???i ti???n. H??ng lo???t th??? nghi???m.
          </p>
          <div className="list">
            <div className="product">
              <Link to="/product-details" className="image_box">
                <div className="ct">Chi ti???t</div>
                <img src={shirt11} alt="" />
                <img src={shirt12} alt="" />
              </Link>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">??o thun M-F 08 </Link>
                <p className="price">
                  199.000??? <del>250.000???</del>
                </p>
                <div className="status">
                  <img src={hotSale} alt="" />
                  <p>S???p ch??y h??ng</p>
                  <div className="bg"></div>
                </div>
              </div>
            </div>
            <div className="product">
              <Link to="/product-details" className="image_box">
                <div className="ct">Chi ti???t</div>
                <img src={shirt21} alt="" />
                <img src={shirt22} alt="" />
              </Link>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">??o thun M-F 08 </Link>
                <p className="price">
                  199.000??? <del>250.000???</del>
                </p>
                <div className="status active">
                  <p>c??n h??ng</p>
                </div>
              </div>
            </div>
            <div className="product">
              <Link to="/product-details" className="image_box">
                <div className="ct">Chi ti???t</div>
                <img src={shirt31} alt="" />
                <img src={shirt32} alt="" />
              </Link>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">??o thun M-F 08 </Link>
                <p className="price">199.000???</p>
                <div className="status">
                  <img src={hotSale} alt="" />
                  <p>S???p ch??y h??ng</p>
                  <div className="bg"></div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/">Xem th??m</Link>
        </div>
        <div
          className="bg_home sale"
          style={{ backgroundImage: `url(${bgProductOne})` }}
        >
          <div className="introduce">
            <p className="title_type_1">S??? ki???n trong tu???n</p>
            <p className="title_type_2">flash sale</p>
            <p className="short_description">
              Ch??? ??p d???ng khi ?????t h??ng qua Website
            </p>
            <Link to="/" className="btn btn_more">
              Xem th??m
            </Link>
          </div>
        </div>
      </section>

      <section className="products_home active">
        <div className="products_list">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">??o thun t-shirt</p>
            </div>
          </div>
          <div className="list">
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi ti???t</div>
                <img src={shirt11} alt="" />
                <img src={shirt12} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">??o thun M-F 08 </Link>
                <p className="price">
                  199.000??? <del>250.000???</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi ti???t</div>
                <img src={shirt21} alt="" />
                <img src={shirt22} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">??o thun M-F 08 </Link>
                <p className="price">
                  199.000??? <del>250.000???</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi ti???t</div>
                <img src={shirt31} alt="" />
                <img src={shirt32} alt="" />
              </div>
              <div className="content">
                <Link to="/">??o thun M-F 08 </Link>
                <p className="price">199.000???</p>
              </div>
            </div>
          </div>
          <Link to="/">Xem th??m</Link>
        </div>
        <div
          className="bg_home"
          style={{ backgroundImage: `url(${bgProductTwo})` }}
        >
          <div className="introduce">
            <p className="title_type_1">s???n ph???m m???i</p>
            <p className="title_type_2">t-shirt</p>
            <p className="short_description">
              Nh???p m?? MEWFASHION gi???m 10% v???i ????n h??ng t??? 800k
            </p>
            <Link to="/" className="btn btn_more">
              Xem th??m
            </Link>
          </div>
        </div>
      </section>

      <section className="products_home">
        <div className="products_list">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">qu???n sort</p>
            </div>
          </div>
          <div className="list">
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi ti???t</div>
                <img src={sort1} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">Qu???n sort M-F 08 </Link>
                <p className="price">
                  199.000??? <del>250.000???</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi ti???t</div>
                <img src={sort2} alt="" />
              </div>
              <div className="sale_box">
                <p>-10%</p>
              </div>
              <div className="content">
                <Link to="/">Qu???n sor M-F 08 </Link>
                <p className="price">
                  199.000??? <del>250.000???</del>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="image_box">
                <div className="ct">Chi ti???t</div>
                <img src={sort3} alt="" />
              </div>
              <div className="content">
                <Link to="/">Qu???n sor M-F 08 </Link>
                <p className="price">199.000???</p>
              </div>
            </div>
          </div>
          <Link to="/">Xem th??m</Link>
        </div>

        <div
          className="bg_home"
          style={{ backgroundImage: `url(${bgProductThree})` }}
        >
          <div className="introduce">
            <p className="title_type_1">S???N PH???M HOT</p>
            <p className="title_type_2">QU???N SHORT</p>
            <p className="short_description">
              Nh???p m?? MEWFASHION gi???m 10% v???i ????n h??ng t??? 800k
            </p>
            <Link to="/" className="btn btn_more">
              Xem th??m
            </Link>
          </div>
        </div>
      </section>
      <section className="products_home active">
        <div className="products_list">
          <div className="header_box">
            <div className="title_box">
              <p className="main_title">??o s?? mi</p>
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
                <Link to="/product-details">S?? mi ng???n tay M-F 08 </Link>
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
                <Link to="/product-details">S?? mi ng???n tay M-F 08 </Link>
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
              <div className="content">
                <Link to="/product-details">S?? mi ng???n tay M-F 08 </Link>
                <p className="price">199.000???</p>
              </div>
            </div>
          </div>
          <Link to="/">Xem th??m</Link>
        </div>
        <div
          className="bg_home"
          style={{ backgroundImage: `url(${bgProductFour})` }}
        >
          <div className="introduce">
            <p className="title_type_1">TH???I TRANG</p>
            <p className="title_type_2">??O S?? MI</p>
            <p className="short_description">
              Nh???p m?? MEWFASHION gi???m 10% v???i ????n h??ng t??? 800k
            </p>
            <Link to="/" className="btn btn_more">
              Xem th??m
            </Link>
          </div>
        </div>
      </section>

      <section className="articles_home container">
        <div className="header_box">
          <div className="title_box">
            <p className="main_title">tin t???c - s??? ki???n</p>
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
              <div className="icon"></div>
            </div>

            <div className="content">
              <Link to="/" className="article_title">
                Th???i trang phim Vincenzo: B???n giao h?????ng
              </Link>
              <p className="article_short_description">
                B??? qua nh???ng ?? ki???n tr??i chi???u v??? ph???n n???i dung th?? y???u t??? ph???c
                trang trong phim Vincenzo l?? m???t ??i???m s??ng v???i nh???ng b??? c??nh
                ???????c t???ng ho?? t???
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
              <div className="icon"></div>
            </div>
            <div className="content">
              <Link to="/" className="article_title">
                Th???i trang phim Vincenzo: B???n giao h?????ng
              </Link>
              <p className="article_short_description">
                B??? qua nh???ng ?? ki???n tr??i chi???u v??? ph???n n???i dung th?? y???u t??? ph???c
                trang trong phim Vincenzo l?? m???t ??i???m s??ng v???i nh???ng b??? c??nh
                ???????c t???ng ho?? t???
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
              <div className="icon"></div>
            </div>
            <div className="content">
              <Link to="/" className="article_title">
                Ng???m nh??n th???i trang th???m ????? ???n t?????ng t???i Oscar 2021
              </Link>
              <p className="article_short_description">
                Nh???ng ng??i sao h??ng ?????u th??? gi???i ???? di???n trang ph???c nh?? th??? n??o
                khi tham gia l??? trao gi???i Oscar n??m 2021? H??y c??ng Mew Fashion
                ??i???m qua
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
              <div className="icon"></div>
            </div>
            <div className="content">
              <Link to="/" className="article_title">
                G???i ?? tips ph???i ????? cho ng?????i m???ng H???a
              </Link>
              <p className="article_short_description">
                Trong quan ni???m Ng?? H??nh, Ho??? (l???a) ?????i di???n cho s??? s???ng, ph??t
                ki???n s??ng t???o v?? nhi???t huy???t. Ti???p n???i h??nh tr??nh kh??m ph?? t??? ?????
                Ng?? H??nh, c??ng Mew Fashion ?????n v???i nh???ng g???i ?? ph???i ????? v
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="brand_top container">
        <div className="header_box">
          <div className="title_box">
            <p className="main_title">TOP TH????NG HI????U</p>
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
