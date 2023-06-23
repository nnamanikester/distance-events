import * as React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApolloProvider } from "@apollo/client";
import { graphqlService } from "../services";

const Layout: React.FC = () => {
  return (
    <ApolloProvider client={graphqlService}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            contentStyle: {
              // backgroundColor: "#080520",
            },
            gestureDirection: "horizontal",
            gestureEnabled: true,
            headerShown: false,
            customAnimationOnGesture: true,
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen
            name="details/[eventId]"
            options={{ headerTitle: "", headerShown: true }}
          />
        </Stack>
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default Layout;
