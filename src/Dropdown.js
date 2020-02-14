import React from "react";

function Dropdown(props) {
  return (
    <div className="dropdown">
      <button
        className={props.classNameButton}
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={props.handlerMarginTop}
      >
        Choose <span className="desktop">recipe </span>category
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <button
          className="dropdown-item"
          type="button"
          onClick={props.handleClick}
          name="random"
        >
          Random
        </button>
        {props.categories.map(item => {
          return (
            <button
              className="dropdown-item"
              type="button"
              key={item}
              name={item}
              onClick={props.handleClick}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
