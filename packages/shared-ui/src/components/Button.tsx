import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  className = "",
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-500 hover:bg-blue-600";
      case "secondary":
        return "bg-gray-500 hover:bg-gray-600";
      case "outline":
        return "border border-blue-500 bg-transparent";
      default:
        return "bg-blue-500 hover:bg-blue-600";
    }
  };

  return (
    <TouchableOpacity
      className={`px-4 py-2 rounded-lg ${getVariantStyles()} ${className}`}
      {...props}
    >
      <Text
        className={`text-center font-medium ${
          variant === "outline" ? "text-blue-500" : "text-white"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
