import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { GenderField } from './GenderField'

storiesOf('ui/organisms', module).add('GenderField', () => (
  <GenderField
    firstChildren={text('first value', 'муж.')}
    secondChildren={text('second value', 'жен.')}
    firstValue={boolean('first checked', false)}
    secondValue={boolean('second checked', false)}
    firstError={text('first error', '')}
    secondError={text('second error', '')}
    action={action('action')}
    firstDisabled={boolean('first disabled', false)}
    secondDisabled={boolean('second disabled', false)}
    tip={text('tip', '')}
  />
))
