import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const RegistarationForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required('⚠️'),
    email: Yup.string().email('Enter email please').required('⚠️'),
    password: Yup.string().min(7, 'Min 7 characters').required('⚠️'),
  });

  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.boxRegForm}>
          <div className={css.divRegistration}>
            <label className={css.labelRegForm}>
              UserName:
              <Field className={css.fieldRegForm} type="text" name="name" />
              <ErrorMessage
                className={css.errorMessageRegister}
                name="name"
                component="div"
              />
            </label>
            <label className={css.labelRegForm}>
              Email:
              <Field className={css.fieldRegForm} type="email" name="email" />
              <ErrorMessage
                className={css.errorMessageRegister}
                name="email"
                component="div"
              />
            </label>
            <label className={css.labelRegForm}>
              Password:
              <Field
                className={css.fieldRegForm}
                type="password"
                name="password"
              />
              <ErrorMessage
                className={css.errorMessageRegister}
                name="password"
                component="div"
              />
            </label>

            <button className={css.btnRegForm} type="submit">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistarationForm;
