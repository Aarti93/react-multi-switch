import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import './App.css';

class MultiSwitch extends Component {
  constructor() {
    super();
    this.state = {
      selected: ""
    }
  }
  static propTypes = {
    parts: PropTypes.array,
    handleSelect: PropTypes.func,
    theme: PropTypes.array,
    default: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    theme: PropTypes.shape({
      selected: PropTypes.string,
      unselected: PropTypes.string,
      background: PropTypes.string
    })
  }
  componentDidMount() {
    if (this.props.default) {
      this.setState({ selected: this.props.default });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.default) {
      this.setState({ selected: nextProps.default });
    }
  }
  isSelected(part) {
    return this.state.selected === part;
  }
  handleSelect = (event) => {
    const {handleSelect, parts} = this.props;
    const selectedIndex = event.target.dataset.index;
    const selected = parts[selectedIndex];
    this.setState({ selected });
    if (handleSelect) {
      handleSelect(event, selected);
    }
  }
  renderParts() {
    return this.props.parts.map((part, index) => (
      <div key={index} className={classNames("part", this.props.size, { selected: this.isSelected(part) })} data-index={index}></div>
    ));
  }
  render() {
    return (
      <div className="multi-switch">
        <div className="parts" onClick={this.handleSelect}>
          {this.renderParts()}
        </div>
      </div>
    );
  }
}

export default MultiSwitch;
