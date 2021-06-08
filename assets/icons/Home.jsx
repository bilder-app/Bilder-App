import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent({ title, isFocused, props }) {
  return (
    <Svg
      data-icon="home-alt"
      data-prefix="fal"
      viewBox="0 0 576 512"
      height={ title || isFocused ? "24" : "28" }
      width={ title || isFocused ? "24" : "28" }
      color={ isFocused ? '#FF8000' : '#444D52' }
      {...props}
    >
      <Path
        fill="currentColor"
        d="M541 229.16l-232.85-190a32.16 32.16 0 00-40.38 0L35 229.16a8 8 0 00-1.16 11.24l10.1 12.41a8 8 0 0011.2 1.19L96 220.62v243a16 16 0 0016 16h128a16 16 0 0016-16v-128l64 .3V464a16 16 0 0016 16l128-.33a16 16 0 0016-16V220.62L520.86 254a8 8 0 0011.25-1.16l10.1-12.41a8 8 0 00-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 00-15.95-16l-96-.27a16 16 0 00-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"
      />
    </Svg>
  )
}

export default SvgComponent