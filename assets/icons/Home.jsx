import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent({ title, isFocused, props }) {
  return (
    <Svg
      data-icon="home-alt"
      data-prefix="fal"
      viewBox="0 0 576 512"
      height={title || isFocused ? "24" : "28"}
      width={title || isFocused ? "24" : "28"}
      color={isFocused ? "#FF8000" : "#444D52"}
      {...props}
    >
      <Path
        fill="currentColor"
        d="M288 115L69.47 307.71c-1.62 1.46-3.69 2.14-5.47 3.35V496a16 16 0 0016 16h128a16 16 0 0016-16V368a16 16 0 0116-16h96a16 16 0 0116 16v128a16 16 0 0016 16h128a16 16 0 0016-16V311.1c-1.7-1.16-3.72-1.82-5.26-3.2zm282.69 121.28l-255.94-226a39.85 39.85 0 00-53.45 0l-256 226a16 16 0 00-1.21 22.6L25.5 282.7a16 16 0 0022.6 1.21L277.42 81.63a16 16 0 0121.17 0L527.91 283.9a16 16 0 0022.6-1.21l21.4-23.82a16 16 0 00-1.22-22.59z"
      />
    </Svg>
  );
}

export default SvgComponent;
