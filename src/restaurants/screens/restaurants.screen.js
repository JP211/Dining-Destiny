import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "../../services/restaurants/mock/restaurants.context";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
