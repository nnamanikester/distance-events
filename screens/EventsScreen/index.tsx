import * as React from "react";
import { Text, View, FlatList } from "react-native";
import { EventCard, Loading } from "../../components";
import { gql, useQuery } from "@apollo/client";
import styles from "./styles";
import { useRouter } from "expo-router";

const LIST_EVENTS_QUERY = gql`
  query ListEvents {
    listEvents {
      nextToken
      items {
        id
        title
        startDate
        logoUrl
        category
      }
    }
  }
`;

type EventData = {
  listEvents: IEventConnection;
};

export default function EventsScreen() {
  const { loading, data, error } = useQuery<EventData>(LIST_EVENTS_QUERY);
  const router = useRouter();

  const [events, setEvents] = React.useState<IEvent[]>([]);

  React.useEffect(() => {
    if (data) {
      setEvents(data.listEvents.items);
    }
  }, [data]);

  if (error) {
    console.log(error);
  }

  const openDetails = (id: string) => {
    router.push(`/details/${id}`);
  };

  if (loading) return <Loading />;

  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Events List</Text>

      <FlatList
        data={events}
        renderItem={({ item }) => (
          <EventCard onClick={openDetails} event={item} />
        )}
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
