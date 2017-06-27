// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return <div>
      <h1>{this.props.name}</h1>
      <p>{this.props.producer}</p>
      <p>{this.props.hasWatermark.toString()}</p>
      <p>{this.props.color}</p>
      <p>{this.props.weight}</p>
    </div>
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: weightCheck
}

function weightCheck(props, propName, componentName) {
  let num = props[propName];
  if(num === undefined)
    return new Error('Not a number.');
  else if (isNaN(num)){
    return new Error
  }
  else if (num < 80 || num > 300){
    return new Error('Too damn fat!')
  }
  else {
    return null;
  }
}

export default Product;
