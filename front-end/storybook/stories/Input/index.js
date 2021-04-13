import React from "react";
import { TextInput } from "react-native";

export default function Input({ variant, style, props }) {
  return <TextInput 
    style={{ ...variants[variant], ...style }} 
    {...props}
  />;
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
    borderColor: "#E49012",
    borderWidth: 2,
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
