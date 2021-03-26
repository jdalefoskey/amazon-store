import React from 'react';
import header from "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return <nav className="header">

            <Link to="/">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
            </Link>
            {/* SEARCH BOX */}
            <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header-searchIcon" />
            </div>
            {/* third links */}
            <div className="header_nav">
                {/* first link */}
                <Link to="/login" className="header_link">
                    <div class="header_option">
                        <span className="header_optionLineOne">Hello Dale</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/* second link */}
                <Link to="/" className="header_link">
                    <div class="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/* third link */}
                <Link to="/" className="header_link">
                    <div class="header_option">
                        <span className="header_optionLineOne" >Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/* fourth link */}
                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                    {/* shopping basket icon */}
                    <ShoppingBasketIcon />

                    <span className="header_optionLineTwo header_basketCount">0</span>
                    </div>
                
                </Link>
               
            </div>
        </nav>
};

export default Header;
