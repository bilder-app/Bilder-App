import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../../atoms/Text/Text";

function Tab({ text, children, selected = false, style = {}, ...otherProps }) {
  return (
    <TouchableOpacity
      {...otherProps}
      style={{
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        ...style
      }}
    >
      {children ? children : <Text style={{ fontSize: 17 }}>{text}</Text>}
      {selected && (
        <View
          style={{
            backgroundColor: "#ff8000",
            minHeight: 2,
            height: 2,
            marginTop: 5,
            alignSelf: "stretch"
          }}
        />
      )}
    </TouchableOpacity>
  );
}

export default Tab;
