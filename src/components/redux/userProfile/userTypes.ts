export type SocialType = {
  facebook: string;
  instagram: string;
};
export type FormDataType = {
  name: string;
  email: string;
  channel: string;
  social: SocialType;
};

export type UserActionType = {
  type: "FORM_SUBMIT";
  payload: FormDataType;
};
