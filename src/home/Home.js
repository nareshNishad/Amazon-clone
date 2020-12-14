import React from "react";
import "./Home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id={2554}
            title="The Lean startup"
            price={290.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id={5676}
            title="Samsung 163 cm (65 Inches) Wondertainment Series Ultra HD LED Smart TV UA65TUE60AKXXL (Titan Gray) (2020 model)"
            price={60000}
            image="https://i.gadgets360cdn.com/products/televisions/large/1548155056_832_samsung_55-inch-led-ultra-hd-4k-tv-55nu7100.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id={75759}
            title="Amazon Echo Plus (2018)"
            price={2490.99}
            image="https://images.indianexpress.com/2018/10/amazon-echo-plus-2018-main.jpg"
            rating={5}
          />

          <Product
            id={876869}
            title="Xbox Series X"
            price={30000}
            image="https://compass-ssl.xbox.com/assets/85/8b/858b94d4-0ca6-4e74-ac9f-38565c49f2df.jpg?n=Xbox-Series-X_Image-0_1083x1400_02.jpg"
            rating={4}
          />
          <Product
            id={987897}
            title="LG-F1496ADP24-8-Kg-Fully-Automatic-Front-Load-Washing-Machine"
            price={20000}
            image="https://static.toiimg.com/photo/54156532/LG-F1496ADP24-8-Kg-Fully-Automatic-Front-Load-Washing-Machine.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id={87678}
            title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
            price={150000}
            image="https://cnet3.cbsistatic.com/img/yjrw7VgWV7a95AvK8Ym0Np4bFXY=/1200x675/2017/06/27/13484418-bfd9-41e2-8f2d-9b4afb072da8/apple-macbook-pro-15-inch-2017-14.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
