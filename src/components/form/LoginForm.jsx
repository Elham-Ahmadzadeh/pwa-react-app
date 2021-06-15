import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'
import { Input, Feedback } from './css/Input'
import { Button } from './css/Button'
const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`
const Paragraph = styled.p`
  font-size: ${(props) => props.fontSize}px;
`

function LoginForm(props) {
  return (
    <Formik
      initialValues={{ userName: '', password: '' }}
      onSubmit={(values, { setSubmitting }) => {
        console.log('submitting', values, setSubmitting)
        props.history.push('/')
      }}
      validationSchema={yup.object().shape({
        email: yup.string().email().required('required'),
        password: yup
          .string()
          .required('required')
          .min(8, 'password is too short - should be 8 characters minimum.')
          .matches(/(?=.*[0-9])/, 'password must contain a number.')
      })}
    >
      {(props) => {
        const {
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        } = props

        return (
          <Form onSubmit={handleSubmit}>
            <Paragraph fontSize={40}>Login Form</Paragraph>
            <label htmlFor="email">Email</label>
            <Input
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter you email"
              type="email"
              value={values.email || ''}
              className={errors.email && touched.email && 'error'}
            />
            {errors.email && touched.email && (
              <Feedback>{errors.email}</Feedback>
            )}
            <label htmlFor="email">Lösenord </label>
            <Input
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="type your password."
              value={values.password || ''}
              className={errors.password && touched.password && 'error'}
            />
            {errors.password && touched.password && (
              <Feedback> {errors.password}</Feedback>
            )}
            <Button
              value="skicka"
              type="submit"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              Login
            </Button>

            {/*   {values.userName}
          {values.password} */}
          </Form>
        )
      }}
    </Formik>
  )
}

export default LoginForm
