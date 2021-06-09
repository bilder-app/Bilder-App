import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent({ title, isFocused, props }) {
  return (
    <Svg
      data-icon="home-alt"
      viewBox="0 0 576 512"
      stroke={isFocused ? "#FF8000" : "#444D52"}
      height={title || isFocused ? "24" : "28"}
      width={title || isFocused ? "24" : "28"}
      color={isFocused ? "#FF8000" : "#444D52"}
      {...props}
    >
      <Path
        fill="currentColor"
        strokeWidth="15"
        d="M475.425 200.225L262.092 4.669c-6.951-6.359-17.641-6.204-24.397.35L36.213 200.574a17.788 17.788 0 00-5.399 12.758v280.889c0 9.819 7.958 17.778 17.778 17.778H196.74c9.819 0 17.778-7.959 17.778-17.778v-130.37h82.963v130.37c0 9.819 7.958 17.778 17.778 17.778h148.148c9.819 0 17.778-7.953 17.778-17.778V213.333c0-4.984-2.086-9.736-5.76-13.108zm-29.796 276.219H333.037v-130.37c0-9.819-7.959-17.778-17.778-17.778H196.741c-9.819 0-17.778 7.959-17.778 17.778v130.37H66.37V220.853L250.424 42.216 445.63 221.155v255.289z"
      />
    </Svg>
  );
}

export default SvgComponent;
