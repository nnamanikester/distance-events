import * as React from "react";
import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout: React.FC = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#080520" }}>
        <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: "#080520",
            },
            gestureDirection: "horizontal",
            gestureEnabled: true,
            headerShown: false,
            customAnimationOnGesture: true,
            animation: "slide_from_right",
          }}
        />
      </SafeAreaView>

      <StatusBar backgroundColor="#080520" barStyle="light-content" />
    </>
  );
};

export default Layout;
