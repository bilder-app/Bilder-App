import React, { useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   showModal,
//   getFavoriteProducts,
//   addProductToFavorites,
//   removeProductFromFavorites
// } from "../../redux/actions/products";
import Header from "../organisms/Header/Header";
import Slider from "../organisms/Slider";
import Footer from "../organisms/Footer/Footer";
import Text from "../atoms/Text/Text";
import Chip from "../atoms/Chip/Chip";


export default function ProductDetails({ route }) {
  console.log(route.params)

  const {
    brand, 
    bussinessId,
    categories,
    content,
    contentType,
    description,
    id,
    images,
    model,
    name,
    price,
    stock,
  } = route.params;

  // const dispatch = useDispatch();
  // const showModalDispatched = () => dispatch(showModal(route.params));
  // const { favoriteProducts } = useSelector((state) => state.productsList);

  // const isFavorite = !!favoriteProducts.find((prod) => prod.id === id);

  // useEffect(() => {
  //   dispatch(getFavoriteProducts());
  // }, []);

  return (
    <View style={styles.main}>
      <Header 
        variant="icons" 
        children={{ id: id }} 
        onPress={{
          favouriteAction: console.log,
          shareAction: alert,
        }}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Slider images={images} />
        <View style={styles.data}>
          <Text variant="h1" style={{ color: "#FF8000" }}>$ {price}</Text>
          <Text variant="h4">{name}</Text>
          <Text variant="subtitle1" style={{ color: "#707070" }}>{description}</Text>


          <Text variant="h4" style={{ marginTop: 15 }}>Información General</Text>
          {!brand && <Text variant="subtitle1" style={{ color: "#707070" }}> Marca: {brand ||  "Black&Decker"}</Text>}
          {contentType && <Text variant="subtitle1" style={{ color: "#707070" }}> Contenido: {content || 1} {contentType}</Text>}
          {!model && <Text variant="subtitle1" style={{ color: "#707070" }}> Modelo: {model || "700GH B&D"}</Text>}
          {stock && <Text variant="subtitle1" style={{ color: "#707070" }}> Stock: {stock}</Text>}


          <Text variant="h4" style={{ marginTop: 15 }}>Categorias</Text>   
          <View style={styles.categories}>
            {categories.length
            ? categories.map((title, i) => <Chip key={i} children={title} style={styles.chip}/>)
            : <Text variant="subtitle1" style={{ color: "#707070" }}>Este producto no tiene categorías</Text>
            }
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
    backgroundColor: "#FAFAFA",
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
