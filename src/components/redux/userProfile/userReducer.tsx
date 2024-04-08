import { UserActionType } from "./userTypes";

const initialState = {
  name: "",
  email: "",
  channel: "",
  social: { facebook: "", instagram: "" },
};

function userReducer(state = initialState, action: UserActionType) {
  switch (action.type) {
    case "FORM_SUBMIT":
      return {
        name: action.payload.name,
        email: action.payload.email,
        channel: action.payload.channel,
        social: {
          facebook: action.payload.social.facebook,
          instagram: action.payload.social.instagram,
        },
      };
  }
}

export default userReducer;
