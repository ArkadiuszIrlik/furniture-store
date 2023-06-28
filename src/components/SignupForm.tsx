import { Formik, Form } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useScript } from '@uidotdev/usehooks';
import {
  TextInput,
  PasswordInput,
  FormObserver,
  PasswordStrengthDisplay,
} from '.';

function SignupForm() {
  // Uses dropbox's zxcvbn password strength estimator
  // https://github.com/dropbox/zxcvbn
  const scriptStatus = useScript('src/scripts/zxcvbn.js');

  const [password, setPassword] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);

  function handlePasswordInput({ values, touched }) {
    if (touched.password) {
      setPasswordTouched(true);
    }
    setPassword(values.password);
  }
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Please enter a valid email address, e.g. mail@eleva.com')
          .defined()
          .required('Please enter an email'),
        password: Yup.string()
          .min(8, 'Password must be at least 8 characters long')
          .max(120, "Password can't be longer than 120 characters")
          .defined()
          .required('Please enter a password'),
      })}
    >
      <Form className="w-full flex flex-col gap-2">
        <div>
          <TextInput label="EMAIL" name="email" id="email-input" type="email" />
        </div>
        <div>
          <PasswordInput label="PASSWORD" name="password" id="password-input" />
        </div>
        {scriptStatus === 'ready' && passwordTouched && (
          <div className="">
            <PasswordStrengthDisplay password={password} />
          </div>
        )}
        <FormObserver onChange={handlePasswordInput} />
      </Form>
    </Formik>
  );
}
export default SignupForm;
