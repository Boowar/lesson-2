import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '@ui/theme'
import { IconRadioOn, IconRadioOff } from '@ui/atoms'

export const RadioField = withTheme(
  ({ value, checked, disabled, error, onPress, theme }) => (
    <div onClick={onPress && !disabled ? onPress : undefined}>
      {checked ? (
        <IconRadioOn color={disabled ? theme.pallete.whiteSmoke : undefined} />
      ) : (
        <IconRadioOff color={error ? theme.pallete.errorColor : undefined} />
      )}
    </div>
  ),
)

RadioField.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
}
