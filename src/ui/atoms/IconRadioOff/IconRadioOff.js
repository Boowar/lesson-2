import React from 'react'
import PropTypes from 'prop-types'

export const IconRadioOff = ({ color }) => (
  <svg width={24} height={24} fill="none">
    <circle cx={12} cy={12} r={9.5} stroke={color ? color : '#D3D3D3'} />
  </svg>
)

IconRadioOff.propTypes = {
  color: PropTypes.string,
}
