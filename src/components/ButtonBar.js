import React from "react";

class ButtonBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="button-bar-container">
        <button
          className="navigation-buttons"
          onClick={this.props.handlePrevious}
        >{`< Previous`}</button>
        <div id="function-button-container">
          <button className="function-buttons" onClick={this.props.handleEdit}>
            Edit
          </button>
          <button
            className="function-buttons"
            onClick={this.props.handleDelete}
          >
            Delete{" "}
          </button>
          <button className="function-buttons" onClick={this.props.handleNew}>
            New{" "}
          </button>
        </div>
        <button className="navigation-buttons" onClick={this.props.handleNext}>
          {`Next >`}{" "}
        </button>
      </div>
    );
  }
}

export default ButtonBar;
