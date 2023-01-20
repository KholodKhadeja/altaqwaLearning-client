import React, { Fragment } from 'react';
import "./mainnavbarstyle.scss";

const MainNavBar = () => {
    return (
        <Fragment >
<nav className="navbar navbar-expand-lg  navbarStyling">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logoImg"  
    src="https://raw.githubusercontent.com/KholodKhadeja/Masjed-altaqwa-learning/main/client-side/src/images/final-logo.ico"  /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
</div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active fs-6 text"href="#">الرئيسية</a>
        </li>
        <li className="nav-item">
          <a className="nav-link fs-6 text" href="#">من نحن؟</a>
        </li>
        <li className="nav-item">
        <button type="button" class="fs-6 text btn btn-login btn-success">تسجيل الدخول</button>
        </li>
      </ul>
    </div>
</nav>
</Fragment>
    );
}

export default MainNavBar;
