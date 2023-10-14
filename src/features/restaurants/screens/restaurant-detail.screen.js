import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="egg-fried" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Breakfast Burrito" />
          <List.Item title="French Toast" />
          <List.Item title="Hashbrowns" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Grilled Cheese" />
          <List.Item title="Chicken Lettuce Wrap" />
          <List.Item title="Pizza" />
          <List.Item title="Burger" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-steak" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Chicken Parmesan" />
          <List.Item title="Lasagna" />
          <List.Item title="Chili" />
          <List.Item title="Steak w/ Mushrooms" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="glass-wine" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Iced Coffee" />
          <List.Item title="Dr. Pepper" />
          <List.Item title="Red Wine" />
          <List.Item title="Thai Tea" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
