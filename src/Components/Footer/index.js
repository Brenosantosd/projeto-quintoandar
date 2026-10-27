import React from "react";
import {Link} from "react-router-dom"
import "./footer.css"



function Footer(){
    return(
        <footer className = "footer-container">
            <div className="footer-content">
        <div className="footer-column">
          <h4>Shop</h4>
          <Link to="/products">All Products</Link>
          <Link to="/new-arrivals">New Arrivals</Link>
          <Link to="/best-sellers">Best Sellers</Link>
          <Link to="/sale">Sale Items</Link>
        </div>

        <div className="footer-column">
          <h4>Information</h4>
          <Link to="/about">About Us</Link>
          <Link to="/sustainability">Sustainability</Link>
          <Link to="/shipping">Shipping Policy</Link>
          <Link to="/returns">Returns</Link>
        </div>

        <div className="footer-column">
          <h4>Customer Service</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/size-guide">Size Guide</Link>
          <Link to="/track-order">Track Order</Link>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
          <Link to="/gdpr">GDPR</Link>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>2026 © Quinto Andar.  All rights reserved.</p>
      </div>


        </footer>
    )
}

export default Footer; 