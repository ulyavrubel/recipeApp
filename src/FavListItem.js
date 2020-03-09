import React, { useState } from "react";
import VideoComponent from "./VideoComponent";

function FavListItem(props) {
  const instructions = props.instructions.slice(0, 75) + "...";
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div>
      <div className="card mb-3 desktop" style={{ width: "400px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              onClick={props.onClick}
              id={props.id}
              src={props.img}
              className="card-img"
              alt="..."
            ></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>

              <p className="card-text">{instructions}</p>
              <button type="button" className="close" onClick={props.onDelete}>
                <span id={props.db} aria-hidden="true">
                  &times;
                </span>
              </button>
              <p className="card-text">
                <small className="text-muted">{props.category}</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion mobile" id="accordionExample">
        <div className="card accordion-card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <img
                id={props.id}
                src={props.img}
                className="card-img"
                alt="..."
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                onClick={handleShow}
                role="button"
              ></img>
            </h2>
            <div className="card-header-container2">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{instructions}</p>
              <button type="button" className="close" onClick={props.onDelete}>
                <span id={props.db} aria-hidden="true">
                  &times;
                </span>
              </button>
              <p className="card-text">
                <small className="text-muted">{props.category}</small>
              </p>
            </div>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
            style={show ? { display: "block" } : { display: "none" }}
          >
            <div className="card-body">
              <div>
                <ul className="list-unstyled">{props.ingredients}</ul>
              </div>
              {props.instructions}
              <div className="row justify-content-md-center video-div">
                <VideoComponent
                  loaded={Boolean(props)}
                  url={props.strYoutube}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavListItem;
