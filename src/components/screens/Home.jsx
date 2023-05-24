import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import React from "react";
import MainCard from "../organisms/MainCard";
import styled from "styled-components/native";
import Screen from "../atoms/Screen";

const listToRender = [
  {
    id: 0,
    ImgUrl: require("../../../assets/images/MainCardImg.png"),
    title: "Round Eatery",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 1,
    ImgUrl: require("../../../assets/images/MainCardImg.png"),
    title: "Ice Cream Bar",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
  {
    id: 2,
    ImgUrl: require("../../../assets/images/MainCardImg.png"),
    title: "African Flavour",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
  },
];

const RenderComponent = ({ firstName, lastName }) => {
  return (
    <View style={styles.container}>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
    </View>
  );
};

const Container = styled(Screen)`
  flex-grow: 1;
  align-items: "center";
  justify-content: "center";
  padding: 0 20px 0 20px;
  background-color: "#FFFFFF";
`;

function Home({ navigation }) {
  return <Container></Container>;
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    backgroundColor: "red",
    marginBottom: 5,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Home;

{
  /* <MainCard
  key={item.id}
  ImgUrl={item.ImgUrl}
  title={item.title}
  price={item.price}
  deliveryTime={item.deliveryTime}
  rating={item.rating}
/>; */
}
