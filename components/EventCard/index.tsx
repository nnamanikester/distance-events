import * as React from "react";
import { Button, Image, Pressable, Text, View } from "react-native";
import styles from "./styles";
import dayjs from "dayjs";

interface EventCardProps {
  onClick?: (id: string) => void;
  event: IEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  const handleOnClick = () => {
    onClick && onClick(event.id);
  };

  return (
    <Pressable onPress={handleOnClick}>
      <View style={styles.container}>
        {event.logoUrl && (
          <View>
            <Image style={styles.image} source={{ uri: event.logoUrl }} />
          </View>
        )}
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.title}>
            {event.title}
          </Text>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>{event.category}</Text>
          </View>
          <Text style={styles.date}>
            {dayjs(event.startDate).format("DD MMM, YYYY")}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export { EventCard };
