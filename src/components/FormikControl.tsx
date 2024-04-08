import Input from "./FormComponents/Input";
import Radio from "./FormComponents/Radio";
import Select from "./FormComponents/Select";
import TextArea from "./FormComponents/TextArea";
import { FormContolProps } from "./FormikType";

function FormikControl({ control, ...rest }: FormContolProps) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
