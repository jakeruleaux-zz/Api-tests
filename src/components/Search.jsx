import React from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { _origin, _destination, _adults, _children, _date } = this.refs;
    const {dispatch} =this.props;
    const action = {
      origin: _origin.value,
      destination: _destination.value,
      adults: _adults.value,
      children: _children.value,
      date: _date.value
    }
    dispatch(action);

}
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Origin"
            type="text"
            ref="_origin"/>
          <input
            placeholder="destination"
            type="text"
            ref="_destination"/>
          <input
            placeholder="Adults"
            type="number"
            refs="_adults"/>
          <input
            placeholder="Childern"
            type="number"
            refs="_children"/>
          <input
            placeholder="departure"
            type="date"
            refs="_date"/>
          <button type="Submit">search</button>
        </form>
      </div>
    );
  }
}

Search = connect()(Search);

export default Search;
