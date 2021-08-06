import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer } from "antd";
import logo from "../static/images/home/logo.png";
import { ReactComponent as ToRight } from "../static/images/home/to-right.svg";
import { ReactComponent as CartTwo } from "../static/images/home/cart_2.svg";
import aoThun from "../static/images/home/ao-thun.jpg";
import quanSort from "../static/images/home/quan-sort.jpg";
import soMiDai from "../static/images/home/so-mi-dai-tay.png";
import soMiNgan from "../static/images/home/so-mi-ngan-tay.jpg";
import quanDai from "../static/images/home/quan-dai.jpg";
import searchIcon from "../static/images/home/search-icon.png";
import { ReactComponent as HomeIcon } from "../static/images/home/home-icon.svg";
import { ReactComponent as PhoneIcon } from "../static/images/home/phone-icon.svg";
import { ReactComponent as CartIcon } from "../static/images/home/cart-icon.svg";
import { ReactComponent as MenuIcon } from "../static/images/home/menu-icon.svg";
import iconMenu1 from "../static/images/home/icon_menu_1.png";
import iconMenu2 from "../static/images/home/icon_menu_2.png";
import iconMenu3 from "../static/images/home/icon_menu_3.png";
import iconMenu4 from "../static/images/home/icon_menu_4.png";
import iconMenu5 from "../static/images/home/icon_menu_5.png";

const Header = () => {
  const [toggleChildNews, setToggleChildNews] = useState(false);
  const [toggleChildProducts, setToggleChildProducts] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <>
      <header className={"header"}>
        <div className="container">
          <div className="logo_header">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="part_2">
            <ul className="navigation">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/introduce">Giới thiệu</Link>
              </li>
              <li
                className={toggleChildProducts ? "active" : ""}
                onMouseEnter={() => setToggleChildProducts(true)}
                onMouseLeave={() => setToggleChildProducts(false)}
              >
                <Link to="/products">
                  Sản phẩm <i className="fas fa-caret-down"></i>
                </Link>
                <ul className="child child_product">
                  <li>
                    <img src={aoThun} alt="" />
                    <Link to="/products">Áo thun</Link>
                    <ul>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Áo thun polo
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Áo thun unisex
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Áo thun trơn
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Áo thun T-shirt
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <img src={quanSort} alt="" />
                    <Link to="/products">Quần sort</Link>
                    <ul>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Quần sort kaki
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Quần sort đùi
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Quần sort gió
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Quần sort thể thao
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <img src={soMiDai} alt="" />
                    <Link to="/products">Áo thun</Link>
                    <ul>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Sơ mi dài tay dạ
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Sơ mi dài tay họa tiết
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Sơ mi dài tay kẻ
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Sơ mi dài tay trơn
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <img src={soMiNgan} alt="" />
                    <Link to="/products">Áo thun</Link>
                    <ul>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Áo Aloha
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Áo camp shirt
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Sơ mi ngắn tay họa tiết
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Sơ mi ngắn tay kẻ
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <img src={quanDai} alt="" />
                    <Link to="/products">Quần dài</Link>
                    <ul>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Quần âu
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Quần kaki
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Quần jean
                        </Link>
                      </li>
                      <li>
                        <Link to="/products">
                          <ToRight />
                          Quần gió
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/shop-system">Hệ thống cửa hàng</Link>
              </li>
              <li>
                <Link to="/contact">Liên hệ</Link>
              </li>
              <li
                className={toggleChildNews ? "active" : ""}
                onMouseEnter={() => setToggleChildNews(true)}
                onMouseLeave={() => setToggleChildNews(false)}
              >
                <Link to="/articles">
                  Tin tức <i className="fas fa-caret-down"></i>
                </Link>
                <ul className="child">
                  <li>
                    <Link to="/">Kinh nghiệm phối đồ</Link>
                  </li>
                  <li>
                    <Link to="/">Sự kiện</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="search_cart_box">
              <div className="search_header">
                <svg
                  onClick={() => setToggleSearch(true)}
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5zm-4.5 8h4v-4h1v4h4v1h-4v4h-1v-4h-4v-1z"></path>
                </svg>
              </div>
              <Link to="/cart" className="cart_header">
                <CartTwo />
              </Link>
            </div>
          </div>
          <div
            className={
              toggleSearch ? "search_container active" : "search_container"
            }
          >
            <div className={toggleSearch ? "search_box active" : "search_box"}>
              <form>
                <input
                  type="text"
                  placeholder="Nhập từ khóa tìm kiếm..."
                  required
                />
                <button type="submit">
                  <img src={searchIcon} alt="" />
                </button>
              </form>
              <div className="bg" onClick={() => setToggleSearch(false)}></div>
              <div className="bg_two"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="header_two">
        <div className="box">
          <Link to="/">
            <HomeIcon />
          </Link>
          <p>Trang chủ</p>
        </div>
        <div className="box">
          <Link to="/contact">
            <PhoneIcon />
          </Link>
          <p>Liên hệ</p>
        </div>
        <div className="box">
          <Link to="/cart">
            <CartIcon />
          </Link>
          <p>Giỏ hàng</p>
        </div>
        <div className="box" onClick={() => setOpenMenu(!openMenu)}>
          <MenuIcon />
          <p>Menu</p>
        </div>
      </div>
      <Drawer
        title={<img src={logo} alt=""></img>}
        placement="left"
        width="330"
        closable={false}
        onClose={() => setOpenMenu(false)}
        visible={openMenu}
        className="menu_res"
      >
        <ul>
          <li className="active">
            <img src={iconMenu1} alt="" />
            <p>Áo thun</p>
          </li>
          <li>
            <img src={iconMenu2} alt="" />
            <p>Quần short</p>
          </li>
          <li>
            <img src={iconMenu3} alt="" />
            <p>Sơ mi dài tay</p>
          </li>
          <li>
            <img src={iconMenu4} alt="" />
            <p>Sơ mi ngắn tay</p>
          </li>
          <li>
            <img src={iconMenu5} alt="" />
            <p>Quần dài</p>
          </li>
        </ul>
        <ul className="categories">
          <li>
            <Link to="/products" onClick={() => setOpenMenu(false)}>
              <img src={quanDai} alt="" />
              <p>Áo thun polo</p>
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setOpenMenu(false)}>
              <img src={quanDai} alt="" />
              <p>Áo thun unisex</p>
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setOpenMenu(false)}>
              <img src={quanDai} alt="" />
              <p>Áo thun trơn</p>
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setOpenMenu(false)}>
              <img src={quanDai} alt="" />
              <p>Áo thun t-shirt</p>
            </Link>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default Header;
