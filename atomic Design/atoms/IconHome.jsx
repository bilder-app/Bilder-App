import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width="30"
      height="30"
      color="green"
      aria-hidden="true"
      data-prefix="far"
      data-icon="home"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      className="prefix__svg-inline--fa prefix__fa-home prefix__fa-w-18 prefix__fa-5x"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M570.24 247.41L512 199.52V104a8 8 0 00-8-8h-32a8 8 0 00-7.95 7.88v56.22L323.87 45a56.06 56.06 0 00-71.74 0L5.76 247.41a16 16 0 00-2 22.54L14 282.25a16 16 0 0022.53 2L64 261.69V448a32.09 32.09 0 0032 32h128a32.09 32.09 0 0032-32V344h64v104a32.09 32.09 0 0032 32h128a32.07 32.07 0 0032-31.76V261.67l27.53 22.62a16 16 0 0022.53-2L572.29 270a16 16 0 00-2.05-22.59zM463.85 432H368V328a32.09 32.09 0 00-32-32h-96a32.09 32.09 0 00-32 32v104h-96V222.27L288 77.65l176 144.56z"
      />
    </Svg>
  );
}

export default SvgComponent;
