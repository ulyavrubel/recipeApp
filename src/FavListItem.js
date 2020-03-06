import React, { useState } from "react";

function FavListItem(props) {
  const instructions = props.instructions.slice(0, 80) + "...";
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div>
      <div className="card mb-3 desktop" style={{ width: "540px" }}>
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
      {/* //mobile */}
      {/* <div
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
      </div> */}
      {/* <div className="mobile mobile-list">
        <div className="mobile-card">
          <a
            data-toggle="collapse"
            href="#example"
            role="button"
            aria-expanded="false"
            aria-controls="example"
            role="button"
          >
            <img
              style={{ width: "150px" }}
              onClick={props.onClick}
              id={props.id}
              src={props.img}
              className="card-img"
              alt="..."
            ></img>
          </a>

          <div className="mobile-card-header">
            <h5 className="card-title">"example"</h5>
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

        <div className="collapse" id={props.name}>
          <div className="card card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div> */}

      <div className="accordion mobile" id="accordionExample">
        <div className="card accordion-card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <img
                style={{ width: "150px" }}
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
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavListItem;
