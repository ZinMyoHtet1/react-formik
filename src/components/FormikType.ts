export type InputProps = {
  label: string;
  name: string;
  type: string;
} & React.ComponentProps<"input">;

export type TextAreaProps = {
  label: string;
  name: string;
} & React.ComponentProps<"textarea">;

type SelectOptionProps = {
  key: string;
  value: string;
};

export type SelectProps = {
  label: string;
  name: string;
  options: SelectOptionProps[];
} & React.ComponentProps<"select">;

export type RadioProps = {
  label: string;
  name: string;
  options: SelectOptionProps[];
} & React.ComponentProps<"input">;

type ControlProps = {
  control: string;
};

type ControlInputProps = ControlProps & InputProps;

type ControlTextAreaProps = ControlProps & TextAreaProps;

type ControlSelectProps = ControlProps & SelectProps;

export type FormContolProps =
  | ControlInputProps
  | ControlTextAreaProps
  | ControlSelectProps
  | (ControlProps & any);
