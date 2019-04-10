import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '@ui/theme'
import { IconCheckboxOn, IconCheckboxOff } from '@ui/atoms'

export const CheckboxField = withTheme(
  ({ value, disabled, error, onPress, theme, name }) => (
    <div name={name} onClick={onPress && !disabled ? onPress : undefined}>
      {value ? (
        <IconCheckboxOn
          color={disabled ? theme.pallete.whiteSmoke : undefined}
        />
      ) : (
        <IconCheckboxOff color={error ? theme.pallete.errorColor : undefined} />
      )}
    </div>
  ),
)

CheckboxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
}
