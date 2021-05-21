import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../../atoms/Text/Text";

function Tab({ children, selected = false, style = {}, ...otherProps }) {
  return (
    <TouchableOpacity
      {...otherProps}
      style={{ display: "flex", flexGrow: 1, alignItems: "center", ...style }}
    >
      {typeof children === "string" ? (
        <Text style={{ fontSize: 17 }}>{children}</Text>
      ) : (
        children
      )}
      {selected && (
        <View
          style={{
            backgroundColor: "#ff8000",
            height: 2,
            width: "100%",
            marginTop: 5
          }}
        />
      )}
    </TouchableOpacity>
  );
}

export default Tab;
