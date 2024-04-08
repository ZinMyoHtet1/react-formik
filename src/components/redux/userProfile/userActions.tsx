import { FormDataType } from "./userTypes";

export const formSubmit = (
  formData: FormDataType & { address: string; comments: string }
) => {
  return {
    type: "FORM_SUBMIT",
    payload: formData,
  };
};
