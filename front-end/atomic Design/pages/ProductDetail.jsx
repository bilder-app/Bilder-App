import React, { useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  showModal,
  getFavoriteProducts,
  addProductToFavorites,
  removeProductFromFavorites
} from "../../redux/actions/products";
import Header from "../organisms/Header/Header";
import Slider from "../organisms/Slider";
import Footer from "../organisms/Footer/Footer";
import Text from "../atoms/Text/Text";
import Chip from "../atoms/Chip/Chip";


export default function ProductDetails({
  route = { params: { images: ["https://picsum.photos/seed/picsum/900/900"] } },
  navigation
}) {
  const {
    images,
    name = "Latex interior Alba ultralabable Blanco",
    description = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    `,
    price = 999,
    id = 1,
    specs = `
  Marca: Alba
  Tipo de pintura: Latex
  Volumen: 6 Litros (L)
  Modelo: Albalatex ultra labable
  Color: Blanco
    `,
    categories = ["Pinturas", "Latex", "Interior", "Blanco"],
  } = route.params;

  const dispatch = useDispatch();
  const showModalDispatched = () => dispatch(showModal(route.params));
  const { favoriteProducts } = useSelector((state) => state.productsList);

  const isFavorite = !!favoriteProducts.find((prod) => prod.id === id);

  useEffect(() => {
    dispatch(getFavoriteProducts());
  }, []);

  return (
    <View style={styles.main}>
      <Header 
        variant="icons" 
        children={{ id: Math.floor((Math.random() * 100) + 1) }} 
        onPress={{
          favouriteAction: console.log,
          shareAction: alert,
        }}
        style={{ elevation: 5 }}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Slider images={images} />
        <View style={styles.data}>
          <Text variant="h1" style={{ color: "#FF8000" }}>$ {price}</Text>
          <Text variant="h4">{name}</Text>
          <Text variant="subtitle1" style={{ color: "#707070" }}>{description}</Text>
          <Text variant="h4">Información General</Text>
          <Text variant="subtitle1" style={{ color: "#707070" }}>{specs}</Text>
          <Text variant="h4" >Categorias</Text>   
          <View style={styles.categories}>
            {categories.map((title, i) => <Chip key={i} children={title} style={styles.chip}/>)}
          </View>
        </View>
      </ScrollView>

      <Footer title="Comprar ahora" onPress={console.log} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%"
  },
  content: {
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: "#FCFCFC"
  },
  data: {
    width: "100%",
    marginBottom: 5
  },
  chip: {
    marginVertical: 5,
    elevation: 0,
    borderColor: "#CCC",
    borderWidth: 0.5,
  },
  categories: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  }
});
