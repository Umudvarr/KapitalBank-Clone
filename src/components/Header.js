import React, { useState } from "react";
import "../CSS/Header.css";
import "../CSS/Mediaquery.css";

function Header() {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isCloseLogoIconShown, setIsCloseLogoIconShown] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarHidden((prev) => !prev);
    setIsCloseLogoIconShown((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="overlay"></div>
      <div className="header">
        <div className="navbar">
          <img
            src={require("../images/Kapital_Bank_Logo_2024.png")}
            alt="KapitalBankLogo"
            className="kapital-bank-logo"
          />
          <div
            className={`navbar-items ${
              isNavbarHidden ? "hide-navbar-items animate-navbar-items" : ""
            }`}
          >
            <div
              className={`close-logo-icon ${
                isCloseLogoIconShown ? "show-close-logo-icon" : ""
              }`}
            >
              <img
                src={require("../images/Kapital_Bank_Logo_2024.png")}
                alt="KapitalBankLogo"
                className="kapital-Bank-logo"
              />
              <div className="close-btn" onClick={toggleNavbar}>
                X
              </div>
            </div>
            <p>Vakansiyalar</p>
            <p>Tələbə və məzunlar</p>
            <p>Karyera</p>
            <p>Haqqımızda</p>
          </div>
          <div className="sign-in">
            <p className="enter">Daxil ol</p>
            <p className="qeydiyyat">Qeydiyyat</p>
          </div>
          <div class="hamburger-btn" onClick={toggleNavbar}>
            <img
              src={require("../images/hamburgermenu.png")}
              alt="hamburgermenu"
              className="hamburger-menu"
            />
          </div>
        </div>
        <aside className="aside">
          <div className="aside-div">
            <h1>İşə qəbul portalımıza xoş gəlmisən!</h1>
            <p>
              Peşəkar komandamızın üzvü olmaq istəyirsən? Bu, doğru <br />{" "}
              qərardır. Elə indi bir kliklə qeydiyyatdan keç! Uğurlar!{" "}
            </p>
            <button type="button">Şəxsi kabinet</button>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Header;
