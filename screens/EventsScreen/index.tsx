import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { EventCard } from "../../components";

export default function EventsScreen() {
  return (
    <View>
      <EventCard
        title="Event Title"
        imageUrl="https://placekitten.com/100"
        category="Music"
        date="2018-05-12T20:00:00.000Z"
      />

      <StatusBar style="auto" translucent={false} />
    </View>
  );
}
