import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { logout } from "../../actions/auth";
import logo from "../../images/logo.jpg";
import {
  componentAttribute,
  getAllComponents,
} from "../../services/componentAtributes";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PersonIcon from "@material-ui/icons/Person";
import SlideBar from "./slidebar";

import "../../css/navbar.css";

function Navbar(props) {
  Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    chartsList: PropTypes.array.isRequired,
    logout: PropTypes.func.isRequired,
  };

  const { isAuthenticated, user } = props.auth;
  const { logout } = props;
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const components = Object.keys(componentAttribute);

  const getCartsValue = () => {
    let cartsValue = 0;
    const chartsList = props.chartsList?.filter(
      (component) => component !== undefined
    );

    for (let index = 0; index < chartsList?.length; index++) {
      cartsValue = cartsValue + parseInt(chartsList[index].price);
    }

    return cartsValue;
  };

  const getSearchResult = async (e) => {
    const searchQuery = e.currentTarget.value;
    setSearch(e.currentTarget.value);
    const allComponents = await getAllComponents();
    const result = allComponents.filter((component) =>
      component.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(result);
    console.log(result);
  };

  const authLinks = (
    //<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    <span className="navList__element">
      <strong>{user ? `Welcome ${user.username}` : ""}</strong>
    </span>
    //   <li  onClick={logout} className="navList__element">
    //    Logout
    //  </li>
    // </ul>
  );

  const guestLinks = (
    <li className="navList__element">
      <NavLink to="/login">
        <p className="component__title">LOGIN</p>
      </NavLink>
    </li>
  );

  const location = useLocation();

  return (
    <React.Fragment>
      {(location.pathname !== "/home" && location.pathname !=="/home/") && <SlideBar />}
      <div className="navbar">
        <MenuIcon className="navMenu" />
        <Link to="/home">
          <img className="navLogo" src={logo} alt="SBS-Logo" />
        </Link>
        <ul className="navList ">
          {isAuthenticated ? authLinks : guestLinks}
          <li
            onClick={() => (window.location = "/components/pcGamer")}
            className="navList__element"
          >
            <NavLink to="/components/pcGamer">
              <p className="component__title">PCS GAMERS</p>
            </NavLink>
          </li>
          <li
            onClick={() => (window.location = "/components/laptop")}
            className="navList__element"
          >
            <NavLink to="/components/laptop">
              <p className="component__title">LAPTOPS</p>
            </NavLink>
          </li>
          {window.innerWidth > 850 && <li
            onClick={() => (window.location = "/components/monitor")}
            className="navList__element"
          >
            <NavLink to="/components/monitor">
              <p className="component__title">MONITORS</p>
            </NavLink>
          </li>}
          <li className="navList__element">
            <div className="components" id="components">
              <div className="components__icon">
                <NavLink to="/components">
                  <p className="component__title">COMPONENTS</p>
                </NavLink>
                <ExpandMoreIcon />
              </div>
              <div className="components__selector">
                <ul className="components__list">
                  {components.slice(0, 3).map((component) => (
                    <li
                      onClick={() =>
                        (window.location = `/components/${component}`)
                      }
                      key={component}
                      className={`${component}`}
                    >
                      <Link to={`/components/${component}`}>
                        {component.toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <form className="search__form" action="">
          <div className="search__input">
            <SearchIcon className="icon__input" />
            <input
              onChange={getSearchResult}
              className="text__input"
              type="text"
            ></input>
            <div className="search_results">
              {searchResult.slice(0, 5).map((result) => (
                <div
                  className="search_result"
                  key={result.name}
                  onClick={() =>
                    (window.location.href = `/components/${
                      result.hardware_type === "PcGamer"
                        ? "pcGamer"
                        : result.hardware_type.toLowerCase()
                    }/${result.id}/${result.name}`)
                  }
                >
                  <p>{result.name}</p>
                </div>
              ))}
            </div>
          </div>
        </form>
        <div className="login__logout">
          <PersonOutlineIcon />
        </div>
        {isAuthenticated && (
          <div className="shopping__chart">
            <ShoppingCartIcon />
            <p>{getCartsValue()} TND</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.auth.profile,
  chartsList: state.auth.profile?.data.chart,
});

export default connect(mapStateToProps, { logout })(Navbar);
