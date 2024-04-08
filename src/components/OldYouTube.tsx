import { useFormik } from "formik";
import * as yup from "yup";
// type ErrorType = {
//   name: string;
//   email: string;
//   channel: string;
// };

function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log("Form submitted");
    },
    // validate: (values) => {
    //   let errors = {} as ErrorType;

    //   if (!values.name) errors.name = "Required";

    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //   ) {
    //     errors.email = "Not Valid Email";
    //   }
    //   if (!values.channel) errors.channel = "Required";
    //   return errors;
    // },
    validationSchema: yup.object({
      name: yup.string().required("Required!"),
      email: yup.string().email("Not Valid Email Format").required("Required"),
      channel: yup.string().required("Required"),
    }),
  });
  console.log("Form touched", formik.touched);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            // name="name"
            id="name"
            // onChange={formik.handleChange}
            // value={formik.values.name}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("name")}
          />
        </div>
        {formik.touched?.name && formik.errors.name && (
          <div className="error-message">{formik.errors.name}</div>
        )}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...formik.getFieldProps("email")} />
        </div>
        {formik.touched?.email && formik.errors.email && (
          <div className="error-message">{formik.errors.email}</div>
        )}

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...formik.getFieldProps("channel")}
          />
        </div>
        {formik.touched?.channel && formik.errors.channel && (
          <div className="error-message">{formik.errors.channel}</div>
        )}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default YoutubeForm;
