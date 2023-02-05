import React, { Fragment } from 'react';
import "./mainnavbarstyle.scss";
import PartialNavLinkComponent from './PartialNavLinkComponent';
import { NavLink } from 'react-router-dom';

const MainNavBar = () => {

  const links=[
    {
      label: "الرئيسية",
      url: "/home",
    },
    {
      label: "اختبارات",
      url: "/exams",
    },
    {
      label: "تسجيل الدخول",
      url: "/login",
    },
  ];
  const loginedAdminlinks=[
    {
      label: "الرئيسية",
      url: "/home",
    },
    {
      label: "اختبارات",
      url: "/exams",
    },
    {
      label: "ادارةالموقع",
      url: "/adminpage",
    },
  ];

    return (
        <Fragment >
<nav className="navbar navbar-expand-lg  navbarStyling">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="logoImg"  
    src="https://raw.githubusercontent.com/KholodKhadeja/altaqwaLearning-client/main/src/images/logo.ico"  /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
</div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0 small-nav">
      {links.map((item, idx) => (
        item.url !== "/login" ? (<PartialNavLinkComponent
                key={"navlinks" + idx}
                label={item.label}
                link={item.url}
              />) : ( <li className="nav-item">
              <button type="button" className="fs-6 text btn btn-login btn-success">
                <NavLink className="login-btn-link" to={item.url}>تسجيل الدخول</NavLink></button>
              </li>)
            ))}
      </ul>
    </div>
</nav>
</Fragment>
    );
}

export default MainNavBar;
