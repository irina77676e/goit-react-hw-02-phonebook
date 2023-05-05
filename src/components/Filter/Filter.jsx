import React from 'react';
import { PropTypes } from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    <input type="text" value={value} onChange={onChange} />
  </label>
);
export default Filter;

Filter.prototype = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};
