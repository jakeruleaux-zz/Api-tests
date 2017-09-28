import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Display = ({ dispatch, flight}) => {
  const { origin, destination, adults, children, date } = flight;
  return (
    <div>
      <h1>Flight details</h1>
      <hr/>
      <h1>{origin}</h1>
      <h1>{destination}</h1>
      <h1>{adults}</h1>
      <h1>{children}</h1>
      <h1>{date}</h1>
    </div>
  );
};

Display.propTypes = {
  flight: PropTypes.object,
  origin: PropTypes.string,
  destination: PropTypes.string,
  adults: PropTypes.string,
  children: PropTypes.string,
  date: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  const flight = state
}
export default Display;
