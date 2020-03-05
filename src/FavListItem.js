import React from "react";

function FavListItem(props) {
  const instructions = props.instructions.slice(0, 80) + "...";
  return (
    <div>
      <div
        className="card mb-3 desktop"
        style={{ width: "540px" }}
        key={props.key}
      >
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
              <p className="card-text">
                <small className="text-muted">{props.category}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card mb-3 mobile"
        style={{ maxWidth: "540px" }}
        key={props.key}
      >
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
              <p className="card-text">
                <small className="text-muted">{props.category}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavListItem;
