import React from "react";
import PropTypes from "prop-types";
import classes from "./Car.css";
import withClass from "../hoc/withClass"; 

class Car extends React.Component {
  render() {
    console.log('Car render');
    const inputClasses = [classes.input];
    if (this.props.name !== '') {
      inputClasses.push(classes.green); 
    } else {
      inputClasses.push(classes.red); 
    }

    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold); 
    }

    return (
      <div className="Car">
        <h3>Дорамы Имя: {this.props.name}</h3>
        <p>Дата выхода: <strong>{this.props.year}</strong></p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

export default withClass(Car, classes.Car); 

