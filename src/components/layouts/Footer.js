import React from "react";

export default Footer = () => {
  return (
    <React.Fragment>
      <footer className="mt-auto">
        <div className="content__boxed">
          <div className="content__wrap py-3 py-md-1 d-flex flex-column align-items-center">
            <div className="text-nowrap mb-4 mb-md-0 text-center">
              Cathay Warehouse &copy;{" "}
              <a href="#" className="ms-1 btn-link fw-bold">
                The Cathay Drug Company, Inc.
              </a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
