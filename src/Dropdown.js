import React from "react";

function Dropdown(props) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Choose recipe category
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a
          className="dropdown-item"
          href="#"
          name="random"
          onClick={props.handleClick}
        >
          Random
        </a>
        {props.categories.map(item => {
          return (
            <a
              className="dropdown-item"
              href="#"
              key={item}
              name={item}
              onClick={props.handleClick}
            >
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
