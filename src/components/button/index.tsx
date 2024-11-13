import React from "react";
import { Button as RNButton } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function Button() {
  return <RNButton title="" color={"red"} />;
}
