import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getComponents, currentComponent } from "../../actions/merchandises";
import { addRemoveToProfile } from "./../../actions/auth";
import Navbar from "./navbar";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "../../css/component.css";

function Component(props) {
  Component.propTypes = {
    profile: PropTypes.object.isRequired,
    componentTable: PropTypes.object.isRequired,
    getComponents: PropTypes.func.isRequired,
    currentComponent: PropTypes.func.isRequired,
    addRemoveToProfile: PropTypes.func.isRequired,
  };

  const componentVariant = props.match.params.component;
  const userProfileData = props.profile;
  let { favourites } = userProfileData?.data ? userProfileData?.data : ""; // Due to the setTimeout in action dispatching

  //console.log("Debug", userProfileData, favourites, chart);

  useEffect(() => {
    props.currentComponent(componentVariant.toUpperCase());
    props.getComponents(componentVariant);
  }, []);

  const componentIsFavourite = (componentName) => {
    // Create table that contain names of favourite components
    const favouriteList = [];
    if (favourites) {
      favourites.map((component) => {
        favouriteList.push(component?.name);
      });
    }
    // Determine either the component is in favourite list or not
    const index = favouriteList.findIndex((e) => e === componentName);
    if (index === -1) return false;
    return true;
  };

  const updateFavouriteList = (component) => {
    // console.log(component);
    if (favourites && componentIsFavourite(component.name) === false) {
      favourites.push(component);
      favourites = favourites.filter((component) => component !== undefined);
      userProfileData.data.favourites = favourites;
      try {
        props.addRemoveToProfile(userProfileData);
        toast.success(`${component.name} added to favourites successfully`);
      } catch (error) {
        toast.error(`${error}`);
      }
    } else if (favourites) {
      favourites = favourites.filter((e) => e?.name !== component?.name);
      favourites = favourites.filter((component) => component !== undefined);
      userProfileData.data.favourites = favourites;
      try {
        props.addRemoveToProfile(userProfileData);
        toast.warning(`${component.name} removed from favourites successfully`);
      } catch (error) {
        toast.error(`${error}`);
      }
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <h2 className="text-center">{componentVariant}</h2>
        <div className="cards__list">
          {props.componentTable[componentVariant.toUpperCase()]?.map(
            (component) => (
              <div key={component.id} className="component__card">
                <img
                  src={`/images/image_DB/${
                    component?.image.split("images/")[1]
                  }`}
                  alt=""
                  className="component__image"
                  onClick={() => {
                    props.history.push(
                      `/components/${componentVariant}/${component.id}/${component.name}`
                    );
                  }}
                />

                {/* <img
                  className="component__image"
                  src={component.image}
                  alt=""
                  onClick={() => {
                    props.history.push(
                      `/components/${componentVariant}/${component.id}/${component.name}`
                    );
                  }}
                />   //dev   */}
                <div className="component__info">
                  <h4 className="component__name">{component.name}</h4>
                  <div className="componentCard__footer">
                    <div className="component__price">
                      <p>{component.price} TND</p>
                    </div>
                    <FontAwesomeIcon
                      className="fav_icon"
                      icon={
                        componentIsFavourite(component.name)
                          ? faHeart
                          : faHeartBroken
                      }
                      onClick={() => updateFavouriteList(component)}
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Footer />;
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
  componentTable: state.merchandises.merchandises.Components,
});

export default connect(mapStateToProps, {
  getComponents,
  currentComponent,
  addRemoveToProfile,
})(Component);
