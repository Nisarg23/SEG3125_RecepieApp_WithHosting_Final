import React from 'react';
import  {Formik} from 'formik';
import * as EmailValidator from 'email-validator';


const Login = () => {
  return (
    <div
      style={{
        backgroundColor: '#e6f9ff',
      }}
    >
      <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius:'20px',
        margin: '0 auto',
        width: '33%',
        height: '80vh'
      }}>

<Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    
    //********Handling validation messages yourself*******/
    validate={values => {
      let errors = {};
      if (values.email != "admin@admin.com"){
        errors.email = "wrong email";
      }
      else if (!values.email) {
        errors.email = "Required";
      } else if (!EmailValidator.validate(values.email)) {
        errors.email = "Invalid email address";
      }

      const passwordRegex = /(?=.*[0-9])/;
      if (values.password != "admin"){
        errors.password = "wrong password";
      }
      else if (!values.password) {
        errors.password = "Required";
      } 

      return errors;
    }}
    //********Using Yum for validation********/

    // validationSchema={Yup.object().shape({
    //   email: Yup.string()
    //     .email()
    //     .required("Required"),
    //   password: Yup.string()
    //     .required("No password provided.")
    //     .min(8, "Password is too short - should be 8 chars minimum.")
    //     .matches(/(?=.*[0-9])/, "Password must contain a number.")
    // })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
            style={{
              width: '100%',
              backgroundColor: '#8dcde2',
              color: 'white',
              padding: '14px 20px',
              margin: '20px 0',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
            style={{
              width: '100%',
              backgroundColor: '#8dcde2',
              color: 'white',
              padding: '14px 20px',
              margin: '20px 0',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          />
          {errors.password && touched.password && (
            <div textColor="red" className="input-feedback">{errors.password}</div>
          )}
          <input type="submit" disabled={isSubmitting}  style={{
          width: '100%',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '14px 20px',
          margin: '20px 0',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}/>
        </form>
      );
    }}
  </Formik>



        

       


      </div>
    </div>
  );
};

export default Login;
