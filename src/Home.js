import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/sm/FGWP/March2021/GW_1500x600_FGWPMarch_EN._CB660054671_.jpg" />

            {/* product id, title, price, rating, image */}
            <div className="home_row">
            <Product 
                id="1234"
                title="The Lean startup"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/41+5Z1FRiZL.jpg" 
            />
            <Product 
                id="12345"
                title="Amazon Echo dot"
                price={49.96}
                rating={4}
                image="https://mobileimages.lowes.com/product/converted/840080/840080560212.jpg?size=lg" 
            />
            <Product 
                id="123456"
                title="Beats by Dr. Dre"
                price={199.96}
                rating={3}
                image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6296/6296109ld.jpg" 
            />
            {/* Product */}
            </div>

            {/* second row */}
            <div className="home_row">
            <Product 
                id="21234"
                title="Colgate Total Whitening Toothpaste with Stannous Fluoride and Zinc, Exclusive, Whitening Mint, 4.8 Oz (Pack of 4)"
                price={11.96}
                rating={2}
                image="https://i5.walmartimages.com/asr/f9779c82-2fe5-4867-8382-3d24dd5cb204_3.eedf282797a4b585716de094ef29d1da.png?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" 
            />
            <Product 
                id="212345"
                title="Charmin Ultra Soft Cushiony Touch Toilet Paper, 24 Family Mega Rolls = 123 Regular Rolls"
                price={31.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/51NgWlO3VCL._SS600_.jpg" 
            />
           
            {/* Product */}
            </div>

            <div className="home_row">
            <Product 
                id="11234"
                title="Nintendo Switch Monster Hunter Rise Deluxe Edition System - Switch"
                price={539.94}
                rating={5}
                image="https://i.ebayimg.com/images/g/D~cAAOSwlP9gXg3y/s-l1600.jpg" 
            />
           
           
            {/* Product */}
            </div>
        </div>
    );
}

export default Home;
