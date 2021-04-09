import React from "react";
import { TextInput } from "react-native";

export default function Input({ variant }) {
  return <TextInput style={{ ...variants[variant] }} autoFocus={true} />;
}

const variants = {
  input: {
    backgroundColor: "#F6F6F6",
    height: 40,
    width: "100%",
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  form: {
    backgroundColor: "#fff",
    height: 60,
    width: "100%",
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  amount: {
    backgroundColor: "#fff",
    height: 40,
    width: "8%",
    textAlign: "center",
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
};

<Button
  ariaLabel={text("aria-label", "aria-label")}
  icon={PlusCircleIcon}
  iconPosition={select("iconPosition", ["start", "end"])}
  appearance={select("appearance", [
    "default",
    "primary",
    "secondary",
    "danger",
  ])}
  disabled={boolean("disabled", false)}
  onClick={action("onClick")}
  spinner={boolean("spinner", false)}
>
  {text("children", "Text")}
</Button>;
