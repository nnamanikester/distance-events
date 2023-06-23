import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};

export { Loading };
