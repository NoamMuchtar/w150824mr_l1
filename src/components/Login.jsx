import { useFormik } from "formik";
import * as yup from "yup";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("Email required").email(),
      password: yup
        .string()
        .required()
        .min(10, "Password to short! Shold be at least 10 charcters")
        .matches(/[@$!%*#?&]+/, "One special character"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          autoComplete="off"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-danger">{formik.errors.email}</p>
        )}
        <br />
        <input
          type="password"
          autoComplete="off"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-danger">{formik.errors.password}</p>
        )}
        <br />
        <button
          type="submit"
          className="btn btn-dark"
          disabled={!formik.dirty || !formik.isValid}
        >
          Login
        </button>
      </form>
    </>
  );
}

export default Login;

// formik.dirty  - התפקיד למנוע לחיצה על הכפתור טרם הגולש הזין קלט מסויים
// formik.dirty = false // true ==> !formik.dirty

//formik.isValid - האם הולאדציה תקינה אנחנו רוצים לא לאפשר לחיצה על הכפתור כל עוד הולדאציה לא תקינה
// formik.isValid = false; // true ==> !formik.isValid
