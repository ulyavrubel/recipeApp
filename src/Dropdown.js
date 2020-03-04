import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

function Dropdown(props) {
  const { categories } = useContext(AuthContext);

  return (
    <div className={props.direction}>
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
      <div
        className="dropdown-menu"
        style={{ transform: "none" }}
        aria-labelledby="dropdownMenuButton"
      >
        <button
          className="dropdown-item"
          type="button"
          onClick={props.handleClick}
          name="random"
        >
          Random
        </button>
        {categories
          ? categories.map(item => {
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
            })
          : null}
      </div>
    </div>
  );
}

export default Dropdown;
