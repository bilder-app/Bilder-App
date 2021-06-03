import React from "react";
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Text from "../../atoms/Text/Text";

import { FontAwesome } from '@expo/vector-icons';

export default function MyTabBar({ state, descriptors, navigation, title }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const menu = {
    "Home": { icon: "home", title: "Inicio" },
    "Search": { icon: "search", title: "Buscar" },
    "Favourites": { icon: "heart", title: "Favoritos" },
    "Orders": { icon: "truck", title: "Pedidos" },
    "Profile": { icon: "user", title: "Perfil" },
  }

  if (focusedOptions.tabBarVisible === false)  return null;

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name);
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
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
            <FontAwesome name={menu[label].icon} size={title || isFocused ? 24 : 28} color={ isFocused ? '#FF8000' : '#444D52' } />
            {title || isFocused &&
              <Text style={{ color: isFocused ? '#FF8000' : '#444D52' }} variant="body1">
                {menu[label].title}
              </Text> 
            }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 40,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})