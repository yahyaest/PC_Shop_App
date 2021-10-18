import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { componentAttributeInfo } from "../../services/componentAtributes";
import { getComponent } from "../../actions/merchandises";
import { addRemoveToProfile } from "./../../actions/auth";
import { Button } from "react-bootstrap";
import Navbar from "./navbar";
import { toast } from "react-toastify";
import Footer from "./footer";
import "../../css/componentPage.css";

function ComponentPage(props) {
  ComponentPage.propTypes = {
    componentObject: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    addRemoveToProfile: PropTypes.func.isRequired,
  };

  const componentId = props.match.params.id;
  const componentVariant = props.match.params.component;
  let quantity = 0;
  const userProfileData = props.profile;
  let { chart } = userProfileData?.data ? userProfileData?.data : ""; // Due to the setTimeout in action dispatching
  let { favourites } = userProfileData?.data ? userProfileData?.data : ""; // Due to the setTimeout in action dispatching

  useEffect(() => {
    const componentVariant = props.match.params.component;
    props.getComponent(componentId, componentVariant);
  }, []);

  const updateCharteList = (component, quantity) => {
    // console.log(component);
    if (chart) {
      for (let i = 0; i < quantity; i++) {
        chart.push(component);
      }
      favourites = favourites.filter((component) => component !== undefined);
      userProfileData.data.chart = chart;
      userProfileData.data.favourites = favourites;
      try {
        props.addRemoveToProfile(userProfileData);
        document.getElementById("number").innerText = 0;
        toast.success(`${component.name}  added to cart successfully`);
      } catch (error) {
        toast.error(`${error}`);
      }
    }
  };

  const component =
    props.componentObject[componentVariant.toUpperCase()] ||
    props.componentObject[""];
  console.log(component);
  return (
    <React.Fragment>
      <Navbar />
      <div className="component__page">
        <div className="component__section">
          <h2 className="component_name">{component?.name}</h2>
          <div className="component_info">
            <img src={component?.image} alt="" className="component__photo" />
            <div className="component__specs">
              {componentAttributeInfo.map((attribute) => (
                <div key={attribute.label}>
                  {component && component[`${attribute.title}`] && (
                    <div>
                      {attribute.title !== "frequency" ? (
                        <p>
                          <strong>{attribute.label}</strong> :{" "}
                          {component[`${attribute.title}`]} {attribute.unit}
                        </p>
                      ) : (
                        <p>
                          <strong>{attribute.label}</strong> :{" "}
                          {component[`${attribute.title}`]}{" "}
                          {componentVariant === "gpu" ? "MHz" : "GHz"}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="component__purshase">
          <div className="component__count">
            <Button
              onClick={() => {
                if (quantity > 0) {
                  quantity--;
                  document.getElementById("number").innerText = quantity;
                }
              }}
              className="minus"
              variant="info"
              size="sm"
            >
              -
            </Button>
            <p>
              Quantity : <span id="number">0</span>
            </p>
            <Button
              onClick={() => {
                if (quantity < 10) {
                  quantity++;
                  document.getElementById("number").innerText = quantity;
                }
              }}
              className="plus"
              variant="info"
              size="sm"
            >
              +
            </Button>
          </div>
          <Button
            variant="warning"
            size="md"
            className="chart"
            onClick={() => updateCharteList(component, quantity)}
          >
            Add to cart
          </Button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  componentObject: state.merchandises.merchandise,
  profile: state.auth.profile,
});

export default connect(mapStateToProps, {
  getComponent,
  addRemoveToProfile,
})(ComponentPage);
