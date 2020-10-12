import React from "react";

const Loading = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="spinner-grow text-muted m-2"></div>
          <div className="spinner-grow text-primary m-2"></div>
          <div className="spinner-grow text-success m-2"></div>
          <div className="spinner-grow text-info m-2"></div>
          <div className="spinner-grow text-warning m-2"></div>
          <div className="spinner-grow text-danger m-2"></div>
          <div className="spinner-grow text-secondary m-2"></div>
          <div className="spinner-grow text-dark m-2"></div>
          <div className="spinner-grow text-light m-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
