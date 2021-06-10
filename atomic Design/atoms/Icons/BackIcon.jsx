import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent({ width, height, props }) {
  return (
    <Svg
      data-prefix="far"
      data-icon="truck"
      viewBox="0 0 192 512"
      width={width}
      height={height}
      color="#444D52"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z"
      />
    </Svg>
  );
}

export default SvgComponent;
