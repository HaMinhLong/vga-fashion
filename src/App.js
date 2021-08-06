import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Introduce from "./pages/Introduce";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import ShopSystem from "./pages/ShopSystem";
import Products from "./pages/Products";
import ArticleDetails from "./pages/ArticleDetails";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Header></Header>
      <Route exact path="/" component={Home} />
      <Route exact path="/introduce" component={Introduce} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/articles" component={Articles} />
      <Route exact path="/shop-system" component={ShopSystem} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/article-details" component={ArticleDetails} />
      <Route exact path="/product-details" component={ProductDetails} />
      <Route exact path="/cart" component={Cart} />
      <Footer></Footer>
    </Router>
  );
};

export default App;
