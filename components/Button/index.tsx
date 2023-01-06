import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
}
const Button = ({ title }: Props): JSX.Element => {
  return (
    <TouchableOpacity className="w-full flex items-center justify-center py-3 bg-sky-500 rounded-md">
      <Text className="text-slate-200">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
