import { ErrorMessage, Field } from "formik";
import ErrorText from "../ErrorText";
import { InputProps } from "../FormikType";

function Input({ label, name, type, ...rest }: InputProps) {
  //   const { label, name, type, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} type={type} {...rest} />
      <ErrorMessage
        name={name}
        render={(error) => <ErrorText errorMsg={error} />}
      />
    </div>
  );
}

export default Input;
