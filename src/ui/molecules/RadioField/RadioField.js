import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '@ui/theme'
import { IconRadioOn, IconRadioOff } from '@ui/atoms'

export const RadioField = withTheme(
  ({ value, disabled, error, onPress, theme, name }) => (
    <div name={name} onClick={onPress && !disabled ? onPress : undefined}>
      {value ? (
        <IconRadioOn color={disabled ? theme.pallete.whiteSmoke : undefined} />
      ) : (
        <IconRadioOff color={error ? theme.pallete.errorColor : undefined} />
      )}
    </div>
  ),
)

RadioField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
}
