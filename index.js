'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LazyImg extends Component {
  constuctor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <div className=""></div>
        <img className="" src="" alt="" />
      </div>
    );
  }
}

LazyImg.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string,
  srcset: PropTypes.string,
  alt: PropTypes.string,
};

LazyImg.defaultProps = {
  alt: ''
};

export default LazyImg;