import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput, PasswordInput } from '.';

function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Please enter a valid email address, e.g. mail@eleva.com')
          .defined()
          .required('Please enter your email'),
        password: Yup.string()
          .min(8, 'Password must be at least 8 characters long')
          .max(120, "Password can't be longer than 120 characters")
          .defined()
          .required('Please enter your password'),
      })}
    >
      <Form className="w-full flex flex-col gap-2">
        <div>
          <TextInput label="EMAIL" name="email" id="email-input" type="email" />
        </div>
        <div>
          <PasswordInput label="PASSWORD" name="password" id="password-input" />
        </div>
      </Form>
    </Formik>
  );
}
export default LoginForm;
