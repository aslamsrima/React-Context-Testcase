import React from 'react';
import { useFormik } from 'formik';
import styles from '../styles/Auth.module.css';
import { loginSchema } from '../services/validation';
import { mockLogin } from '../services/mockAPIs';

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const res = await mockLogin(values);
      console.log('res', res);
    },
  });

  return (
    <div className={styles.align}>
      <div className={`${styles.grid} ${styles.alignItem}`}>
        <div className={styles.register}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.siteLogo}
            width="56"
            height="84"
            viewBox="77.7 214.9 274.7 412"
          >
            <defs>
              <linearGradient id="a" x1="0%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#8ceabb" />
                <stop offset="100%" stopColor="#378f7b" />
              </linearGradient>
            </defs>
            <path
              fill="url(#a)"
              d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"
            />
          </svg>

          <h2>Sign In</h2>

          <form action="" onSubmit={formik.handleSubmit} method="post" className={styles.authForm}>
            <div className={styles.formField}>
              <input
                name="email"
                type="email"
                placeholder="info@mailaddress.com"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email && (
                <span className={styles.errorText}>{formik.errors.email}</span>
              )}
            </div>

            <div className={styles.formField}>
              <input
                name="password"
                type="password"
                placeholder="••••••••••••"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.touched.password && formik.errors.password && (
                <span className={styles.errorText}>{formik.errors.password}</span>
              )}
            </div>

            <div className={styles.formField}>
              <input className={styles.cursorPointer} type="submit" value="Login" />
            </div>
          </form>

          <p>
            Create new account? <a href="/sign-up">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
