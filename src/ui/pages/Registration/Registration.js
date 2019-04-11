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
  RadioWithText,
} from '@ui/molecules'
import { Formik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  Email: '',
  about: '',
  gender: '',
  term: false,
}

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'min 2 characters')
    .max(20, 'max 20 characters')
    .required('Please enter your first name'),
  lastName: Yup.string()
    .min(2, 'min 2 characters')
    .max(20, 'max 20 characters')
    .required('Please enter your last name'),
  phone: Yup.string()
    .matches(/^(([0-9]){10})$/, {
      excludeEmptyString: true,
      message: 'wrong number',
    })
    .required('Please enter your phone'),
  Email: Yup.string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      { excludeEmptyString: true, message: 'wrong Email' },
    )
    .required('Please enter your Email'),
  gender: Yup.string().required('Please select your gender'),
  about: Yup.string()
    .min(5, 'min 5 characters')
    .max(200, 'max 200 characters')
    .required('Please tell about yourself'),
  term: Yup.boolean()
    .oneOf([true], 'Must Accept Terms and Conditions')
    .required('Please accept terms'),
})

export const Registration = props => {
  return (
    <PageTemplate>
      <Header title="Регистрация" icon="back" />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={values => console.log('values', values)}
        render={props => (
          <form>
            <TextField
              name="firstName"
              label="Ваше имя"
              placeholder="Иван"
              value={props.values.firstName}
              onChange={value => props.setFieldValue('firstName', value)}
              onBlur={props.handleBlur}
              error={props.touched.firstName && props.errors.firstName}
            />
            <TextField
              name="lastName"
              label="Ваша фамилия"
              placeholder="Иванов"
              value={props.values.lastName}
              onChange={value => props.setFieldValue('lastName', value)}
              onBlur={props.handleBlur}
              error={props.touched.lastName && props.errors.lastName}
            />
            <TextField
              name="phone"
              label="Номер телефона"
              placeholder="XXXXXXXXXX"
              value={props.values.phone}
              startAdornment="+7"
              onChange={value => props.setFieldValue('phone', value)}
              onBlur={props.handleBlur}
              error={props.touched.phone && props.errors.phone}
            />
            <TextField
              name="Email"
              label="Email"
              placeholder="simple@mail.com"
              value={props.values.Email}
              onChange={value => props.setFieldValue('Email', value)}
              onBlur={props.handleBlur}
              error={props.touched.Email && props.errors.Email}
            />
            <RadioWithText
              name="gender"
              label="Пол"
              infos={[
                { value: 'male', label: 'муж.' },
                { value: 'female', label: 'жен.' },
              ]}
              value={props.values.gender}
              onPress={value => props.setFieldValue('gender', value)}
              error={props.touched.gender && props.errors.gender}
            />
            <TextareaField
              name="about"
              label="Немного о себе"
              placeholder="Ваше хобби, любимые книги и т.д."
              value={props.values.about}
              onChange={value => props.setFieldValue('about', value)}
              onBlur={props.handleBlur}
              error={props.touched.about && props.errors.about}
            />
            <HBox height={19} />
            <CheckboxWithText
              name="term"
              children="Со всеми условиями согласен"
              value={props.values.term}
              onPress={() => {
                props.values.term = !props.values.term
                props.setFieldValue('term', props.values.term)
              }}
              error={props.touched.term && props.errors.term}
            />
            <HBox height={24} />
            <ButtonAccent
              disabled={!props.isValid}
              children="Отправить"
              onPress={props.handleSubmit}
            />
          </form>
        )}
      />
    </PageTemplate>
  )
}
