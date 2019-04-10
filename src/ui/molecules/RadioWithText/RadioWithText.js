import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { VBox, Flex1 } from '@ui/atoms'
import { Body2 } from '@ui/atoms/Typography'
import { RadioField } from '@ui/molecules'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const RadioWithText = ({
  children,
  value,
  onPress,
  error,
  disabled,
}) => {
  return (
    <Container>
      <RadioField
        value={value}
        error={error}
        disabled={disabled}
        onPress={typeof children === 'string' ? undefined : onPress}
      />
      <VBox />
      {typeof children === 'string' ? (
        <Flex1>
          <Body2>{children}</Body2>
        </Flex1>
      ) : (
        children
      )}
    </Container>
  )
}

RadioWithText.propTypes = {
  children: PropTypes.node,
  value: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
}
