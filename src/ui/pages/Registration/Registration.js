import React from 'react'
import PropTypes from 'prop-types'

import { theme } from '@ui/theme'
import { PageTemplate, HBox } from '@ui/atoms'
import {
  Header,
  TextField,
  TextareaField,
  CheckboxWithText,
  ButtonAccent,
} from '@ui/molecules'
import { RadiosField } from '@ui/organisms'

export const Registration = props => {
  return (
    <PageTemplate>
      <Header title="Регистрация" icon="back" />
      <TextField label="Ваше имя" placeholder="Иван" />
      <TextField label="Ваша фамилия" placeholder="Иванов" />
      <TextField
        label="Номер телефона"
        placeholder="XXXXXXXXXX"
        startAdornment="+7"
      />
      <TextField label="Email" placeholder="simple@mail.com" />
      <RadiosField label="Пол" firstChildren="муж." secondChildren="жен." />
      <TextareaField
        label="Немного о себе"
        placeholder="Ваше хобби, любимые книги и т.д."
      />
      <HBox height="19" />
      <CheckboxWithText children="Со всеми условиями согласен" value="true" />
      <HBox height="24" />
      <ButtonAccent disabled="true" children="Отправить" />
    </PageTemplate>
  )
}

Registration.propTypes = {}
