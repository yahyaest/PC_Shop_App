import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addRemoveToProfile } from "./../../actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import Navbar from "./navbar"; import Footer from "./footer";
import { importAll } from "../../services/importImageFolder";

function Favourites(props) {
  Favourites.propTypes = {
    profile: PropTypes.object.isRequired,
    favouritesList: PropTypes.array.isRequired,
    addRemoveToProfile: PropTypes.func.isRequired,
  };

  const favouritesList = props.favouritesList?.filter(
    (component) => component !== undefined || null
  );
  const userProfileData = props.profile;
  let { favourites } = userProfileData?.data ? userProfileData?.data : ""; // Due to the setTimeout in action dispatching

  const images = importAll(
    require.context("../../images/image_DB", false, /\.(png|jpe?g|svg)$/)
  );
  

  const updateFavouriteList = (component) => {
    // console.log(component);

    favourites = favourites.filter((e) => e?.name !== component?.name);
    favourites = favourites.filter((component) => component !== undefined || null);
    userProfileData.data.favourites = favourites;
    try {
      props.addRemoveToProfile(userProfileData);
      toast.warning(`${component.name} removed from favourites successfully`);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  if(favouritesList?.length===0 ){
    return <React.Fragment>
      <Navbar />
      <h1 style={{paddingTop:"100px"}}>No favourites are added yet.</h1>
  <Footer />
    </React.Fragment>
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <h1 className="text-center py-3">Favourites</h1>
        <div className="cards__list">
          {favouritesList?.map((component) => (
            <div key={component?.name} className="component__card">
              <img
                src={images[`${component.image.split("images/")[1]}`]}
                // src={`../../images/image_DB/${
                //   component?.image.split("images/")[1]
                // }`}
                alt=""
                className="component__image"
                onClick={() => {
                  props.history.push(
                    `/components/${
                      component.hardware_type === "PcGamer"
                        ? "pcGamer"
                        : component.hardware_type.toLowerCase()
                    }/${component.id}/${component.name}`
                  );
                }}
              />

              {/* <img
                className="component__image"
                src={component?.image}
                alt=""
                onClick={() => {
                  props.history.push(
                    `/components/${
                      component.hardware_type === "PcGamer"
                        ? "pcGamer"
                        : component.hardware_type.toLowerCase()
                    }/${component.id}/${component.name}`
                  );
                }}
              />//dev */}
              <div className="component__info">
                <h4 className="component__name">{component?.name}</h4>
                <div className="componentCard__footer">
                  <div className="component__price">
                    <p>{component?.price} TND</p>
                  </div>
                  <FontAwesomeIcon
                    className="fav_icon"
                    icon={faHeartBroken}
                    onClick={() => updateFavouriteList(component)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
  favouritesList: state.auth.profile?.data.favourites,
});

export default connect(mapStateToProps, { addRemoveToProfile })(Favourites);
