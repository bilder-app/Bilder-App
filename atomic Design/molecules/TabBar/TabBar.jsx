import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Text from "../../atoms/Text/Text";
// import SVG icons in assests/icons/IconName.jsx
import Home from "../../../assets/icons/Home";
import Truck from "../../../assets/icons/Truck";
import Person from "../../../assets/icons/Person";
import Favourite from "../../../assets/icons/Favourite";

export default function MyTabBar({ state, descriptors, navigation, title }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) return null;

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;

        const menu = {
          Home: { icon: <Home isFocused={isFocused} />, title: "Inicio" },
          Favourites: {
            icon: <Favourite isFocused={isFocused} />,
            title: "Favoritos",
          },
          Orders: { icon: <Truck isFocused={isFocused} />, title: "Pedidos" },
          Profile: { icon: <Person isFocused={isFocused} />, title: "Perfil" },
        };

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented)
            navigation.navigate(route.name);
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item}
          >
            {menu[label].icon}
            {title ||
              (isFocused && (
                <Text
                  style={{ color: isFocused ? "#FF8000" : "#444D52" }}
                  variant="body1"
                >
                  {menu[label].title}
                </Text>
              ))}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 30,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
