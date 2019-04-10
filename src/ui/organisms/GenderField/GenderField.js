import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '@ui/theme'
import { FieldContainer, HBox, Row, VBox } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'
import { FormLabel, RadioWithText } from '@ui/molecules'

export const GenderField = withTheme(
  ({
    theme,
    firstValue,
    secondValue,
    firstDisabled,
    secondDisabled,
    firstError,
    secondError,
    onPress,
    firstChildren,
    secondChildren,
    tip,
  }) => (
    <FieldContainer>
      <FormLabel>Пол</FormLabel>
      <HBox height={theme.paddings.half} />
      <Row>
        <RadioWithText
          children={firstChildren}
          value={firstValue}
          error={firstError}
          disabled={firstDisabled}
          onPress={typeof children === 'string' ? undefined : onPress}
        />
        <VBox />
        <RadioWithText
          children={secondChildren}
          value={secondValue}
          error={secondError}
          disabled={secondDisabled}
          onPress={typeof children === 'string' ? undefined : onPress}
        />
      </Row>
      {firstError || secondError ? (
        <InputError>{firstError || secondError}</InputError>
      ) : (
        <InputTip>{tip}</InputTip>
      )}
    </FieldContainer>
  ),
)

GenderField.propTypes = {
  firstValue: PropTypes.string,
  secondValue: PropTypes.string,
  firstDisabled: PropTypes.bool,
  secondDisabled: PropTypes.bool,
  firstError: PropTypes.string,
  secondError: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  firstChildren: PropTypes.string,
  secondChildren: PropTypes.string,
  tip: PropTypes.string,
}
