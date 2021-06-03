import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 239 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#prefix__pattern0)" d="M0 0h239v83H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.00556 0 0 .016 0 -.012)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={180}
          height={64}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
