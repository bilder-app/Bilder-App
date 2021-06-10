import React from "react";
import { View, StyleSheet, Linking } from "react-native";
import Svg, { Path } from "react-native-svg"

import Button from "../../atoms/Button/Button"; 
import Text from "../../atoms/Text/Text";

export default function WhatsappButton (props) {
  const phoneNumber = 5491136575732;
  return(
    <Button 
      style={styles.default} 
      onPress={() => Linking.openURL(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=%C2%A1Hola!%20Necesito%20ayuda%20con`)}
    >
      <Text variant="subtitle1" style={{ color: "#444D52", paddingRight: 10 }}>
        ¿Necesitas ayuda?
      </Text>
      <View style={styles.whatsapp}>
        <Svg
          width={38}
          height={38}
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          {...props}
        >
          <Path
            d="M32.512 5.546C28.992 1.95 24.125 0 19.155 0 8.595 0 .104 8.524.207 18.897c0 3.287.932 6.47 2.485 9.346L0 38l10.044-2.568c2.795 1.541 5.901 2.26 9.008 2.26C29.509 37.692 38 29.168 38 18.795c0-5.033-1.967-9.757-5.488-13.25zM19.155 34.508c-2.795 0-5.591-.719-7.973-2.156l-.62-.309-6.006 1.54 1.553-5.853-.414-.616c-4.556-7.292-2.382-16.947 5.073-21.465 7.455-4.52 17.085-2.362 21.64 5.032 4.556 7.395 2.382 16.946-5.073 21.465-2.381 1.54-5.28 2.362-8.18 2.362zm9.112-11.4l-1.139-.513s-1.657-.72-2.692-1.233c-.104 0-.207-.102-.31-.102-.311 0-.518.102-.726.205 0 0-.103.103-1.553 1.746a.57.57 0 01-.517.308h-.104c-.103 0-.31-.103-.414-.205l-.518-.206c-1.139-.513-2.174-1.13-3.003-1.951-.207-.205-.517-.41-.724-.616-.725-.72-1.45-1.54-1.967-2.465l-.104-.206c-.104-.102-.104-.205-.207-.41 0-.206 0-.411.103-.514 0 0 .415-.513.725-.821.207-.206.31-.514.518-.72.207-.307.31-.718.207-1.026-.104-.514-1.346-3.287-1.657-3.903-.207-.308-.414-.41-.725-.514h-1.138c-.208 0-.414.103-.622.103l-.103.103c-.207.103-.415.308-.622.41-.207.206-.31.411-.517.617-.725.924-1.14 2.054-1.14 3.184 0 .821.208 1.643.518 2.362l.104.308a17.115 17.115 0 003.831 5.238l.414.41c.31.309.622.514.829.822 2.174 1.849 4.659 3.184 7.455 3.903.31.102.724.102 1.035.205h1.035c.518 0 1.14-.205 1.554-.41.31-.206.517-.206.724-.411l.208-.206c.207-.205.414-.308.62-.513.208-.206.415-.411.518-.617.208-.41.311-.924.415-1.437v-.72s-.104-.102-.311-.205z"
            fill="#fff"
          />
        </Svg>
      </View>
    </Button>
  )
}

const styles = StyleSheet.create({
  default: {
    height: 45,
    width: "60%",
    borderRadius: 20,
    bottom: 35,
    position: "absolute",
    right: 30,
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  whatsapp: {
    backgroundColor: "#00E676",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    borderRadius: 25,
  }
})