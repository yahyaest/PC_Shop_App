import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addRemoveToProfile } from "./../../actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import Navbar from "./navbar";
import Footer from './footer';

function Carts(props) {
  Carts.propTypes = {
    profile: PropTypes.object.isRequired,
    cartsList: PropTypes.array.isRequired,
    addRemoveToProfile: PropTypes.func.isRequired,
  };

  const cartsList = props.cartsList?.filter(
    (component) => component !== undefined || null
  );
  const userProfileData = props.profile;
  let carts = userProfileData?.data ? userProfileData?.data.chart : ""; // Due to the setTimeout in action dispatching

  const updateCartList = (component) => {
    let isRemovable = false;
    let updatedCarts = carts;
    carts.map((cart, index) => {
      if (cart.name === component?.name && !isRemovable) {
        updatedCarts.splice(index, 1);
        isRemovable = true;
      }
    });
    carts = updatedCarts;
    // carts = carts.filter((e) => e?.name !== component?.name);
    carts = carts.filter((component) => component !== undefined || null);
    userProfileData.data.chart = carts;
    try {
      props.addRemoveToProfile(userProfileData);
      toast.warning(`${component.name} removed from cart successfully`);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

   if(cartsList?.length===0 ){
    return <React.Fragment>
      <Navbar />
      <h1 style={{paddingTop:"100px"}}>No carts are added yet.</h1>
  <Footer />
    </React.Fragment>
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <h1 className="text-center py-3">Carts</h1>
        <div className="cards__list">
          {cartsList?.map((component) => (
            <div key={component?.name} className="component__card">
              <img
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
              />  //dev  */}
              <div className="component__info">
                <h4 className="component__name">{component?.name}</h4>
                <div className="componentCard__footer">
                  <div className="component__price">
                    <p>{component?.price} TND</p>
                  </div>
                  <FontAwesomeIcon
                    className="fav_icon"
                    icon={faTrash}
                    onClick={() => updateCartList(component)}
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
  cartsList: state.auth.profile?.data.chart,
});

export default connect(mapStateToProps, { addRemoveToProfile })(Carts);
