import * as React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

interface ButtonProps {
  children: any;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        {props.children}
      </TouchableOpacity>
    </>
  );
};

export { Button };
