import React, { useState } from "react";
import { View } from "react-native";

import IconContainer from "../../atoms/IconContainer/IconContainer";
import Text from "../../atoms/Text/Text";

import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleLeft,
  faHeart as faFillHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Ionicons } from "@expo/vector-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import BackIcon from "../../atoms/Icons/BackIcon";

/*
  children: {
    text: "Carrito",
    id: productId,
  },
  onPress: {
    favouriteAction: function,
    shareAction: function,
  }
*/

export default function Header({
  variant,
  children,
  onPress,
  style,
  isFavorited = false,
  hideBackIcon,
}) {
  const [favourite, setFavourite] = useState(isFavorited);
  const navigation = useNavigation();

  return (
    <View style={[styles.default, style]}>
      {!hideBackIcon && (
        <IconContainer onPress={() => navigation.goBack()} style={styles.icon}>
          <BackIcon width="28" height="28" />
        </IconContainer>
      )}
      <View style={[styles.content, styles[variant || "title"]]}>
        {children.text && (
          <Text variant="h6" style={hideBackIcon && { paddingLeft: 15 }}>
            {children.text}
          </Text>
        )}
        {variant === "icons" && (
          <View style={styles.boxContent}>
            <IconContainer
              onPress={() => {
                setFavourite(!favourite);
                onPress.favouriteAction(children.id, !favourite);
              }}
              style={{ ...styles.icon, width: "120%" }}
            >
              {favourite ? (
                <FontAwesomeIcon icon={faFillHeart} color="#e81c0e" size={28} />
              ) : (
                <FontAwesomeIcon icon={faHeart} color="#3F3C3C" size={28} />
              )}
            </IconContainer>
            {/* <IconContainer
              onPress={() => onPress.shareAction(children.id)}
              style={{ ...styles.icon, width: "50%" }}
            >
              <Ionicons name="share-social-outline" size={32} color="#3F3C3C" />
            </IconContainer> */}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = {
  default: {
    width: "100%",
    height: 50,
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
  },
  content: {
    width: "88%",
    height: "100%",
    alignItems: "center",
  },
  icon: {
    width: "11%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  title: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  icons: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  boxContent: {
    width: "25%",
    height: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginRight: 3,
  },
};
