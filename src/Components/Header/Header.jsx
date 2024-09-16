import React from "react";

function Header() {
  return (
    <div>
      <section>
        <section>
          <div>
            {/* Logo */}
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </a>
            {/* Delivery */}
            <span>
              {/* Icon */}
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </span>
          </div>
          <div>
            {/* Search */}
          </div>
          <div></div>
        </section>
      </section>
    </div>
  );
}

export default Header;
