import * as React from "react";
import { Button, Image, Pressable, Text, View } from "react-native";
import styles from "./styles";
import dayjs from "dayjs";

interface EventCardProps {
  onClick?: () => void;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
}

const EventCard: React.FC<EventCardProps> = (props) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.title}>
            {props.title}
          </Text>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>{props.category}</Text>
          </View>
          <Text style={styles.date}>
            {dayjs(props.date).format("DD MMM, YYYY")}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export { EventCard };
