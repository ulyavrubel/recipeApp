import React from "react";
import Dropdown from "./Dropdown";

class UnloadedBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      unloadedMarginTop: "25vh"
    };
    this.handlerMarginTop = this.handlerMarginTop.bind(this);
  }

  componentDidMount() {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data.categories.map(item => item.strCategory)
        });
      });
  }

  handlerMarginTop() {
    this.setState({ unloadedMarginTop: "5vh" });
  }

  render() {
    return (
      <div
        className="unloaded"
        style={{ marginTop: this.state.unloadedMarginTop }}
      >
        <h1 className="display-3">Random recipe generator</h1>
        <p>
          Choose category and hit a button to get one of the delicious recipes
        </p>
        <p>{this.props.state.testText}</p>
        <Dropdown
          categories={this.state.categories}
          handleClick={this.props.handleClick}
          handlerMarginTop={this.handlerMarginTop}
          classNameButton="btn btn-primary dropdown-toggle"
        />
      </div>
    );
  }
}

export default UnloadedBlock;
