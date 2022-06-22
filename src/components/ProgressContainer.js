import React from "react";

export default function ProgressContainer() {
  return (
    <div className="container progress-round">
      <h2 className="h3 mb-3" style={{ color: "#154D52" }}>
        Professional Skills
      </h2>
      <div className="row newrow">
        <div className="col-md-3 col-sm-6">
          <div className="progress blue">
            <span className="progress-left">
              <span className="progress-bar"></span>
            </span>
            <span className="progress-right">
              <span className="progress-bar"></span>
            </span>
            <div className="progress-value">HTML</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="progress yellow">
            <span className="progress-left">
              <span className="progress-bar"></span>
            </span>
            <span className="progress-right">
              <span className="progress-bar"></span>
            </span>
            <div className="progress-value">CSS</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="progress blue">
            <span className="progress-left">
              <span className="progress-bar"></span>
            </span>
            <span className="progress-right">
              <span className="progress-bar"></span>
            </span>
            <div className="progress-value">Java Script</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="progress blue">
            <span className="progress-left">
              <span className="progress-bar"></span>
            </span>
            <span className="progress-right">
              <span className="progress-bar"></span>
            </span>
            <div className="progress-value">Node.js</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="progress yellow">
            <span className="progress-left">
              <span className="progress-bar"></span>
            </span>
            <span className="progress-right">
              <span className="progress-bar"></span>
            </span>
            <div className="progress-value">MongoDb</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="progress yellow">
            <span className="progress-left">
              <span className="progress-bar"></span>
            </span>
            <span className="progress-right">
              <span className="progress-bar"></span>
            </span>
            <div className="progress-value">React</div>
          </div>
        </div>
      </div>
    </div>
  );
}
