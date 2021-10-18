import React from "react";
import "../../css/footer.css"

function Footer() {
  return (
    <div>
      <footer className="footer text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="mx-5 px-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="mx-4 text-reset">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="/" className="mx-4 text-reset">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="/" className="mx-4 text-reset">
              <i className="fa fa-google"></i>
            </a>
            <a href="/" className="mx-4 text-reset">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="/" className="mx-4 text-reset">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="/" className="mx-4 text-reset">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="/components" className="text-reset">
                    Components
                  </a>
                </p>
                <p>
                  <a href="/components/pcGamer" className="text-reset">
                    PC Gamers
                  </a>
                </p>
                <p>
                  <a href="/components/laptop" className="text-reset">
                    Laptops
                  </a>
                </p>
                <p>
                  <a href="/components/monitor" className="text-reset">
                    Monitors
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/" className="text-reset">
                    Home
                  </a>
                </p>
              
                <p>
                  <a href="/carts" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="/favourites" className="text-reset">
                    Favourites
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fa fa-home mx-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fa fa-envelope mx-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fa fa-phone mx-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fa fa-print mx-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="/">
           PcShop.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
