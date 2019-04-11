import React from 'react'
import PropTypes from 'prop-types'

import { styled, withTheme } from '@ui/theme'
import { HBox, VBox, Flex1 } from '@ui/atoms'
import { Body2, InputError, InputTip } from '@ui/atoms/Typography'
import { RadioField, FormLabel } from '@ui/molecules'

const Container = styled.div`
  min-height: 88px;
  padding-bottom: ${({ theme }) => theme.paddings.main}px;
  display: flex;
  flex-direction: column;
`

const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const RadioWithText = withTheme(
  ({
    theme,
    _storyState,
    name,
    label,
    value,
    infos,
    error,
    tip,
    disabled,
    onPress,
  }) => {
    if (!_storyState) _storyState = { value: '' }

    return (
      <Container>
        <FormLabel>{label}</FormLabel>
        <HBox height={theme.paddings.half} />
        <InnerContainer>
          {infos.map(info => (
            <InfoContainer key={info.value}>
              <div
                onClick={
                  typeof info.label === 'string'
                    ? () => onPress(info.value)
                    : undefined
                }
              >
                <RadioField
                  name={name}
                  value={info.value}
                  checked={
                    (info.value === value && _storyState.value === '') ||
                    info.value === _storyState.value
                  }
                  error={error}
                  disabled={disabled}
                  onPress={typeof info.label === 'string' ? undefined : onPress}
                />
              </div>
              <VBox width={12} />
              {typeof info.label === 'string' ? (
                <Flex1>
                  <Body2>{info.label}</Body2>
                </Flex1>
              ) : (
                info.label
              )}
              <VBox width={30} />
            </InfoContainer>
          ))}
        </InnerContainer>
        <HBox height={theme.paddings.half} />
        {error ? <InputError>{error}</InputError> : <InputTip>{tip}</InputTip>}
      </Container>
    )
  },
)

RadioWithText.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  error: PropTypes.string,
  tip: PropTypes.string,
  disabled: PropTypes.bool,

  onPress: PropTypes.func.isRequired,
}
