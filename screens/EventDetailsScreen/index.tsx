import * as React from "react";
import { gql, useQuery } from "@apollo/client";
import { useSearchParams } from "expo-router";
import {
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import RenderHtml from "react-native-render-html";
import styles from "./styles";
import { Loading } from "../../components";

interface EventDetailsScreenProps {}

const GET_EVENT_QUERY = gql`
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      title
      logoUrl
      descriptionHTML
      url
    }
  }
`;

type EventData = {
  getEvent: IEvent;
};

const EventDetailsScreen: React.FC<EventDetailsScreenProps> = () => {
  const { eventId } = useSearchParams();
  const { data, loading, error } = useQuery<EventData>(GET_EVENT_QUERY, {
    variables: {
      id: eventId,
    },
  });

  const [event, setEvent] = React.useState<IEvent>();

  React.useEffect(() => {
    if (data) {
      setEvent(data.getEvent);
    }
  }, [data]);

  if (error) {
    console.log(error);
  }

  const openURL = async () => {
    if (!event) return;
    if (await Linking.canOpenURL(event?.url)) {
      Linking.openURL(event.url);
    }
  };

  if (loading) return <Loading />;

  return (
    <ScrollView style={styles.layout}>
      {event && (
        <>
          <Image source={{ uri: event.logoUrl }} style={styles.headerImage} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{event.title}</Text>
            <Button title="More Details" onPress={openURL} />
          </View>
          <RenderHtml
            contentWidth={Dimensions.get("window").width}
            source={{
              html: event.descriptionHTML,
            }}
          />
        </>
      )}
    </ScrollView>
  );
};

export default EventDetailsScreen;
